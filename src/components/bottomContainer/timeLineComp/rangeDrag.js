import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { connect } from "react-redux";
import * as Styled from "./style";
import { ParsePxTopercent } from "../../../common/parseHelpers";
import { useEventListener } from "../../../common/useEventListener";
import { RangeKnob } from "./rangeKnob";

const RangeDrag = React.memo((props) => {
   const { duration } = props;
   const relativRef = useRef(null);
   const [currentRelativeRef, setRelativeRef] = useState(null);

   const [dragState, setDragState] = useState({
      diffX: 0,
      diffY: 0,
      isDragging: false,
      styles: {},
   });

   const onDragMove = (e) => {
      if (dragState.isDragging) {
         const offsetLeft = e.screenX - dragState.diffX;
         const top = e.screenY - dragState.diffY;
         const rect = relativRef.current.getBoundingClientRect();
         console.log("offsetLeft", offsetLeft);
         console.log(relativRef.current.offsetParent.clientWidth);
         const parentClientWidth = relativRef.current.offsetParent.clientWidth;
         const elementClientWidth = relativRef.current.clientWidth;
         const rightBorder = parentClientWidth - elementClientWidth;

         if (offsetLeft >= 0 && offsetLeft <= rightBorder) {
            relativRef.current.style.left = offsetLeft + "px";
         }

         // setDragState({
         //    ...dragState,
         //    styles: {
         //       left: left,
         //       top: top,
         //    },
         // });
      }
   };

   useLayoutEffect(() => {
      const ref = relativRef.current;
      if (ref && !currentRelativeRef) {
         setRelativeRef(ref);
      }
   }, [relativRef]);

   const onDragStart = (e) => {
      console.log(e);
      setDragState({
         ...dragState,
         diffX: e.screenX - e.currentTarget.getBoundingClientRect().left,
         diffY: e.screenY - e.currentTarget.getBoundingClientRect().top,
         isDragging: true,
      });
   };

   const onDragEnd = () => {
      setDragState({
         ...dragState,
         isDragging: false,
      });
   };

   //Range wrapper drag event listeners
   useEventListener("mousedown", onDragStart, currentRelativeRef);
   useEventListener("mousemove", onDragMove, currentRelativeRef);
   useEventListener("mouseup", onDragEnd, currentRelativeRef);

   return (
      <Styled.RangeContainer
         ref={relativRef}
         styles={
            Object.keys(dragState.styles).length !== 0 ? dragState.styles : {}
         }
      >
         <RangeKnob relativRef={relativRef} knobSide="left" />
         <RangeKnob relativRef={relativRef} knobSide="right" />
      </Styled.RangeContainer>
   );
});

//redux connect
const mapStateToProps = (state) => ({
   duration: state.audioConfigs.duration,
});
export default connect(mapStateToProps, null)(RangeDrag);
