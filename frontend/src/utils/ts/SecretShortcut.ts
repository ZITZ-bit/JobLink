"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const SecretShortcut = (): null => {
  const router = useRouter();

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent): void => {
      if (event.ctrlKey && event.shiftKey && event.key === "Z") {
        router.push("/ui/Secret");
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [router]);

  return null;
};

export default SecretShortcut;
