import React, { useEffect, useRef } from "react";
import moment from "moment";
import * as Styled from "./audioStyle";
import momentDurationFormatSetup from "moment-duration-format";

export const Bar = React.memo((props) => {
  const barRef = useRef();
  const { duration, curTime, onTimeUpdate, setCurrentDuration } = props;
  const curPercentage = (curTime / duration) * 100;

  const formatDuration = (duration) => {
    return moment
      .duration(duration, "seconds")
      .format("hh:mm:ss", { trim: false });
  };

  const calcClickedTime = (e) => {
    const clickPositionInPage = e.pageX;
    const bar = barRef.current;
    const barStart = bar.getBoundingClientRect().left + window.scrollX;
    const barWidth = bar.offsetWidth;
    const clickPositionInBar = clickPositionInPage - barStart;
    const timePerPixel = duration / barWidth;
    return timePerPixel * clickPositionInBar;
  };

  useEffect(() => {
    setCurrentDuration(formatDuration(curTime));
  }, [curTime, setCurrentDuration]);

  function handleTimeDrag(e) {
    onTimeUpdate(calcClickedTime(e));

    const updateTimeOnMove = (eMove) => {
      onTimeUpdate(calcClickedTime(eMove));
    };

    document.addEventListener("mousemove", updateTimeOnMove);

    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", updateTimeOnMove);
    });
  }

  return (
    <Styled.BarContainer>
      <Styled.BarProgress
        ref={barRef}
        onMouseDown={handleTimeDrag}
        curPercentage={curPercentage}
      >
        <Styled.BarProgressKnob curPercentage={curPercentage} />
      </Styled.BarProgress>
    </Styled.BarContainer>
  );
});
