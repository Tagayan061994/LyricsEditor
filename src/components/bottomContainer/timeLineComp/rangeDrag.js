import React, { useState, useEffect } from "react";
import * as Styled from "./timeStyle";
import {
   faChevronRight,
   faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

export const RangeDrag = React.memo(() => {
   const [state, setState] = useState({
      diffX: 0,
      diffY: 0,
      isdragging: false,
      styles: {},
   });

   const dragStart = (e) => {
      setState({
         ...state,
         ...state.styles,
         diffX: e.screenX - e.currentTarget.getBoundingClientRect().left,
         diffY: e.screenY - e.currentTarget.getBoundingClientRect().top,
         isdragging: true,
      });
   };

   const isdragging = (e) => {
      if (state.isdragging) {
         let left = e.screenX - state.diffX;
         let top = e.screenY - state.diffY;
         setState({
            ...state,
            ...state.styles,
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
         ...state.styles,
         isdragging: false,
      });
   };

   // useEffect(() => {
   //    window.addEventListener('mousemove', isdragging);
   //    window.addEventListener('mousedown', dragStart);
   //    return () => {
   //       window.removeEventListener('mousemove', isdragging);
   //       window.removeEventListener('mousemove', dragStart)
   //    }
   // }, [])

   return (
      <Styled.RangeContainer
         styles={Object.keys(state.styles).length !== 0 ? state.styles : {}}
         onMouseDown={dragStart}
         onMouseMove={isdragging}
         onMouseUp={dragEnd}
      >
         <Styled.ResizeKnobs>
            <Styled.Icon icon={faChevronLeft} size="lg" />
         </Styled.ResizeKnobs>
         <Styled.ResizeKnobs>
            <Styled.Icon icon={faChevronRight} size="lg" />
         </Styled.ResizeKnobs>
      </Styled.RangeContainer>
   );
});
