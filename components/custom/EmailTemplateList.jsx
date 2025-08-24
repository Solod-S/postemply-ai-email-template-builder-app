import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../ui/button";

function EmailTemplateList() {
  const [emailList, setEmailList] = useState([]);
  return (
    <div>
      <h2 className="font-bold text-xl text-primary mt-6">Workspace</h2>
      {emailList?.length == 0 && (
        <div className="flex flex-col justify-center items-center mt-7">
          <Image src={"/email.png"} alt="email" height={250} width={250} />
          <Button className="mt-10">+ Create New</Button>
        </div>
      )}
    </div>
  );
}

export default EmailTemplateList;
