import Header from "@/components/header/Header";
import Sidebar from "@/components/sidebar/Sidebar";
import React from "react";

function MainLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex h-screen bg-gray-900">
      <Sidebar />
      <div className=" flex flex-col flex-1">
        <Header />
        <main className="h-full overflow-y-auto">
          <div className="container px-6 mx-auto grid">{children}</div>
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
