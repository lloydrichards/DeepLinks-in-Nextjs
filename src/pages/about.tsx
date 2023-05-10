import { NavBar } from "@/app/NavBar";
import { nameAtom, tagAtom } from "@/store/atoms";
import { useAtomValue } from "jotai";

const About = () => {
  const tag = useAtomValue(tagAtom);
  const name = useAtomValue(nameAtom);
  return (
    <div>
      <NavBar />
      <div className="grid h-96 w-full items-center justify-center">
        <main className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-slate-500 ">About Page</h1>
          <p>The name atom is: [ {name || "not found"} ]</p>
          <p>The tag atom (hash) is: [ {tag || "not found"} ]</p>
        </main>
      </div>
    </div>
  );
};

export default About;
