import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

function Hero() {
  return (
    <div className="px-10, md:px-28 lg:px-44 xl:px-56 py-20 flex flex-col items-center justify-center text-center">
      <h2 className="font-extrabold text-4xl">
        Elevate every email.
        <span className="text-chart-1"> Ai-Powered</span>
        <span className="text-primary"> Email Templates.</span>
      </h2>
      <p className="mt-6 text-lg text-gray-600 max-w-2xl">
        An AI-powered app for generating email marketing templates. Easily
        create professional designs for any campaign and make your emails more
        effective.
      </p>
      <div className="flex gap-4 mt-6">
        <Button variant="outline">Try Demo</Button>
        <Button>Get Started</Button>
      </div>
      <Image
        src={"/landing.png"}
        alt="landing"
        width={1000}
        height={800}
        className="mt-12 rounded-xl"
      />
    </div>
  );
}

export default Hero;
