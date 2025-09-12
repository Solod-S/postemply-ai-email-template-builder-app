"use client";
import React from "react";
import {
  RiLayout2Line,
  RiMailDownloadLine,
  RiSave2Fill,
  RiAiGenerate2,
} from "react-icons/ri";
import { TbDragDrop } from "react-icons/tb";
import {
  MdOutlineAutoAwesome,
  MdOutlineDashboardCustomize,
} from "react-icons/md";
import { Safari } from "./safari";

import Link from "next/link";
import { PanelsTopLeft, UsersRound } from "lucide-react";
import { Button } from "../ui/button";
import { useUserDetail } from "@/app/provider";

function FeaturesSec() {
  const { userDetail } = useUserDetail();

  return (
    <>
      {/* Hero Section */}
      <div className="relative p-4 pb-20 w-full bg-gradient-to-b from-white to-cyan-50">
        <div className="absolute inset-0 -z-10 opacity-30">
          <div className="absolute top-0 left-0 w-64 h-64 bg-orange-200 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-sky-200 blur-[120px] rounded-full"></div>
        </div>

        <div className="py-10 max-w-5xl mx-auto text-center px-6">
          <p className="text-cyan-700 text-sm tracking-wider uppercase font-semibold">
            Smarter Email, Less Effort
          </p>
          <h2 className="my-4 text-3xl md:text-5xl font-extrabold text-gray-900">
            Features that Make Email{" "}
            <span className="text-cyan-600">Simple</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            AutoCompose streamlines your workflow — from design to delivery — so
            you can focus on results.
          </p>
        </div>

        {/* Feature grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <TbDragDrop className="w-12 h-12 text-cyan-600" />,
              title: "Visual Layout Builder",
              text: "Drag & drop blocks to craft the perfect layout without touching code.",
            },
            {
              icon: (
                <MdOutlineAutoAwesome className="w-12 h-12 text-orange-500" />
              ),
              title: "AI Content Magic",
              text: "Instantly generate subject lines, email copy, and CTAs that convert.",
            },
            {
              icon: (
                <RiMailDownloadLine className="w-12 h-12 text-emerald-600" />
              ),
              title: "Template Library",
              text: "Save and reuse your best-performing templates with a single click.",
            },
            {
              icon: (
                <MdOutlineDashboardCustomize className="w-12 h-12 text-pink-500" />
              ),
              title: "Brand Consistency",
              text: "Apply logos, colors, and typography to stay 100% on-brand.",
            },
          ].map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition"
            >
              {f.icon}
              <h5 className="mt-4 text-xl font-semibold text-gray-900">
                {f.title}
              </h5>
              <p className="mt-2 text-gray-600">{f.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Steps section */}
      <section className="py-16 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center">
            <p className="text-sm tracking-wider text-orange-500 font-bold uppercase">
              3 Simple Steps
            </p>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
              Design. Generate. Send.
            </h2>
          </div>

          <div className="grid items-center grid-cols-1 gap-y-10 gap-x-10 mt-12 sm:grid-cols-2 lg:grid-cols-5">
            <div className="space-y-10 lg:pr-16 xl:pr-20 lg:col-span-2">
              <div className="flex items-start">
                <RiLayout2Line className="w-12 h-12 text-cyan-600 flex-shrink-0" />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    1. Build Your Layout
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Quickly drag and arrange elements for a pixel-perfect
                    design.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <RiAiGenerate2 className="w-12 h-12 text-orange-500 flex-shrink-0" />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    2. Let AI Write for You
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Choose your tone, audience, and watch your copy come to
                    life.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <RiSave2Fill className="w-12 h-12 text-emerald-600 flex-shrink-0" />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    3. Save & Send
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Reuse your winning designs or deliver instantly to your
                    list.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <Safari
                url="magicui.design"
                className="size-full border rounded-2xl border-slate-200 shadow-lg"
                videoSrc="/vid.mp4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <div className="bg-gradient-to-r from-cyan-50 to-emerald-50 py-20">
        <section className="max-w-screen-xl mx-auto px-6 text-center">
          <h3 className="text-cyan-700 font-bold text-lg tracking-wide">
            Experience Effortless Email Creation
          </h3>
          <p className="text-gray-900 text-3xl md:text-4xl font-extrabold mt-4">
            Build, write & send emails in minutes.
          </p>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            No complex tools, no endless revisions — just a smooth and powerful
            workflow for your team.
          </p>

          <div className="mt-8">
            {userDetail?.email ? (
              <Link href="/dashboard">
                <Button className=" bg-cyan-600 hover:bg-cyan-700 text-white shadow-lg">
                  Open Dashboard <PanelsTopLeft className="ml-2" />
                </Button>
              </Link>
            ) : (
              <Link href="/">
                <Button className=" bg-cyan-600 hover:bg-cyan-700 text-white shadow-lg">
                  Get Started <UsersRound className="ml-2" />
                </Button>
              </Link>
            )}
          </div>
        </section>
      </div>
    </>
  );
}

export default FeaturesSec;
