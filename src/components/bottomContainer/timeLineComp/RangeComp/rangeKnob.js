import React, { useState, useRef, useLayoutEffect } from "react";
import * as Styled from "../style";
import { useEventListener } from "../../../../common/useEventListener";
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
  const { parentRef, knobSide } = props;
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

  const onResizeMove = (e) => {
    e.stopPropagation();
    const timeLineWidthToRight = parentRef.current.offsetWidth + e.movementX;
    const timeLineWidthToLeft = parentRef.current.offsetWidth - e.movementX;
    const timeLineOffset = parentRef.current.offsetLeft + e.movementX;

    if (resizeState.isResizing) {
      e.stopPropagation();
      if (knobSide === "right") {
        parentRef.current.style.width = timeLineWidthToRight + "px";
      } else if (knobSide === "left") {
        parentRef.current.style.width = timeLineWidthToLeft + "px";
        parentRef.current.style.left = timeLineOffset + "px";
      }
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
  useEventListener("mousemove", onResizeMove);
  useEventListener("mouseup", onResizeEnd);

  return (
    <Styled.ResizeKnobs ref={knobRef}>
      {getCurrentKnob(knobSide).comp}
    </Styled.ResizeKnobs>
  );
});
