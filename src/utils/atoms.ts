import { atomWithHash } from "jotai-location";
import Router from "next/router";

export const atomWithHashSync = <T>(key: string, value: T) =>
  atomWithHash<T>(key, value, {
    subscribe: (callback) => {
      Router.events.on("routeChangeComplete", callback);
      Router.events.on("hashChangeComplete", callback);
      window.addEventListener("hashchange", callback);
      return () => {
        Router.events.off("routeChangeComplete", callback);
        Router.events.off("hashChangeComplete", callback);
        window.removeEventListener("hashchange", callback);
      };
    },
  });
