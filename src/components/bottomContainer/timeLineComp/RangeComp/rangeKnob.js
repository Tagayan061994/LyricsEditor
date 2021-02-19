import React, { useState, useRef, useLayoutEffect, useContext, useEffect } from "react";
import * as Styled from "../style";
// import { connect } from "react-redux";
// import { TimeLineWrappContext } from "../../../../contextApi/index.js";
import { useEventListener } from "../../../../common/useEventListener";
import {
  parseSecondToPercent,
  parsePercentToSecond,
  parsePxTopercent,
} from "../../../../common/parseHelpers";
// import {
//   getAudioDuration,
//   makeGetAudioChunkStartById,
//   makeGetPrevAudioChunkEndById,
// } from "../../../../redux/selectors";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
// import {
//   updateChunkItemEnd,
//   updateChunkItemStart,
// } from "../../../../redux/actions/audioActions";
const FULL_PERCENT = 100;

const iconData = [
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
  return iconData.find((elem) => elem.side === side);
};

export const RangeKnob = React.memo((props) => {
  const {
    id,
    prevEnd,
    refWrapp,
    knobSide,
    parentRef,
    fullDuration,
    nextChunkStart,
    updateChunkItemEnd,
    updateChunkItemStart,
  } = props;



  const knobRef = useRef(null);
  const [isResize, setIsResize] = useState(false);
  const [currentKnob, setCurrentKnob] = useState(null);
  const refParentWrapper = refWrapp

  console.log("id", id);
  console.log("previuos end", prevEnd);
  console.log("next chunk start", nextChunkStart);

  //refs to parent element as parentWrapper
  //refs to current timline chunk as timeLineChunk
  const parentWrapper = refParentWrapper.current;
  const timeLineChunk = parentRef.current;

  // set ref to current Knob after rendering component
  useLayoutEffect(() => {
    const ref = knobRef.current;
    if (ref) {
      setCurrentKnob(ref);
    }
  }, [knobRef]);

  useEffect(() => {
    console.log(nextChunkStart)
  }, [nextChunkStart])

  const calcToRightInPercent = (e, currWidth, parentWidth) => {
    const moveRight = currWidth + e.movementX;
    return parsePxTopercent(parentWidth, moveRight);
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

  const isValidResizeToRight = (elem) => {
    if (prevEnd) {
      const prevElLeft = parseSecondToPercent(fullDuration, prevEnd);
      if (elem < FULL_PERCENT - prevElLeft) return true;
      else return false;
    } else if (!prevEnd) {
      if (elem <= FULL_PERCENT) return true;
      else return false;
    }
  };

  const isValidResizeToLeft = (elem) => {
    if (nextChunkStart) {
      const nextChunkInPerc = parseSecondToPercent(
        fullDuration,
        nextChunkStart
      );
      if (elem < nextChunkInPerc) return true;
      else return false;
    } else if (!nextChunkStart && prevEnd) {
      //check previsous element width + currWidth ,
      // not to be greater then all parent width
      const prevElLeft = parseSecondToPercent(fullDuration, prevEnd);
      if (prevElLeft + elem < FULL_PERCENT) return true;
      else return false;
    } else if (!nextChunkStart && !prevEnd) {
      if (elem < FULL_PERCENT) return true;
      else return false;
    }
  };

  const resizeDrawToRight = (e, currWidth, parentWidth) => {
    const chunkWidth = calcToRightInPercent(e, currWidth, parentWidth);
    const validResize = isValidResizeToLeft(chunkWidth);
    if (validResize) {
      timeLineChunk.style.width = chunkWidth + "%";
    }
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

  const onResizeMove = (e) => {
    if (isResize) {
      e.stopPropagation();
      const timeLineWidth = timeLineChunk.offsetWidth;
      const parentWrappWidth = parentWrapper.offsetWidth;

      if (knobSide === "right") {
        resizeDrawToRight(e, timeLineWidth, parentWrappWidth);
      } else if (knobSide === "left") {
        resizeDrawToLeft(e, timeLineWidth, parentWrappWidth);
      }
    }
  };

  const onResizeStart = () => {
    setIsResize(true);
  };

  const updateChunkEndInRedux = () => {
    const timeLineWidth = parseInt(timeLineChunk.style.width);
    const widthInSeconds = Math.round(
      parsePercentToSecond(fullDuration, timeLineWidth)
    );
    updateChunkItemEnd(id, widthInSeconds);
  };

  ///just to check,its not finished version
  const updateChunkStartInRedux = () => {
    const emptyTimeLineWidth = parseFloat(timeLineChunk.style.left);
    const updateStartTime = (emptyTimeLineWidth * fullDuration) / FULL_PERCENT;
    updateChunkItemStart(id, updateStartTime);
  };

  const onResizeEnd = () => {
    if (knobSide === "right") {
      updateChunkEndInRedux()
    } else if (knobSide === "left") {
      updateChunkStartInRedux();
    }
    setIsResize(false);
  };

  //Knob eventListeners
  useEventListener("mousedown", onResizeStart, currentKnob);
  useEventListener("mousemove", onResizeMove);
  useEventListener("mouseup", () => {
    if (isResize) onResizeEnd();
  });

  return (
    <Styled.ResizeKnobs ref={knobRef}>
      {getCurrentKnob(knobSide).comp}
    </Styled.ResizeKnobs>
  );
});


