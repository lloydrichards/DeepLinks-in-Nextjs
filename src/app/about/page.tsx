"use client";
import { atomWithHashSync } from "@/utils/atoms";
import { useAtom, useAtomValue } from "jotai";
import { atomWithHash } from "jotai-location";
import Link from "next/link";

const topicAtom = atomWithHashSync<string>("topic", "");
const toggleAtom = atomWithHash<boolean>("toggle", false);

export default function Home() {
  const topic = useAtomValue(topicAtom);
  const [toggle, setToggle] = useAtom(toggleAtom);
  return (
    <main className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">Lets talk about [ {topic} ]</h1>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Remember me</span>
          <input
            type="checkbox"
            className="toggle-info toggle"
            checked={toggle}
            onChange={() => setToggle(!toggle)}
          />
        </label>
      </div>
    </main>
  );
}
