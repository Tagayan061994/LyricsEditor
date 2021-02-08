import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import * as Styled from "../style";
import {
  ParsePxTopercent,
  ParseSecondToPercent,
} from "../../../../common/parseHelpers";
import { RangeKnob } from "./rangeKnob";
import { RangeCenter } from "./rangeCenter";

export const RangeDrag = React.memo(({ data, fullDuration }) => {
  const { start, end } = data;
  const containerRef = useRef(null);
  const [currentRelativeRef, setcurrentRelativeRef] = useState(null);

  useLayoutEffect(() => {
    const refRelative = containerRef.current;
    if (refRelative && !currentRelativeRef) {
      setcurrentRelativeRef(refRelative);
    }
  }, [containerRef]);

  const calcWidthInPercentage = () => {
    const timeLineDuration = end - start;
    return ParseSecondToPercent(fullDuration, timeLineDuration);
  };

  const calcLeftInPercentage = () => {
    return ParseSecondToPercent(fullDuration, start);
  };

  return (
    <Styled.RangeContainer
      ref={containerRef}
      withInPercent={calcWidthInPercentage()}
      leftInPercentage={calcLeftInPercentage()}
    >
      <RangeKnob parentRef={containerRef} knobSide="left" />
      <RangeCenter parentRef={containerRef} />
      <RangeKnob parentRef={containerRef} knobSide="right" />
    </Styled.RangeContainer>
  );
});
