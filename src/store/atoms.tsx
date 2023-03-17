import { atomWithHashSync } from "@/utils/atoms";
import { atomWithHash } from "jotai-location";

export const nameAtom = atomWithHashSync<string>("name", "");
export const topicAtom = atomWithHashSync<string>("topic", "");
export const toggleAtom = atomWithHash<boolean>("toggle", false);
