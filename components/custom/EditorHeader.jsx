"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Code, Monitor, Smartphone } from "lucide-react";
import { useEmailTemplate, useScreenSize } from "@/app/provider";
import { FaRegSave } from "react-icons/fa";
import { MdSaveAlt, MdOpenInNew } from "react-icons/md";
import { useMutation } from "convex/react";
import { useParams } from "next/navigation";
import { api } from "@/convex/_generated/api";
import Link from "next/link";
import { toast } from "sonner";

function EditorHeader({ viewHTMLCode }) {
  const { screenSize, setScreenSize } = useScreenSize();
  const updatedEmailTemplate = useMutation(
    api.emailTemplate.UpdateTemplateDesign
  );
  const { templateId } = useParams();
  const { emailTemplate, setEmailTemplate } = useEmailTemplate();

  const [isSaved, setIsSaved] = useState(false); // <-- new state for "saved"

  const onSaveTemplate = async () => {
    try {
      await updatedEmailTemplate({
        tid: templateId,
        design: JSON.stringify(emailTemplate),
      });
      setIsSaved(true); // <-- set saved true after save
      toast.success("Template saved successfully 🎉");
      setTimeout(() => setIsSaved(false), 2000); // <-- hide "saved" after 2 seconds
    } catch (error) {
      console.log("Error saving template:", error);
      toast.error("Failed to save template ❌");
    }
  };

  const copyEmailTemplate = () => {
    const emailElement = document.getElementById("email-preview"); // or whatever your preview container id is

    if (!emailElement) {
      console.error("Email preview not found.");
      toast.error("Email preview not found. ❌");
      return;
    }

    const range = document.createRange();
    range.selectNodeContents(emailElement);

    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    try {
      document.execCommand("copy");
      // alert("Template copied! Now paste it into Gmail 🎯");
      toast.success("Template copied! Now paste it into Gmail 🎯");
    } catch (err) {
      console.error("Failed to copy:", err);
      toast.error("Failed to copy email template ❌");
    }

    selection.removeAllRanges();
  };
  return (
    <div className="p-4  shadow-md flex justify-between items-center">
      <Link href={"/"}>
        <Image src={"/logo.svg"} alt="logo" width={100} height={20} />
      </Link>
      <div className="flex gap-3">
        <Button
          onClick={() => setScreenSize("desktop")}
          variant="ghost"
          className={`hover:text-primary hover:bg-purple-100 ${screenSize === "desktop" && `bg-purple-100 text-primary`}`}
        >
          <Monitor /> Desktop
        </Button>
        <Button
          onClick={() => setScreenSize("mobile")}
          variant="ghost"
          className={`hover:text-primary hover:bg-purple-100 ${screenSize === "mobile" && `bg-purple-100 text-primary`}`}
        >
          <Smartphone /> Mobile
        </Button>
      </div>
      <div className="flex gap-3">
        <Button
          variant="ghost"
          className="hover:text-primary hover:bg-purple-50"
          onClick={() => viewHTMLCode(true)}
        >
          <Code />
        </Button>
        <Button
          onClick={copyEmailTemplate}
          className="flex items-center bg-slate-100 rounded-sm cursor-pointer hover:bg-slate-100 gap-1 text-slate-800 border-2 border-slate-300"
        >
          Copy Template
          <MdOpenInNew />
        </Button>
        <div className="flex items-center gap-2">
          <Button
            onClick={onSaveTemplate}
            className="flex items-center bg-violet-600 rounded-sm cursor-pointer hover:bg-violet-700 gap-1"
          >
            {isSaved ? (
              <span className="text-slate-50 font-semibold text-sm flex items-center gap-1">
                Saved! <FaRegSave />
              </span>
            ) : (
              <>
                Save Template <FaRegSave />
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default EditorHeader;
