import React, { useRef, useLayoutEffect, useState } from 'react';
import * as Styled from "./style"
import { useEventListener } from "../../../common/useEventListener";

export const RangeCenter = React.memo((props) => {
   const { relativRef } = props
   const centerDragRef = useRef(null);
   const [currentCenterDrag, setCurrentCenterDrag] = useState(null)
   const [dragState, setDragState] = useState({
      diffX: 0,
      diffY: 0,
      isDragging: false,
      styles: {},
   });


   useLayoutEffect(() => {
      const refCenterDrag = centerDragRef.current;
      if (centerDragRef && !currentCenterDrag) {
         setCurrentCenterDrag(refCenterDrag);
      }
   }, [centerDragRef]);


   const onDragStart = (e) => {
      console.log("drag start");
      setDragState({
         ...dragState,
         diffX: e.screenX - e.currentTarget.getBoundingClientRect().left,
         isDragging: true,
      });
   };

   const onDragMove = (e) => {
      if (dragState.isDragging) {
         console.log(dragState.isDragging);
         const offsetLeft = e.screenX - dragState.diffX;
         const top = e.screenY - dragState.diffY;
         const rect = relativRef.current.getBoundingClientRect();
         const parentClientWidth = relativRef.current.offsetParent.clientWidth;
         const elementClientWidth = relativRef.current.clientWidth;
         const rightBorder = parentClientWidth - elementClientWidth;

         if (offsetLeft >= 0 && offsetLeft <= rightBorder) {
            relativRef.current.style.left = offsetLeft + "px";
         }
      }
   };

   const onDragEnd = (e) => {
      const left = e.screenX - dragState.diffX;
      const top = e.screenY - dragState.diffY;
      setDragState({
         ...dragState,
         isDragging: false,
         styles: {
            left: left,
         },
      });
   };

   //Range wrapper drag event listeners
   useEventListener("mousedown", onDragStart, currentCenterDrag);
   useEventListener("mousemove", onDragMove);
   useEventListener("mouseup", onDragEnd, currentCenterDrag);

   return (<Styled.RangeDrag ref={centerDragRef}></Styled.RangeDrag>);
});

