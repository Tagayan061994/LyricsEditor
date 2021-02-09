import React, { useState } from "react";
import * as Styled from "./style";
import TimeInput from "./timeInput";
import { parseSecondsToHms } from "../../../../common/parseHelpers.js";

export const StartEndWrapp = React.memo((props) => {
  const { start, end, id } = props;
  const maxValEnd = parseSecondsToHms(end);
  const minValEnd = parseSecondsToHms(start);
  const maxValStart = parseSecondsToHms(end);
  const minValStart = parseSecondsToHms(start);

  const [endTimeVal, setEndTimeVal] = useState(end ? maxValEnd : "00:00:00");
  const [startTimeVal, setStartTimeVal] = useState(
    start ? minValStart : "00:00:00"
  );

  const handleChangeEndInput = (e) => {
    setEndTimeVal(e.target.value);
  };

  const handleChangeStartInput = (e) => {
    setStartTimeVal(e.target.value);
  };

  return (
    <Styled.StartEndWrapper>
      <TimeInput
        label="Start"
        id={id}
        value={startTimeVal}
        max={maxValStart}
        min={minValStart}
        onChange={handleChangeStartInput}
      />
      <TimeInput
        label="End"
        id={id}
        value={endTimeVal}
        max={maxValEnd}
        min={minValEnd}
        onChange={handleChangeEndInput}
      />
    </Styled.StartEndWrapper>
  );
});
