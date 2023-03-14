"use client";
import { atomWithHashSync } from "@/utils/atoms";
import { useAtom } from "jotai";

const nameAtom = atomWithHashSync<string>("name", "");

export default function Home() {
  const [name, setName] = useAtom(nameAtom);
  return (
    <main className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold text-slate-500 ">Welcome, {name}</h1>
      <input
        type="text"
        value={name}
        placeholder="Enter your name..."
        className="input-bordered input  w-full max-w-xs"
        onChange={(e) => setName(e.target.value)}
      />
    </main>
  );
}
