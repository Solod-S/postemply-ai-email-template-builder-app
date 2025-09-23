"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BsStars } from "react-icons/bs";
import { HiMiniWindow } from "react-icons/hi2";
import { FaRegFaceSmileBeam } from "react-icons/fa6";
import AllInputBox from "@/components/custom/AllInputBox";

function CreateNew() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg border p-8 sm:p-10 lg:p-16 space-y-8">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">
            Create New Email Template
          </h2>
          <p className="mt-2 text-base sm:text-lg text-gray-500">
            AI-powered email template creation made simple — professional
            results, no coding needed.
          </p>
        </div>

        <Tabs defaultValue="AI" className="w-full">
          <TabsList className="flex h-13 justify-center gap-2 bg-gray-50 p-1 rounded-xl">
            <TabsTrigger
              value="AI"
              className="flex items-center gap-2 px-4 py-2 text-md font-medium hover:bg-white hover:shadow-sm rounded-sm transition cursor-pointer"
            >
              Create with AI <BsStars className="text-indigo-400" />
            </TabsTrigger>
            <TabsTrigger
              value="SCRATCH"
              disabled
              className="flex items-center gap-2 px-4 py-2 text-md font-medium hover:bg-white hover:shadow-sm rounded-sm transition cursor-pointer"
            >
              Start from Scratch <HiMiniWindow className="text-indigo-400" />
            </TabsTrigger>
          </TabsList>

          <TabsContent value="AI" className="mt-1">
            <AllInputBox />
          </TabsContent>

          <TabsContent value="SCRATCH" className="mt-6 text-gray-600">
            <h2 className="font-semibold md:ml-2 text-lg flex items-center gap-2">
              Feature Coming Soon! <FaRegFaceSmileBeam />
            </h2>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default CreateNew;
