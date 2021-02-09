import React, { useRef, useEffect, useCallback } from "react";
import * as Styled from "./style";
import { connect } from "react-redux";
import { useFocus } from "../../../../common/useFocus";
import {
   updateChunkItemEnd,
   updateChunkItemStart,
} from "../../../../redux/actions/audioActions";
import { parseHmsToSeconds } from "../../../../common/parseHelpers.js";

const TimeInput = React.memo((props) => {
   const {
      value,
      onChange,
      label,
      max,
      min,
      id,
      updateChunkItemEnd,
      updateChunkItemStart,
   } = props;
   const inputRef = useRef();
   const focused = useFocus(inputRef);

   const updateInputValuInRedux = (inputId, inputValue) => {
      const inputValueInSeconds = parseHmsToSeconds(inputValue);
      if (label === "End") {
         updateChunkItemEnd(inputId, inputValueInSeconds);
      } else if (label === "Start") {
         updateChunkItemStart(inputId, inputValueInSeconds);
      }
   };

   const memoizedUpdate = useCallback(() => {
      updateInputValuInRedux(id, value);
   }, [id, value]);

   useEffect(() => {
      memoizedUpdate();
   }, [focused]);

   return (
      <>
         <Styled.StartEndSpan>{label}</Styled.StartEndSpan>
         <Styled.MinuteInput
            step="2"
            type="time"
            max={max}
            min={min}
            value={value}
            ref={inputRef}
            onChange={onChange}
         />
      </>
   );
});

export default connect(null, { updateChunkItemEnd, updateChunkItemStart })(
   TimeInput
);
