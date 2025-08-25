"use client";
import React, { use, useContext, useEffect, useState } from "react";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { ReactNode } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { UserDetailContext } from "@/context/userDetailContext";
import { ScreenSizeContext } from "@/context/ScreenSizeContext";
import { DragDropLayoutElementContext } from "@/context/DragDropLayoutElementContext";
import { EmailTemplateContext } from "@/context/EmailTemplateContext";

function Provider({ children }) {
  const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);
  const [userDetail, setUserDetail] = useState({});
  const [screenSize, setScreenSize] = useState("desktop");
  const [dragElementLayout, setDragElementLayout] = useState();
  const [emailTemplate, setEmailTemplate] = useState([]);

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
          <ScreenSizeContext.Provider value={{ screenSize, setScreenSize }}>
            <DragDropLayoutElementContext.Provider
              value={{
                dragElementLayout,
                setDragElementLayout,
              }}
            >
              <EmailTemplateContext.Provider
                value={{ emailTemplate, setEmailTemplate }}
              >
                {children}
              </EmailTemplateContext.Provider>
            </DragDropLayoutElementContext.Provider>
          </ScreenSizeContext.Provider>
        </UserDetailContext.Provider>
      </GoogleOAuthProvider>
    </ConvexProvider>
  );
}

export default Provider;
export const useUserDetail = () => {
  return useContext(UserDetailContext);
};

export const useScreenSize = () => {
  return useContext(ScreenSizeContext);
};
export const useDragDropElementLayout = () => {
  return useContext(DragDropLayoutElementContext);
};

export const useEmailTemplate = () => {
  return useContext(EmailTemplateContext);
};

// кастомный хук для удобного доступа к контексту
// import { useUserDetail } from "@/components/Provider";
// const { userDetail, setUserDetail } = useUserDetail();
