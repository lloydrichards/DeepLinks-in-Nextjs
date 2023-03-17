"use client";
import { nameAtom } from "@/store/atoms";
import { useAtomValue } from "jotai";
import Link from "next/link";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const name = useAtomValue(nameAtom);
  return (
    <html lang="en">
      <body>
        <nav className="navbar">
          <ul className="flex flex-row">
            <li className="btn-ghost btn text-xl normal-case">
              <Link href="/">Home</Link>
            </li>
            <li className="btn-ghost btn text-xl normal-case">
              <Link href="/about">About</Link>
            </li>
            <li className="btn-ghost btn text-xl normal-case">
              <Link href={`/about#topic="sports"`} replace>
                About:Sports
              </Link>
            </li>
            <li className="btn-ghost btn text-xl normal-case">
              <Link href={`/about#topic="${name}"`} replace>
                About:{name}
              </Link>
            </li>
            <li className="btn-ghost btn text-xl normal-case">
              <Link href={`/about#topic="${name}"`}>About:{name}</Link>
            </li>
          </ul>
        </nav>
        <main className="grid h-96 w-full items-center justify-center">
          {children}
        </main>
      </body>
    </html>
  );
}
