import { atom } from "jotai";
import { atomWithHash } from "jotai-location";

export const tagAtom = atomWithHash<string | null>("tag", null);
export const toggleAtom = atomWithHash<boolean>("toggle", false);

export const nameAtom = atom<string | null>(null);
