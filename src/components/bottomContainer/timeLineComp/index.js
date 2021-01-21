import React from "react";
import * as Styled from "./timeStyle";
import { RangeDrag } from "./rangeDrag";

export const TimeLine = React.memo(() => {
   return (
      <Styled.TimeLineWrapper>
         <RangeDrag />
      </Styled.TimeLineWrapper>
   );
});
