"use client";
import { Footer, Navbar } from "@/components";
import "./globals.css";
import type { Metadata } from "next";
import type { WithAuthenticatorProps } from "@aws-amplify/ui-react";
import { withAuthenticator } from "@aws-amplify/ui-react";

export const metadata: Metadata = {
  title: "Car Hub",
  description: "Discover best cars and quick services in the world",
};

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
