import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { Code, Monitor, Smartphone } from "lucide-react";

function EditorHeader() {
  return (
    <div className="p-4  shadow-md flex justify-between items-center">
      <Image src={"/logo.svg"} alt="logo" width={100} height={20} />
      <div className="flex gap-3">
        <Button
          variant="ghost"
          className="hover:text-primary hover:bg-purple-50"
        >
          <Monitor /> Desktop
        </Button>
        <Button
          variant="ghost"
          className="hover:text-primary hover:bg-purple-50"
        >
          <Smartphone /> Mobile
        </Button>
      </div>
      <div className="flex gap-3">
        <Button
          variant="ghost"
          className="hover:text-primary hover:bg-purple-50"
        >
          <Code />
        </Button>
        <Button variant="outline">Send Test Email</Button>
        <Button>Save Template</Button>
      </div>
    </div>
  );
}

export default EditorHeader;
