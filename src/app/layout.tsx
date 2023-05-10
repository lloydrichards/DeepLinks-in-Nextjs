"use client";
import "../styles/globals.css";
import { NavBar } from "./NavBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className="grid h-96 w-full items-center justify-center">
          {children}
        </main>
      </body>
    </html>
  );
}
