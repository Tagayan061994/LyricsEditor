import React, { useState, useEffect, useRef } from "react";
import * as Styled from "./timeStyle";
import {
   faChevronRight,
   faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
const POSITION = { x: 0, y: 0 };

export const RangeDrag = React.memo(() => {
   const ref = useRef(null);
   const [state, setState] = useState({
      diffX: 0,
      diffY: 0,
      isDragging: false,
      styles: {},
   });
   const [resizeState, setresizeState] = useState({
      isDragging: false,
      origin: POSITION
   });

   const dragStart = (e) => {
      setState({
         ...state,
         diffX: e.screenX - e.currentTarget.getBoundingClientRect().left,
         diffY: e.screenY - e.currentTarget.getBoundingClientRect().top,
         isDragging: true,
      });
   };

   const isDragging = (e) => {
      if (state.isDragging) {
         let left = e.screenX - state.diffX;
         let top = e.screenY - state.diffY;
         setState({
            ...state,
            styles: {
               left: left,
               top: top,
            },
         });
      }
   };

   const dragEnd = () => {
      setState({
         ...state,
         isDragging: false,
      });
   };

   const startResize = (event) => {
      const width = ref.current.clientWidth;
      const height = ref.current.clientHeight;
      const oX = (event.nativeEvent.offsetX / width) * 100;
      const oY = (event.nativeEvent.offsetY / height) * 100;
      console.log("event.clientX", width, height, Math.floor(oX), Math.floor(oY));
      setresizeState({
         isDragging: true,
         origin: { x: Math.floor(oX), y: Math.floor(oY) }
      });
      setState({ isDragging: false })
   };

   useEffect(() => {
      if (state.isDragging) {
         window.addEventListener("mousemove", isDragging);
         window.addEventListener("mouseup", dragEnd);
      }
      return () => {
         window.removeEventListener("mousemove", isDragging);
         window.removeEventListener("mouseup", dragEnd);
      };
   }, [state.isDragging, isDragging, dragEnd]);

   const stopResize = () => {
      if (resizeState.isDragging) {

      }
   };

   const resizePanel = (event) => {
      if (resizeState.isDragging) {
         console.log("width", ref.current.width);
         const delta = event.clientX - resizeState.initialPos;
         setresizeState({
            delta: delta,
         });
      }
   };

   useEffect(() => {
      if (ref.current) {
         ref.current.addEventListener("mouseup", stopResize);
         ref.current.addEventListener("mouseleave", stopResize);
         ref.current.addEventListener("mousemove", resizePanel);
      }
   }, []);

   return (
      <Styled.RangeContainer
         styles={Object.keys(state.styles).length !== 0 ? state.styles : {}}
         resizeState={resizeState}
         onMouseDown={dragStart}
         onMouseUp={() => stopResize()}
         ref={ref}
         isDragging={isDragging}
      >
         <Styled.ResizeKnobs onMouseDown={(e) => startResize(e, 1)}>
            <Styled.Icon icon={faChevronLeft} size="lg" />
         </Styled.ResizeKnobs>
         <Styled.ResizeKnobs onMouseDown={(e) => startResize(e, 1)}>
            <Styled.Icon icon={faChevronRight} size="lg" />
         </Styled.ResizeKnobs>
      </Styled.RangeContainer>
   );
});
