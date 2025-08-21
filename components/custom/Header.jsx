import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

function Header() {
  return (
    <div className="flex items-center justify-between p-4 shadow-md">
      <Image src={"/logo.svg"} alt="logo" width={100} height={20} />
      <div className="">
        <Button>Get Started</Button>
      </div>
    </div>
  );
}

export default Header;
