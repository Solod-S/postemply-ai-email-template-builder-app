"use client";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useUserDetail } from "./provider";

export default function AuthGuard({ children }) {
  const { userDetail } = useUserDetail();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (userDetail === null) return;
    if (userDetail?.email && pathname === "/") {
      router.replace("/dashboard");
    } else if (!userDetail?.email && pathname !== "/") {
      router.replace("/");
    }
  }, [userDetail, pathname, router]);

  return <>{children}</>;
}
