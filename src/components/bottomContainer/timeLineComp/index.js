import React from "react";
import * as Styled from "./timeStyle";
import { RangeDrag } from "./rangeDrag";
import { Draggable } from "./drag";

export const TimeLine = React.memo(() => {
   return (
      <Styled.TimeLineWrapper>
         <RangeDrag />
      </Styled.TimeLineWrapper>
   );
});
