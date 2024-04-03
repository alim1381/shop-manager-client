"use client";
import { createContext, useState } from "react";

type sidebarTypes = {
  isOpen: Boolean;
  setIsOpen: any;
};
export const SidebarContext = createContext<sidebarTypes>({
  isOpen: true,
  setIsOpen: () => true,
});

export function SidebarContextProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SidebarContext.Provider>
  );
}
