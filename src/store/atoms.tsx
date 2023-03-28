import { atomWithHashSync } from "@/utils/atoms";
import { atomWithHash } from "jotai-location";

export const nameAtom = atomWithHash<string>("name", "");
export const topicAtom = atomWithHash<string>("topic", "");
export const toggleAtom = atomWithHash<boolean>("toggle", false);
