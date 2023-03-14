"use client";
import { atomWithHashSync } from "@/utils/atoms";
import { useAtom, useAtomValue } from "jotai";
import { atomWithHash } from "jotai-location";
import Link from "next/link";

const topicAtom = atomWithHashSync<string>("topic", "");

export default function Home() {
  const topic = useAtomValue(topicAtom);
  return (
    <main className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">Lets talk about [ {topic} ]</h1>
    </main>
  );
}
