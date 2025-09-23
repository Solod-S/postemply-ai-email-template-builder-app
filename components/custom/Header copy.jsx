"use client";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import SignInGoogleButton from "./SignInGoogleButton";
import { useUserDetail } from "@/app/provider";
import Link from "next/link";
import SignOutGoogleButton from "./SignOutGoogleButton ";

function Header() {
  const { userDetail, setUserDetail } = useUserDetail();
  return (
    <div className="flex items-center justify-between p-4 shadow-md">
      <Link href={"/"}>
        <Image src={"/logo.png"} alt="logo" width={100} height={20} />
      </Link>
      <div className="">
        {userDetail?.email ? (
          <div className="flex gap-3 items-center">
            <Link href={"/dashboard"}>
              <Button>Dashboard</Button>
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Image
                  src={userDetail?.picture}
                  alt="user"
                  width={35}
                  height={35}
                  className="rounded-full cursor-pointer"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                <DropdownMenuItem disabled>
                  {userDetail?.name || "User"}
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <SignOutGoogleButton />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <SignOutGoogleButton />
          </div>
        ) : (
          <SignInGoogleButton />
        )}
      </div>
    </div>
  );
}

export default Header;
