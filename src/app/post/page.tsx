"use client";
import { toggleAtom, tagAtom, nameAtom } from "@/store/atoms";
import { useAtom, useAtomValue } from "jotai";

export default function Post() {
  const tag = useAtomValue(tagAtom);
  const name = useAtomValue(nameAtom);
  const [toggle, setToggle] = useAtom(toggleAtom);
  return (
    <main className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">Lets talk about [ {tag} ]</h1>
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
      <p>The name atom is: [ {name || "not found"} ]</p>
      <p>The tag atom (hash) is: [ {tag || "not found"} ]</p>
    </main>
  );
}
