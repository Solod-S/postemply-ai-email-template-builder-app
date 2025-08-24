"use client";
import React, { use, useContext, useEffect, useState } from "react";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { ReactNode } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { UserDetailContext } from "@/context/userDetailContext";

function Provider({ children }) {
  const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);
  const [userDetail, setUserDetail] = useState({});

  useEffect(() => {
    if (typeof window !== undefined) {
      const userStorageDetail = JSON.parse(localStorage.getItem("userDetail"));
      if (!userStorageDetail?.email || !userStorageDetail) {
        // Redirect to home page
      } else {
        console.log(`userStorageDetail: `, userStorageDetail);
        setUserDetail(userStorageDetail);
      }
    }
  }, []);
  return (
    <ConvexProvider client={convex}>
      <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
        <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
          {children}
        </UserDetailContext.Provider>
      </GoogleOAuthProvider>
    </ConvexProvider>
  );
}

export default Provider;
export const useUserDetail = () => {
  return useContext(UserDetailContext);
};

// кастомный хук для удобного доступа к контексту
// import { useUserDetail } from "@/components/Provider";
// const { userDetail, setUserDetail } = useUserDetail();
