import React, { useState } from "react";
import * as Styled from "./style";
import { TimeInput } from "./timeInput";
import {
  parseSecondsToHms,
  parseHmsToSeconds,
} from "../../../../common/parseHelpers.js";

export const StartEndInputs = React.memo((props) => {
  const { start, end } = props;

  const [startTimeVal, setStartTimeVal] = useState(
    start ? parseSecondsToHms(start) : "00:00:00"
  );
  const [endTimeVal, setEndTimeVal] = useState(
    end ? parseSecondsToHms(end) : "00:00:00"
  );

  const handleChangeEndInput = (e) => {
    const seconds = parseHmsToSeconds(e.target.value);
    console.log(seconds);
    setEndTimeVal(e.target.value);
  };

  const handleChangeStartInput = (e) => {
    setStartTimeVal(parseSecondsToHms(e.target.value));
  };

  return (
    <Styled.StartEndWrapper>
      <TimeInput
        max={parseSecondsToHms(end)}
        min={parseSecondsToHms(start)}
        label="Start"
        value={startTimeVal}
        onChange={handleChangeStartInput}
      />
      <TimeInput
        max={parseSecondsToHms(end)}
        min={parseSecondsToHms(start)}
        label="End"
        value={endTimeVal}
        onChange={handleChangeEndInput}
      />
    </Styled.StartEndWrapper>
  );
});
