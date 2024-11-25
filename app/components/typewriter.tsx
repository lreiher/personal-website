"use client";

import { useEffect, useState } from "react";

export default function Typewriter({ text }: { text: string }) {
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
        setTypedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
        }, Math.floor(Math.random() * 200) + 50);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <h1
      className="mb-8 text-4xl font-semibold tracking-tighter"
      style={{ fontFamily: "MonaspaceArgon, Courier New, monospace" }}
    >
      {typedText}
    </h1>
  );
}