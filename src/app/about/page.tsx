"use client";
import { toggleAtom, topicAtom } from "@/store/atoms";
import { useAtom, useAtomValue } from "jotai";

export default function Home() {
  const topic = useAtomValue(topicAtom);
  console.log("topic", topic);
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
