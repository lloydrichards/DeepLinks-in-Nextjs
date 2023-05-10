"use client";
import { nameAtom, tagAtom } from "@/store/atoms";
import { useAtom } from "jotai";

export default function Home() {
  const [tag, setTag] = useAtom(tagAtom);
  const [name, setName] = useAtom(nameAtom);
  return (
    <main className="grid w-96 gap-4">
      <h1 className="text-3xl font-bold text-slate-500 ">
        Welcome{name ? `, ${name}` : "!"}
      </h1>
      <input
        type="text"
        value={name || ""}
        placeholder="Enter your name atom..."
        className="input-bordered input  w-full max-w-xs"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        value={tag || ""}
        placeholder="Enter a tag atom (hash)..."
        className="input-bordered input  w-full max-w-xs"
        onChange={(e) => setTag(e.target.value)}
      />
    </main>
  );
}
