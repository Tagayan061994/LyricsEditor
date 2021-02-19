import React, { useState, useRef, useLayoutEffect, useMemo } from "react";
import * as Styled from "../style";
import { RangeKnob } from "./rangeKnob";
import { RangeCenter } from "./rangeCenter";
import { parseSecondToPercent } from "../../../../common/parseHelpers";
import { connect } from "react-redux";
import { TimeLineWrappContext } from "../../../../contextApi/index.js";
import {
  getAudioDuration,
  makeGetAudioChunkStartById,
  makeGetPrevAudioChunkEndById,
} from "../../../../redux/selectors";
import {
  updateChunkItemEnd,
  updateChunkItemStart,
} from "../../../../redux/actions/audioActions";

const RangeDrag = React.memo((props) => {
  const {
    data,
    refWrapp,
    prevEnd,
    nextStart,
    fullDuration,
    updateChunkItemEnd,
    updateChunkItemStart
  } = props;
  const { start, end, id } = data;
  const containerRef = useRef(null);
  const [currentRelativeRef, setcurrentRelativeRef] = useState(null);

  // console.log(id)

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
      <RangeKnob
        knobSide="left"
        id={id}
        refWrapp={refWrapp}
        prevEnd={prevEnd}
        nextStart={nextStart}
        parentRef={containerRef}
        fullDuration={fullDuration}
        updateChunkItemEnd={updateChunkItemEnd}
        updateChunkItemStart={updateChunkItemStart}
      />
      <RangeCenter parentRef={containerRef} />
      <RangeKnob
        knobSide="right"
        id={id}
        refWrapp={refWrapp}
        prevEnd={prevEnd}
        nextStart={nextStart}
        parentRef={containerRef}
        fullDuration={fullDuration}
        updateChunkItemEnd={updateChunkItemEnd}
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
      prevEnd: getAudioChunkEndById(state, props.data.id),
      nextChunkStart: getAudioChunkStartById(state, props.data.id),
    };
  };
  return mapStateToProps;
};
export default connect(makeMapStateToProps, {
  updateChunkItemEnd,
  updateChunkItemStart,
})(RangeDrag);