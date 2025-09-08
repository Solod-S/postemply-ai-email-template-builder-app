"use client";
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { useUserDetail } from "@/app/provider";

function SignOutGoogleButton() {
  const router = useRouter();
  const { setUserDetail } = useUserDetail();

  const handleLogout = () => {
    // Удаляем данные пользователя из localStorage
    localStorage.removeItem("userDetail");

    // Сбрасываем состояние
    setUserDetail(null);

    // Перенаправляем на главную
    router.push("/");
  };

  return (
    <Button className="w-full" onClick={handleLogout} variant="destructive">
      Sign Out
    </Button>
  );
}

export default SignOutGoogleButton;
