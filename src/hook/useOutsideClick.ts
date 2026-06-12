import { useEffect } from "react";

type Handler = () => void;

export const useOutsideClick = (
  ref: React.RefObject<HTMLElement | null>,
  handler: Handler
) => {
  useEffect(() => {
    const listener = (event: MouseEvent |  TouchEvent) => {
      const el = ref.current;

      // no element or click inside → do nothing
      if (!el || el.contains(event.target as Node)) return;

      handler(); // clicked outside
    };

    document.addEventListener("mousedown", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};