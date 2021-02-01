import React from "react";
import * as Styled from "./style";
import RangeDrag from "./rangeDrag";

export const TimeLine = React.memo(() => {
  return (
    <Styled.TimeLineWrapper>
      <RangeDrag />
    </Styled.TimeLineWrapper>
  );
});
