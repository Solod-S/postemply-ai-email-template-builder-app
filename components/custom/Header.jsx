import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import SignInGoogleButton from "./SignInGoogleButton";

function Header() {
  return (
    <div className="flex items-center justify-between p-4 shadow-md">
      <Image src={"/logo.svg"} alt="logo" width={100} height={20} />
      <div className="">
        <SignInGoogleButton />
      </div>
    </div>
  );
}

export default Header;
