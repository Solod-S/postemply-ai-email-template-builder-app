"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { Toaster } from "sonner";
import Provider from "./provider";

export default function ClientLayout({ children }) {
  return (
    <>
      <ProgressBar
        height="4px"
        color="#0092B8"
        options={{ showSpinner: true }}
        shallowRouting
      />
      <Provider>{children}</Provider>
      <Toaster richColors position="bottom-right" />
    </>
  );
}
