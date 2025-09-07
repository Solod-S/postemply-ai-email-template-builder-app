"use client";
import { useEmailTemplate, useUserDetail } from "@/app/provider";
import Canvas from "@/components/custom/Canvas";
import EditorHeader from "@/components/custom/EditorHeader";
import ElementsSideBar from "@/components/custom/ElementsSideBar";
import Settings from "@/components/custom/Settings";
import { api } from "@/convex/_generated/api";
import { useConvex } from "convex/react";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

function Editor() {
  const [viewHTMLCode, setViewHTMLCode] = useState();
  const { templateId } = useParams();
  const { userDetail, setUserDetail } = useUserDetail();
  const [loading, setLoading] = useState(true);
  const { emailTemplate, setEmailTemplate } = useEmailTemplate();
  const convex = useConvex();

  useEffect(() => {
    if (userDetail?.email) {
      GetTemplateData();
    }
  }, [userDetail]);

  const GetTemplateData = async () => {
    try {
      setLoading(true);
      console.log(`templateId`, templateId);
      console.log(`userDetail?.email`, userDetail?.email);
      const result = await convex.query(api.emailTemplate.GetTemplateDesign, {
        tid: templateId,
        email: userDetail?.email,
      });

      if (result?.design) {
        setEmailTemplate(result.design); // fixed!
      }
    } catch (error) {
      console.log("Error fetching template data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <EditorHeader viewHTMLCode={(v) => setViewHTMLCode(v)} />

      <div className="grid grid-cols-5">
        <ElementsSideBar />
        <div className="col-span-3 bg-gray-100">
          {loading ? (
            <div className="flex h-[80vh] items-center justify-center">
              <Loader2 className="h-10 w-10 animate-spin text-gray-500" />
            </div>
          ) : (
            <Canvas
              viewHTMLCode={viewHTMLCode}
              closeDialog={() => setViewHTMLCode(false)}
            />
          )}
        </div>

        <Settings />
      </div>
    </div>

  );
}

export default Editor;
