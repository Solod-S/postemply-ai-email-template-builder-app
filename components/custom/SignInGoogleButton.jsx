"use client";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import React from "react";
import { Button } from "../ui/button";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useRouter } from "next/navigation";
import { useUserDetail } from "@/app/provider";

function SignInGoogleButton() {
  const router = useRouter();
  const { setUserDetail } = useUserDetail();
  const CreateUser = useMutation(api.users.CreateUser);
  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const userInfo = await axios.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        { headers: { Authorization: "Bearer " + tokenResponse.access_token } }
      );
      const user = userInfo?.data;

      // Save to DB
      const result = await CreateUser({
        name: user?.name,
        email: user?.email,
        picture: user?.picture,
      });
      const userDetail = {
        ...user,
        _id: result?._id ?? result,
      };
      if (typeof window !== undefined && user) {
        // Save to Local Storage
        localStorage.setItem("userDetail", JSON.stringify(userDetail));
        setUserDetail(userDetail);
        setTimeout(() => {
          router.push("/dashboard");
        }, 500);
      }
    },
    onError: (errorResponse) => console.log(errorResponse),
  });

  return (
    <div>
      <Button onClick={googleLogin}>
        <span className="font-medium">Get Started with </span>
        <svg
          className="w-5 h-5"
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#EA4335"
            d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.63 2.7 30.18 0 24 0 14.7 0 6.57 5.38 2.56 13.22l7.98 6.19C12.43 13.7 17.74 9.5 24 9.5z"
          />
          <path
            fill="#4285F4"
            d="M46.5 24.5c0-1.62-.15-3.18-.43-4.68H24v9.1h12.65c-.55 2.93-2.18 5.41-4.65 7.07l7.36 5.72C43.79 37.98 46.5 31.76 46.5 24.5z"
          />
          <path
            fill="#FBBC05"
            d="M10.54 28.41c-.48-1.4-.74-2.9-.74-4.41s.26-3.01.74-4.41l-7.98-6.19C.92 16.64 0 20.17 0 24s.92 7.36 2.56 10.6l7.98-6.19z"
          />
          <path
            fill="#34A853"
            d="M24 48c6.48 0 11.91-2.13 15.88-5.79l-7.36-5.72c-2.05 1.38-4.69 2.2-8.52 2.2-6.26 0-11.57-4.2-13.46-10.01l-7.98 6.19C6.57 42.62 14.7 48 24 48z"
          />
        </svg>
      </Button>
    </div>
  );
}

export default SignInGoogleButton;
