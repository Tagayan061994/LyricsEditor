import React, { useRef, useEffect } from "react";
import * as Styled from "./style";
import { connect } from "react-redux";
import RangeDrag from "./RangeComp";
import { TimeLineWrappContext } from "../../../contextApi/index";
import { getAudioChunks, getAudioDuration } from "../../../redux/selectors";

const TimeLine = React.memo((props) => {
  const { chunkData, fullDuration } = props;
  const refWrapp = useRef(null);

  return (
    <Styled.TimeLineWrapper ref={refWrapp}>
      {/* <TimeLineWrappContext.Provider value={refWrapp}> */}
      {chunkData.map((data) => (
        <RangeDrag
          data={data}
          key={data.id}
          refWrapp={refWrapp}
          fullDuration={fullDuration}
        />
      ))}
      {/* </TimeLineWrappContext.Provider> */}
    </Styled.TimeLineWrapper>
  );
});

//redux connect
const mapStateToProps = (state) => ({
  chunkData: getAudioChunks(state),
  fullDuration: getAudioDuration(state),
});
export default connect(mapStateToProps, null)(TimeLine);
