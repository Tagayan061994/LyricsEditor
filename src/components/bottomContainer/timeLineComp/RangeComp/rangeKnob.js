import React, { useState, useRef, useLayoutEffect, useContext } from "react";
import * as Styled from "../style";
import { connect } from "react-redux";
import { getAudioDuration } from "../../../../redux/selectors";
import { TimeLineWrappContext } from "../../../../contextApi/index.js";
import { parsePercentToSecond } from "../../../../common/parseHelpers";
import { useEventListener } from "../../../../common/useEventListener";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import {
  updateChunkItemEnd,
  updateChunkItemStart,
} from "../../../../redux/actions/audioActions";

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

const RangeKnob = React.memo((props) => {
  const {
    parentRef,
    knobSide,
    fullDuration,
    id,
    updateChunkItemEnd,
    updateChunkItemStart,
  } = props;
  const [currentKnob, setCurrentKnob] = useState(null);
  const [resizeState, setResizeState] = useState({
    isResizing: false,
  });
  const knobRef = useRef(null);
  const refTimeLineWrapp = useContext(TimeLineWrappContext);
  const TimeLineChunk = parentRef.current;

  useLayoutEffect(() => {
    const ref = knobRef.current;
    if (ref) {
      setCurrentKnob(ref);
    }
  }, [knobRef]);

  const onResizeMove = (e) => {
    if (resizeState.isResizing) {
      e.stopPropagation();
      const parentClientWidth = TimeLineChunk.offsetParent.clientWidth;
      const timeLineOffsetWidth = TimeLineChunk.offsetWidth;
      const timeLineWidthToRight = timeLineOffsetWidth + e.movementX;
      const timeLineWidthToLeft = timeLineOffsetWidth - e.movementX;
      const timeLineOffset = TimeLineChunk.offsetLeft + e.movementX;

      if (knobSide === "right" && timeLineWidthToRight < parentClientWidth) {
        TimeLineChunk.style.width = timeLineWidthToRight + "px";
      } else if (knobSide === "left" && timeLineOffset >= 0) {
        TimeLineChunk.style.width = timeLineWidthToLeft + "px";
        TimeLineChunk.style.left = timeLineOffset + "px";
      }
    }
  };

  const onResizeStart = () => {
    setResizeState({
      isResizing: true,
    });
  };

  const updateChunkEndInRedux = () => {
    const timeLineWrappWidth = refTimeLineWrapp.current.offsetWidth;
    const timeLineWidthToLeft = parseInt(TimeLineChunk.style.width);
    const ratioOfWidth = (timeLineWidthToLeft / timeLineWrappWidth) * 100;
    const ratioOfWidtInSeconds = Math.round(
      parsePercentToSecond(fullDuration, ratioOfWidth)
    );
    updateChunkItemEnd(id, ratioOfWidtInSeconds);
  };

  ///just to check,its not finished version
  const updateChunkStartInRedux = () => {
    const emptyChunkWidth = TimeLineChunk.offsetLeft;
    const timeLineWrappWidth = refTimeLineWrapp.current.offsetWidth;
    const updateChunkStartTime =
      (emptyChunkWidth * fullDuration) / timeLineWrappWidth;
    const updateChunkStartTimeInPerc = parsePercentToSecond(
      fullDuration,
      updateChunkStartTime
    );
    updateChunkItemStart(id, updateChunkStartTimeInPerc);
  };

  const onResizeEnd = () => {
    if (knobSide === "right") {
      updateChunkEndInRedux();
    } else if (knobSide === "left") {
      updateChunkStartInRedux();
    }
    setResizeState({
      isResizing: false,
    });
  };

  //Knob eventListeners
  useEventListener("mousedown", onResizeStart, currentKnob);
  useEventListener("mousemove", onResizeMove);
  useEventListener("mouseup", () => {
    if (resizeState.isResizing) {
      onResizeEnd();
    }
  });

  return (
    <Styled.ResizeKnobs ref={knobRef}>
      {getCurrentKnob(knobSide).comp}
    </Styled.ResizeKnobs>
  );
});

//redux connect
const mapStateToProps = (state) => ({
  fullDuration: getAudioDuration(state),
});
export default connect(mapStateToProps, {
  updateChunkItemEnd,
  updateChunkItemStart,
})(RangeKnob);

const arr = [2, 5, 8, 7];

const deleteElemntFromMatrix = (arr, index) =>
  index !== undefined ? arr.splice(index, 1) : arr;

const findMax = (maxValue, arr) => {
  let maxIndex = -1;
  for (let i = 0; i < arr.length; i++) {
    if ((maxIndex === -1 || arr[i] > arr[maxIndex]) && arr[i] < maxValue) {
      maxIndex = i;
    }
  }
  return maxIndex;
};

const hourIndex1 = findMax(3, arr);
const hour1 = arr[hourIndex1];
deleteElemntFromMatrix(arr, hourIndex1);

const hourIndex2 = findMax(5, arr);
const hour2 = arr[hourIndex2] || 0;
deleteElemntFromMatrix(arr, findMax(5, arr));

const minIndex1 = findMax(7, arr);
const min1 = arr[minIndex1] || 0;
deleteElemntFromMatrix(arr, minIndex1);

const minIndex2 = findMax(10, arr);
const min2 = arr[minIndex2] || 0;

console.log(`${hour1}${hour2}:${min1}${min2}`);
console.log(arr);
