import React from "react";
import { useState, useEffect } from "react";

export const useMousePosition = (element) => {
   const [position, setPosition] = useState({ x: 0, y: 0 });

   useEffect(() => {
      const setFromEvent = (e) => setPosition({ x: e.clientX, y: e.clientY });

      const el = element || window
      el.addEventListener("mousemove", setFromEvent)

      return () => {
         el.removeEventListener("mousemove", setFromEvent);
      };
   }, []);

   return position;
};
