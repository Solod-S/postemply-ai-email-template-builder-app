"use client";
import React, { use, useContext, useEffect, useState } from "react";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { ReactNode } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";

import { ScreenSizeContext } from "@/context/ScreenSizeContext";
import { DragDropLayoutElementContext } from "@/context/DragDropLayoutElementContext";
import { EmailTemplateContext } from "@/context/EmailTemplateContext";
import { SelectedElementContext } from "@/context/SelectedElement";
import AuthGuard from "./authGuard";
import { useRouter, usePathname } from "next/navigation";
import { UserDetailContext } from "@/context/UserDetailContext";

function Provider({ children }) {
  const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);
  const router = useRouter();
  const [userDetail, setUserDetail] = useState(null);
  const [screenSize, setScreenSize] = useState("desktop");
  const [dragElementLayout, setDragElementLayout] = useState();
  const [emailTemplate, setEmailTemplate] = useState([]);
  const [selectedElement, setSelectedElement] = useState();

  useEffect(() => {
    if (typeof window !== undefined) {
      const userStorageDetail = JSON.parse(localStorage.getItem("userDetail"));
      const emailTemplateStorage = JSON.parse(
        localStorage.getItem("emailTemplate")
      );
      setEmailTemplate(emailTemplateStorage ?? []);
      if (!userStorageDetail?.email || !userStorageDetail) {
        setUserDetail({});
      } else {
        setUserDetail(userStorageDetail);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== undefined) {
      localStorage.setItem("emailTemplate", JSON.stringify(emailTemplate));
    }
  }, [emailTemplate]);
  useEffect(() => {
    const updatedEmailTemplates = [];
    if (selectedElement) {
      emailTemplate.forEach((item, index) => {
        if (item?.id === selectedElement?.layout?.id) {
          updatedEmailTemplates?.push(selectedElement?.layout);
        } else {
          updatedEmailTemplates?.push(item);
        }
      });
      setEmailTemplate(updatedEmailTemplates);
    }
  }, [selectedElement]);
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
                <SelectedElementContext.Provider
                  value={{ selectedElement, setSelectedElement }}
                >
                  <AuthGuard>{children}</AuthGuard>
                </SelectedElementContext.Provider>
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

export const useSelectedElement = () => {
  return useContext(SelectedElementContext);
};

// кастомный хук для удобного доступа к контексту
// import { useUserDetail } from "@/components/Provider";
// const { userDetail, setUserDetail } = useUserDetail();
