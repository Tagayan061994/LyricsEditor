import React from "react";
import * as Styled from "./style";
import { connect } from "react-redux";
import { RangeDrag } from "./RangeComp";
import { getAudioChunks, getAudioDuration } from "../../../redux/selectors";

const TimeLine = React.memo((props) => {
   const { chunkData, fullDuration } = props;

   return (
      <Styled.TimeLineWrapper>
         {chunkData.map((data) => (
            <RangeDrag data={data} key={data.id} fullDuration={fullDuration} />
         ))}
      </Styled.TimeLineWrapper>
   );
});

//redux connect
const mapStateToProps = (state) => ({
   chunkData: getAudioChunks(state),
   fullDuration: getAudioDuration(state)
});
export default connect(mapStateToProps, null)(TimeLine);
