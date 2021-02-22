import React, { useRef, useLayoutEffect, useState, useContext } from "react";
import * as Styled from "./style";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useEventListener } from "../../../../../common/useEventListener";
import {
  parseSecondToPercent,
  parsePxTopercent,
} from "../../../../../common/parseHelpers";
import { TimeLineWrappContext } from "../../../../../contextApi/index.js";
const FULL_PERCENT = 100;

export const LeftKnob = React.memo((props) => {
  const {
    id,
    prevEnd,
    activeId,
    parentRef,
    fullDuration,
    nextChunkStart,
    updateChunkItemStart,
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

  const isValidResizeToRight = (elem) => {
    if (prevEnd && nextChunkStart) {
      const nextElPerc = parseSecondToPercent(fullDuration, nextChunkStart);
      if (elem < FULL_PERCENT - nextElPerc) {
        return true;
      }
    } else if (prevEnd && !nextChunkStart || prevEnd) {
      const prevElPerc = parseSecondToPercent(fullDuration, prevEnd);
      if (elem < FULL_PERCENT - prevElPerc) {
        return true;
      }
    } else if (!prevEnd && nextChunkStart) {
      const nxtChnkStrt = Math.ceil(
        parseSecondToPercent(fullDuration, nextChunkStart)
      );
      const nextChunkInPerc = FULL_PERCENT - nxtChnkStrt;
      if (elem + nextChunkInPerc <= FULL_PERCENT) {
        return true;
      }
    } else if (!prevEnd) {
      if (elem <= FULL_PERCENT) {
        return true;
      }
    }
  };

  const calcToLeftInPercent = (e, currWidth, parentWidth) => {
    const moveLeft = currWidth - e.movementX;
    return parsePxTopercent(parentWidth, moveLeft);
  };

  const calcTimeLineLeft = (e) => {
    const parentWrpClientWidth = parentWrapper.clientWidth;
    const timeLineOffset = timeLineChunk.offsetLeft + e.movementX;
    return parsePxTopercent(parentWrpClientWidth, timeLineOffset);
  };

  const resizeDrawToLeft = (e, currWidth, parentWidth) => {
    const leftInPercent = calcTimeLineLeft(e);
    const chunkWidth = calcToLeftInPercent(e, currWidth, parentWidth);
    const validResize = isValidResizeToRight(chunkWidth);
    if (validResize) {
      timeLineChunk.style.width = chunkWidth + "%";
      timeLineChunk.style.left = leftInPercent + "%";
    }
  };

  //reusable function code duplicate
  const onResizeMove = (e) => {
    if (isResize) {
      e.stopPropagation();
      const timeLineWidth = timeLineChunk.offsetWidth;
      const parentWrappWidth = parentWrapper.offsetWidth;
      resizeDrawToLeft(e, timeLineWidth, parentWrappWidth);
    }
  };

  //reusable function code duplicate
  const onResizeStart = () => {
    setIsResize(true);
    setCurrentActiveId(id);
  };
  //reusable function code duplicate
  const onResizeEnd = () => {
    updateChunkStartInRedux();
    setIsResize(false);
  };

  const updateChunkStartInRedux = () => {
    const emptyTimeLineWidth = parseFloat(timeLineChunk.style.left);
    const updateStartTime = (emptyTimeLineWidth * fullDuration) / FULL_PERCENT;
    updateChunkItemStart(activeId, updateStartTime);
  };

  //Knob eventListeners
  useEventListener("mousedown", onResizeStart, currentKnob);
  useEventListener("mousemove", onResizeMove);
  useEventListener("mouseup", () => {
    if (isResize) onResizeEnd();
  });

  return (
    <Styled.ResizeKnobs ref={knobRef}>
      <Styled.Icon icon={faChevronLeft} size="lg" />
    </Styled.ResizeKnobs>
  );
});
