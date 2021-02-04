import React, { useState, useRef, useEffect } from "react";
import * as Styled from "./style";
import { connect } from "react-redux";
import { TimeInput } from "./timeInput";
import { useFocus } from "../../../../common/useFocus";
import { updateChunkItemEnd } from "../../../../redux/actions/audioActions";
import {
  parseSecondsToHms,
  parseHmsToSeconds,
} from "../../../../common/parseHelpers.js";


const StartEndWrapp = React.memo((props) => {
  const { start, end, id, updateChunkItemEnd } = props;
  const inputRef = useRef();
  const focused = useFocus(inputRef, true);

  const [startTimeVal, setStartTimeVal] = useState(
    start ? parseSecondsToHms(start) : "00:00:00"
  );
  const [endTimeVal, setEndTimeVal] = useState(
    end ? parseSecondsToHms(end) : "00:00:00"
  );

  const handleChangeEndInput = (e) => {
    setEndTimeVal(e.target.value);
  };

  useEffect(() => {
    updateChunkItemEnd(id, parseHmsToSeconds(endTimeVal));
  }, [endTimeVal])

  const handleChangeStartInput = (e) => {
    setStartTimeVal(parseSecondsToHms(e.target.value));
  };



  return (
    <Styled.StartEndWrapper>
      <TimeInput
        label="Start"
        value={startTimeVal}
        max={parseSecondsToHms(end)}
        min={parseSecondsToHms(start)}
        onChange={handleChangeStartInput}
      />
      <TimeInput
        inputRef={inputRef}
        label="End"
        value={endTimeVal}
        max={parseSecondsToHms(end)}
        min={parseSecondsToHms(start)}
        onChange={handleChangeEndInput}
      />
    </Styled.StartEndWrapper>
  );
});

const mapStateToProps = (state) => ({
  // chunksData: getAudioChunks(state),
  // fullDuration: getAudioDuration(state),
});

export default connect(null, { updateChunkItemEnd })(StartEndWrapp);
