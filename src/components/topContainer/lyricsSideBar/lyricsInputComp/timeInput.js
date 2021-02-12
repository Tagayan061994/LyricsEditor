import React, { useRef, useState, useLayoutEffect, useEffect } from "react";
import * as Styled from "./style";
import { connect } from "react-redux";
import {
   updateChunkItemEnd,
   updateChunkItemStart,
} from "../../../../redux/actions/audioActions";
import { parseHmsToSeconds } from "../../../../common/parseHelpers.js";
import { useEventListener } from "../../../../common/useEventListener";

const TimeInput = React.memo((props) => {
   const {
      value,
      label,
      max,
      min,
      id,
      updateChunkItemEnd,
      updateChunkItemStart,
   } = props;
   const inputRef = useRef();
   const [inputValue, setInputValue] = useState(value);
   const [currentInput, setCurrentInput] = useState(null);

   useLayoutEffect(() => {
      const ref = inputRef.current;
      if (ref) {
         setCurrentInput(ref);
      }
   }, [inputRef]);

   const onInputChange = (e) => {
      const value = e.target.value;
      inputRef.current.value = value;
      setInputValue(value);
   };

   const updateInputValuInRedux = () => {
      const inputValueInSeconds = parseHmsToSeconds(inputValue);
      if (label === "End") {
         updateChunkItemEnd(id, inputValueInSeconds);
      } else if (label === "Start") {
         updateChunkItemStart(id, inputValueInSeconds);
      }
   };

   useEffect(() => {
      setInputValue(value);
   }, [value])

   //dipatch action to change time value
   useEventListener("blur", updateInputValuInRedux, currentInput);

   return (
      <>
         <Styled.StartEndSpan>{label}</Styled.StartEndSpan>
         <Styled.MinuteInput
            step="2"
            type="time"
            max={max}
            min={min}
            value={inputValue}
            ref={inputRef}
            onChange={onInputChange}
         />
      </>
   );
});

export default connect(null, { updateChunkItemEnd, updateChunkItemStart })(
   TimeInput
);
