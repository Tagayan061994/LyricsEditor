import React, { useState, useRef, useLayoutEffect } from "react";
import * as Styled from "./style";
import { useEventListener } from "../../../common/useEventListener";
import {
   faChevronRight,
   faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
const POSITION = { x: 0, y: 0 };

const iconInfo = [
   {
      comp: <Styled.Icon icon={faChevronRight} size="lg" />,
      side: "right",
   },
   {
      comp: <Styled.Icon icon={faChevronLeft} size="lg" />,
      side: "left",
   },
];

const getCurrentKnob = (side) => {
   return iconInfo.find((elem) => elem.side === side);
};

export const RangeKnob = React.memo((props) => {
   const { relativRef, knobSide } = props;
   const [currentKnob, setCurrentKnob] = useState(null);
   const [resizeState, setResizeState] = useState({
      isResizing: false,
      origin: POSITION,
   });
   const knobRef = useRef(null);

   useLayoutEffect(() => {
      const ref = knobRef.current;
      if (ref) {
         setCurrentKnob(ref);
      }
   }, [knobRef]);

   // const onDragMove = (e) => {
   //    if (dragState.isDragging) {
   //       const offsetLeft = e.screenX - dragState.diffX;
   //       const top = e.screenY - dragState.diffY;
   //       const rect = relativRef.current.getBoundingClientRect();
   //       console.log("offsetLeft", offsetLeft);
   //       console.log(relativRef.current.offsetParent.clientWidth);
   //       const parentClientWidth = relativRef.current.offsetParent.clientWidth;
   //       const elementClientWidth = relativRef.current.clientWidth;
   //       const rightBorder = parentClientWidth - elementClientWidth;

   //       if (offsetLeft >= 0 && offsetLeft <= rightBorder) {
   //          relativRef.current.style.left = offsetLeft + "px";
   //       }
   //    }
   // };

   const onResizeMove = (e) => {
      e.stopPropagation();
      if (resizeState.isResizing) {
         e.stopPropagation();
         const rect = relativRef.current.getBoundingClientRect();
         if (knobSide === "right") {
            relativRef.current.style.width = rect.width + e.movementX + "px";
         } else if (knobSide === "left") {
            console.log("offsetLeftResize", rect.x);
            // console.log("hin", resizeState.isResizing)
            relativRef.current.style.width = rect.width - e.movementX + "px";
            relativRef.current.style.left = rect.x - e.movementX + 'px'
         }
      } else {
         return false;
      }
   };

   const onResizeStart = () => {
      console.log("hin", resizeState.isResizing);
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
      <Styled.ResizeKnobs ref={knobRef}>
         {getCurrentKnob(knobSide).comp}
      </Styled.ResizeKnobs>
   );
});
