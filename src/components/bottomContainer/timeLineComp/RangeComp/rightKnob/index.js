import React, { useRef, useLayoutEffect, useState, useContext } from "react";
import * as Styled from "./style";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useEventListener } from "../../../../../common/useEventListener";
import {
  parseSecondToPercent,
  parsePercentToSecond,
  parsePxTopercent,
} from "../../../../../common/parseHelpers";
import { TimeLineWrappContext } from "../../../../../contextApi/index.js";
const FULL_PERCENT = 100;

export const RightKnob = React.memo((props) => {
  const {
    id,
    prevEnd,
    activeId,
    parentRef,
    fullDuration,
    nextChunkStart,
    updateChunkItemEnd,
    setCurrentActiveId,
  } = props;

  const knobRef = useRef(null);
  const [isResize, setIsResize] = useState(false);
  const [currentKnob, setCurrentKnob] = useState(null);
  const parentWrappContext = useContext(TimeLineWrappContext);
  // const refParentWrapper = parentWrappContext.current;

  //refs to parent element as parentWrapper
  //refs to current timline chunk as timeLineChunk
  const parentWrapper = parentWrappContext.current;
  const timeLineChunk = parentRef.current;
  // set ref to current Knob after rendering component
  useLayoutEffect(() => {
    const ref = knobRef.current;
    if (ref) {
      setCurrentKnob(ref);
    }
  }, [knobRef]);

  const isValidResizeToLeft = (elem) => {
    if (nextChunkStart) {
      const nextChunkInPerc = parseSecondToPercent(
        fullDuration,
        nextChunkStart
      );
      if (elem < nextChunkInPerc) {
        return true;
      }
    } else if (!nextChunkStart && prevEnd) {
      const prevElLeft = parseSecondToPercent(fullDuration, prevEnd);
      if (prevElLeft + elem < FULL_PERCENT) {
        return true;
      }
    } else if (!nextChunkStart && !prevEnd) {
      if (elem < FULL_PERCENT) {
        return true;
      }
    }
  };

  const calcToRightInPercent = (e, currWidth, parentWidth) => {
    const moveRight = currWidth + e.movementX;
    return parsePxTopercent(parentWidth, moveRight);
  };

  const resizeDrawToRight = (e, currWidth, parentWidth) => {
    const chunkWidth = calcToRightInPercent(e, currWidth, parentWidth);
    const validResize = isValidResizeToLeft(chunkWidth);
    if (validResize) {
      timeLineChunk.style.width = chunkWidth + "%";
    }
  };

  //reusable function code duplicate
  const onResizeMove = (e) => {
    if (isResize) {
      e.stopPropagation();
      const timeLineWidth = timeLineChunk.offsetWidth;
      const parentWrappWidth = parentWrapper.offsetWidth;
      resizeDrawToRight(e, timeLineWidth, parentWrappWidth);
    }
  };
  //reusable function code duplicate
  const onResizeStart = () => {
    setIsResize(true);
    setCurrentActiveId(id);
  };
  //reusable function code duplicate
  const onResizeEnd = () => {
    updateChunkEndInRedux();
    setIsResize(false);
  };

  const updateChunkEndInRedux = () => {
    const timeLineWidth = parseInt(timeLineChunk.style.width);
    const widthInSeconds = Math.round(
      parsePercentToSecond(fullDuration, timeLineWidth)
    );
    updateChunkItemEnd(activeId, widthInSeconds);
  };

  //Knob eventListeners
  useEventListener("mousedown", onResizeStart, currentKnob);
  useEventListener("mousemove", onResizeMove);
  useEventListener("mouseup", () => {
    if (isResize) onResizeEnd();
  });

  return (
    <Styled.ResizeKnobs ref={knobRef}>
      <Styled.Icon icon={faChevronRight} size="lg" />
    </Styled.ResizeKnobs>
  );
});
