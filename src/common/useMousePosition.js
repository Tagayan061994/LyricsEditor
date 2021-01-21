import React from "react";
import { useState, useEffect } from "react";

export const useMousePosition = (element) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const setFromEvent = (e) => setPosition({ x: e.clientX, y: e.clientY });

    element
      ? element.addEventListener("mousemove", setFromEvent)
      : window.addEventListener("mousemove", setFromEvent);

    return () => {
      element
        ? element.removeEventListener("mousemove", setFromEvent)
        : window.removeEventListener("mousemove", setFromEvent);
    };
  }, []);

  return position;
};
