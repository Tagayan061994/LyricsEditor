import React, { useState, useRef, useLayoutEffect, useMemo } from "react";
import * as Styled from "../style";
import { parseSecondToPercent } from "../../../../common/parseHelpers";
import RangeKnob from "./rangeKnob";
import { RangeCenter } from "./rangeCenter";

export const RangeDrag = React.memo(({ data, fullDuration, refWrapp }) => {
  const { start, end, id } = data;
  const containerRef = useRef(null);
  const [currentRelativeRef, setcurrentRelativeRef] = useState(null);

  useLayoutEffect(() => {
    const refRelative = containerRef.current;
    if (refRelative && !currentRelativeRef) {
      setcurrentRelativeRef(refRelative);
    }
  }, [containerRef, currentRelativeRef]);

  const withInPercentage = useMemo(() => {
    const timeLineDuration = end - start;
    return parseSecondToPercent(fullDuration, timeLineDuration);
  }, [end, start, fullDuration])

  const leftInPercentage = useMemo(() => {
    return parseSecondToPercent(fullDuration, start);
  }, [fullDuration, start])

  const showId = () => {
    console.log("current", id)
  }

  return (
    <Styled.RangeContainer
      ref={containerRef}
      withInPercent={withInPercentage}
      leftInPercentage={leftInPercentage}
      onClick={showId}
    >
      <RangeKnob parentRef={containerRef} knobSide="left" id={id} refWrapp={refWrapp} />
      <RangeCenter parentRef={containerRef} />
      <RangeKnob parentRef={containerRef} knobSide="right" id={id} />
    </Styled.RangeContainer>
  );
});
