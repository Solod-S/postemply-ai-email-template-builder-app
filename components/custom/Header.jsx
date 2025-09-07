"use client";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import SignInGoogleButton from "./SignInGoogleButton";
import { useUserDetail } from "@/app/provider";
import Link from "next/link";

function Header() {
  const { userDetail, setUserDetail } = useUserDetail();
  return (
    <div className="flex items-center justify-between p-4 shadow-md">
      <Link href={"/"}>
        <Image src={"/logo.svg"} alt="logo" width={100} height={20} />
      </Link>
      <div className="">
        {userDetail?.email ? (
          <div className="flex gap-3 items-center">
            <Link href={"/dashboard"}>
              <Button>Dashboard</Button>
            </Link>
            <Image
              src={userDetail?.picture}
              alt="user"
              width={35}
              height={35}
              className="rounded-full"
            />
          </div>
        ) : (
          <SignInGoogleButton />
        )}
      </div>
    </div>
  );
}

export default Header;
