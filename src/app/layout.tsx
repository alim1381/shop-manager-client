import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SidebarContextProvider } from "@/context/SidebarContext";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shop Manager",
  description: "Manager shop products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <SidebarContextProvider>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar
            toastStyle={{ backgroundColor: "rgb(26 28 35 )" }}
            newestOnTop={false}
            closeOnClick
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
          {children}
        </SidebarContextProvider>
      </body>
    </html>
  );
}
