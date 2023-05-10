import { tagAtom } from "@/store/atoms";
import { useAtomValue } from "jotai";
import Link from "next/link";

export const NavBar = () => {
  const tag = useAtomValue(tagAtom);

  return (
    <nav className="navbar">
      <ul className="flex flex-row">
        <li className="btn-ghost btn text-xl normal-case">
          <Link href="/">Home</Link>
        </li>
        <li className="btn-ghost btn text-xl normal-case">
          <Link href="/post">Post</Link>
        </li>
        <li className="btn-ghost btn text-xl normal-case">
          <Link href={`/post#tag="sports"`}>Post: [ Sports ]</Link>
        </li>
        <li className="btn-ghost btn text-xl normal-case">
          <Link href={`/post#tag="${tag}"`}>Post: [ {tag} ]</Link>
        </li>
        <li className="btn-ghost btn text-xl normal-case">
          <Link href={`/about#tag="${tag}"`}>About (pages): [ {tag} ]</Link>
        </li>
      </ul>
    </nav>
  );
};
