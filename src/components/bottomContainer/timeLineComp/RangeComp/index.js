import React, { useState, useRef, useLayoutEffect, useMemo } from "react";
import * as Styled from "../style";
// import RangeKnob from "./rangeKnob";
import { RangeCenter } from "./rangeCenter";
import { parseSecondToPercent } from "../../../../common/parseHelpers";
import { connect } from "react-redux";
import {
  getAudioDuration,
  getCurrentActiveId,
  makeGetAudioChunkStartById,
  makeGetPrevAudioChunkEndById,
} from "../../../../redux/selectors";
import {
  updateChunkItemEnd,
  updateChunkItemStart,
} from "../../../../redux/actions/audioActions";
import { setCurrentActiveId } from "../../../../redux/actions/currIdAction";
import { LeftKnob } from "./leftKnob/index";
import { RightKnob } from "./rightKnob/index";

const RangeDrag = React.memo((props) => {
  const {
    data,
    // refWrapp,
    activeId,
    prevEnd,
    nextChunkStart,
    fullDuration,
    updateChunkItemEnd,
    updateChunkItemStart,
    setCurrentActiveId,
  } = props;

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
  }, [end, start, fullDuration]);

  const leftInPercentage = useMemo(() => {
    return parseSecondToPercent(fullDuration, start);
  }, [fullDuration, start]);

  return (
    <Styled.RangeContainer
      ref={containerRef}
      withInPercent={withInPercentage}
      leftInPercentage={leftInPercentage}
    >
      <LeftKnob
        id={id}
        prevEnd={prevEnd}
        activeId={activeId}
        parentRef={containerRef}
        fullDuration={fullDuration}
        nextChunkStart={nextChunkStart}
        updateChunkItemEnd={updateChunkItemEnd}
        setCurrentActiveId={setCurrentActiveId}
        updateChunkItemStart={updateChunkItemStart}
      />
      <RangeCenter parentRef={containerRef} />
      <RightKnob
        id={id}
        prevEnd={prevEnd}
        activeId={activeId}
        parentRef={containerRef}
        fullDuration={fullDuration}
        nextChunkStart={nextChunkStart}
        updateChunkItemEnd={updateChunkItemEnd}
        setCurrentActiveId={setCurrentActiveId}
        updateChunkItemStart={updateChunkItemStart}
      />
    </Styled.RangeContainer>
  );
});

//connecting to Redux Store
const makeMapStateToProps = () => {
  const getAudioChunkStartById = makeGetAudioChunkStartById();
  const getAudioChunkEndById = makeGetPrevAudioChunkEndById();
  const mapStateToProps = (state, props) => {
    return {
      fullDuration: getAudioDuration(state),
      prevEnd: getAudioChunkEndById(state),
      nextChunkStart: getAudioChunkStartById(state),
      activeId: getCurrentActiveId(state),
    };
  };
  return mapStateToProps;
};
export default connect(makeMapStateToProps, {
  updateChunkItemEnd,
  updateChunkItemStart,
  setCurrentActiveId,
})(RangeDrag);
