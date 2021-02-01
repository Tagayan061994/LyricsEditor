import React, { useState, useRef, useLayoutEffect } from "react";
import * as Styled from "./style";
import { useEventListener } from "../../../common/useEventListener";
import {
   faChevronRight,
   faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
const POSITION = { x: 0, y: 0 };

export const RangeKnob = React.memo((props) => {
   const { relativRef, knobSide } = props;
   const [currentKnob, setCurrentKnob] = useState(null);

   const [resizeState, setResizeState] = useState({
      isResizing: false,
      origin: POSITION,
   });
   const leftKnobRef = useRef(null);
   const rightKnobRef = useRef(null);

   useLayoutEffect(() => {
      const knobRef = rightKnobRef.current;
      if (knobRef) {
         setCurrentKnob(knobRef);
      }
   }, [rightKnobRef]);

   const onResizeMove = (e) => {
      if (resizeState.isResizing) {
         e.stopPropagation();
         const rect = relativRef.current.getBoundingClientRect();
         console.log(rect.width);
         relativRef.current.style.width = rect.width + e.movementX + "px";
      } else {
         return false;
      }
   };

   const onResizeStart = () => {
      setResizeState({
         isResizing: true,
      });
   };

   const onResizeEnd = () => {
      setResizeState({
         isResizing: false,
      });
   };

   //Knob eventListeners
   useEventListener("mousedown", onResizeStart, currentKnob);
   useEventListener("mousemove", onResizeMove, currentKnob);
   useEventListener("mouseup", onResizeEnd, currentKnob);
   return (
      <Styled.ResizeKnobs ref={rightKnobRef}>
         <Styled.Icon icon={knobSide === "right" ? faChevronRight : faChevronLeft} size="lg" />
      </Styled.ResizeKnobs>
   );
});
