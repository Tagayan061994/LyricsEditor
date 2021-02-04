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
  const [currentRelativeRef, setRelativeRef] = useState(null);

  console.log("End", end);

  useLayoutEffect(() => {
    const refRelative = containerRef.current;
    if (refRelative && !currentRelativeRef) {
      setRelativeRef(refRelative);
    }
  }, [containerRef]);

  const calcWidthInPercentage = () => {
    const timeLineDuration = end - start;
    return ParseSecondToPercent(fullDuration, timeLineDuration);
  };

  return (
    <Styled.RangeContainer
      ref={containerRef}
      withInPercent={calcWidthInPercentage()}
    >
      <RangeKnob parentRef={containerRef} knobSide="left" />
      <RangeCenter parentRef={containerRef} />
      <RangeKnob parentRef={containerRef} knobSide="right" />
    </Styled.RangeContainer>
  );
});
