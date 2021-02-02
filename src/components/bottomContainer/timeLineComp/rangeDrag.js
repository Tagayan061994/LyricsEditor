import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { connect } from "react-redux";
import * as Styled from "./style";
import { ParsePxTopercent } from "../../../common/parseHelpers";
import { useEventListener } from "../../../common/useEventListener";
import { RangeKnob } from "./rangeKnob";
import { RangeCenter } from "./rangeCenter";

const RangeDrag = React.memo((props) => {
   const { duration } = props;
   const containerRef = useRef(null);
   // const centerDragElementRef = useRef(null);
   const [currentRelativeRef, setRelativeRef] = useState(null);
   // const [currentCenterDrag, setCurrentCenterDrag] = useState(null)

   // const [dragState, setDragState] = useState({
   //    diffX: 0,
   //    diffY: 0,
   //    isDragging: false,
   //    styles: {},
   // });

   // const onDragMove = (e) => {
   //    if (dragState.isDragging) {
   //       console.log(dragState.isDragging);
   //       const offsetLeft = e.screenX - dragState.diffX;
   //       const top = e.screenY - dragState.diffY;
   //       const rect = containerRef.current.getBoundingClientRect();
   //       const parentClientWidth = containerRef.current.offsetParent.clientWidth;
   //       const elementClientWidth = containerRef.current.clientWidth;
   //       const rightBorder = parentClientWidth - elementClientWidth;

   //       if (offsetLeft >= 0 && offsetLeft <= rightBorder) {
   //          containerRef.current.style.left = offsetLeft + "px";
   //       }
   //    }
   // };

   useLayoutEffect(() => {
      const refRelative = containerRef.current;
      if (refRelative && !currentRelativeRef) {
         setRelativeRef(refRelative);
      }
   }, [containerRef]);

   // const onDragStart = (e) => {
   //    console.log("drag start");
   //    setDragState({
   //       ...dragState,
   //       diffX: e.screenX - e.currentTarget.getBoundingClientRect().left,
   //       isDragging: true,
   //    });
   // };

   // const onDragEnd = (e) => {
   //    const left = e.screenX - dragState.diffX;
   //    const top = e.screenY - dragState.diffY;
   //    setDragState({
   //       ...dragState,
   //       isDragging: false,
   //       styles: {
   //          left: left,
   //       },
   //    });
   // };


   return (
      <Styled.RangeContainer
         ref={containerRef}
      // styles={
      //    Object.keys(dragState.styles).length !== 0 ? dragState.styles : {}
      // }
      >
         <RangeKnob relativRef={containerRef} knobSide="left" />
         <RangeCenter relativRef={containerRef} />
         <RangeKnob relativRef={containerRef} knobSide="right" />
      </Styled.RangeContainer>
   );
});

//redux connect
const mapStateToProps = (state) => ({
   duration: state.audioConfigs.duration,
});
export default connect(mapStateToProps, null)(RangeDrag);
