import React, { useState, useRef, useLayoutEffect, useContext } from "react";
import * as Styled from "../style";
import { connect } from "react-redux";
import { TimeLineWrappContext } from "../../../../contextApi/index.js";
import { useEventListener } from "../../../../common/useEventListener";
import {
  parsePercentToSecond,
  parsePxTopercent,
} from "../../../../common/parseHelpers";
import {
  getAudioDuration,
  makeGetAudioChunkEndById,
  makeGetPrevAudioChunkStartById,
} from "../../../../redux/selectors";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import {
  updateChunkItemEnd,
  updateChunkItemStart,
} from "../../../../redux/actions/audioActions";

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

const RangeKnob = React.memo((props) => {
  const {
    id,
    parentRef,
    knobSide,
    prevStart,
    fullDuration,
    nextChunkEnd,
    updateChunkItemEnd,
    updateChunkItemStart,
  } = props;

  console.log("prevStart", prevStart, nextChunkEnd)

  const [currentKnob, setCurrentKnob] = useState(null);
  const [isResize, setIsResize] = useState(false);

  const knobRef = useRef(null);
  const refparentWrapper = useContext(TimeLineWrappContext);
  const parentWrapper = refparentWrapper.current;
  const timeLineChunk = parentRef.current;

  useLayoutEffect(() => {
    const ref = knobRef.current;
    if (ref) {
      setCurrentKnob(ref);
    }
  }, [knobRef]);

  const calcToRightInPercent = (e, currWidth, parentWidth) => {
    const moveRight = currWidth + e.movementX;
    return parsePxTopercent(parentWidth, moveRight);
  };

  const calcToLeftInPercent = (e, currWidth, parentWidth) => {
    const moveLeft = currWidth - e.movementX;
    return parsePxTopercent(parentWidth, moveLeft);
  };

  const calcTimeLineLeft = (e) => {
    const timeLineClientWidth = timeLineChunk.offsetParent.clientWidth;
    const timeLineOffset = timeLineChunk.offsetLeft + e.movementX;
    return parsePxTopercent(timeLineClientWidth, timeLineOffset);
  };

  const reiseDrawToRight = (e, currWidth, parentWidth) => {
    const chunkWidth = calcToRightInPercent(e, currWidth, parentWidth);
    timeLineChunk.style.width = chunkWidth + "%";
  };

  const resizeDrawToLeft = (e, currWidth, parentWidth) => {
    const leftInPercent = calcTimeLineLeft(e);
    const chunkWidt = calcToLeftInPercent(e, currWidth, parentWidth);

    timeLineChunk.style.width = chunkWidt + "%";
    timeLineChunk.style.left = leftInPercent + "%";
  };

  const onResizeMove = (e) => {
    if (isResize) {
      e.stopPropagation();
      const timeLineWidth = timeLineChunk.offsetWidth;
      const parentWrappWidth = parentWrapper.offsetWidth;

      if (knobSide === "right") {
        reiseDrawToRight(e, timeLineWidth, parentWrappWidth);
      } else if (knobSide === "left") {
        resizeDrawToLeft(e, timeLineWidth, parentWrappWidth);
      }
    }
  };

  const onResizeStart = () => {
    setIsResize(true);
  };

  const updateChunkEndInRedux = () => {
    const timeLineWidthToLeft = parseInt(timeLineChunk.style.width);
    const currentWidthInPercent = parsePxTopercent(
      parentWrapper.offsetWidth,
      timeLineWidthToLeft
    );
    const ratioOfWidtInSeconds = Math.round(
      parsePercentToSecond(fullDuration, currentWidthInPercent)
    );
    updateChunkItemEnd(id, ratioOfWidtInSeconds);
  };

  ///just to check,its not finished version
  const updateChunkStartInRedux = () => {
    const emptyTimeLineWidth = timeLineChunk.offsetLeft;
    const parentWidth = parentWrapper.offsetWidth;
    const updateStartTime = (emptyTimeLineWidth * fullDuration) / parentWidth;
    const chunkStart = parsePercentToSecond(fullDuration, updateStartTime);
    updateChunkItemStart(id, chunkStart);
  };

  const onResizeEnd = () => {
    if (knobSide === "right") updateChunkEndInRedux();
    else if (knobSide === "left") updateChunkStartInRedux();
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

//connecting to Redux Store
const makeMapStateToProps = () => {
  const getAudioChunkEndById = makeGetAudioChunkEndById();
  const getAudioChunkStartById = makeGetPrevAudioChunkStartById();

  const mapStateToProps = (state, props) => {
    return {
      fullDuration: getAudioDuration(state),
      prevStart: getAudioChunkStartById(state, props),
      nextChunkEnd: getAudioChunkEndById(state, props),
    };
  };
  return mapStateToProps;
};

export default connect(makeMapStateToProps, {
  updateChunkItemEnd,
  updateChunkItemStart,
})(RangeKnob);
