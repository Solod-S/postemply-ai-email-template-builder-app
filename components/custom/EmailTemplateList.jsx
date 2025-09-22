import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { useConvex } from "convex/react";
import { useUserDetail } from "@/app/provider";
import { api } from "@/convex/_generated/api";
import { Loader2 } from "lucide-react";

function EmailTemplateList() {
  const convex = useConvex();
  const { userDetail } = useUserDetail();

  const [emailList, setEmailList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (userDetail?.email) {
      getTemplateList();
    }
  }, [userDetail]);

  const getTemplateList = async () => {
    try {
      setLoading(true);
      const result = await convex.query(api.emailTemplate.GetAllUserTemplate, {
        email: userDetail?.email,
      });

      if (result?.length > 0) {
        setEmailList(result);
      } else {
        setEmailList([]);
      }
    } catch (error) {
      console.error("Error fetching templates:", error);
      setEmailList([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="font-bold text-xl text-primary mt-6">Workspace</h2>

      {loading ? (
        <div className="flex justify-center items-center mt-40">
          <Loader2 className="h-10 w-10 animate-spin text-primary" />
        </div>
      ) : emailList?.length === 0 ? (
        <div className="flex flex-col justify-center items-center mt-7">
          <Image src={"/email.png"} alt="email" height={250} width={250} />
          <Link href={"/dashboard/create"}>
            <Button className="mt-10">+ Create New</Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-5">
          {emailList?.map((item, index) => (
            <div
              className="flex flex-col justify-between p-5 rounded-lg shadow-md"
              key={index}
            >
              <Image
                className="mx-auto"
                src={"/emailbox.png"}
                alt="email"
                height={200}
                width={200}
              />
              <div>
                <h2 className="mt-2">{item?.description}</h2>
                <Link href={`/editor/${item?.tid}`}>
                  <Button className="mt-2 w-full">View / Edit Template</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default EmailTemplateList;
