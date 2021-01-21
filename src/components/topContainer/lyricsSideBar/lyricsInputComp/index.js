import React, { useState, useEffect } from "react";
import * as Styled from "./style";
import { useDispatch } from "react-redux";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { parseSecondsToHms } from "../../../../common/parseSecondsToHms";

export const LuricsInputWrapper = React.memo(({ data, id }) => {
  let {
    start,
    end,
    textParams: { text },
  } = data;
  const dispatch = useDispatch();
  const [itemData, setItemData] = useState({});
  const [inputVal, setinputVal] = useState(text ? text : "");
  const [startTimeVal, setStartTimeVal] = useState(
    start ? parseSecondsToHms(start) : "00:00:00"
  );
  const [endTimeVal, setEndTimeVal] = useState(
    end ? parseSecondsToHms(end) : "00:00:00"
  );

  const handleChangeText = (e) => {
    setinputVal(e.target.value);
  };

  const handleChangeTime = (e, inputName) => {
    if (inputName === "start") {
      setStartTimeVal(parseSecondsToHms(e.target.value));
    } else if (inputName === "end") {
      setEndTimeVal(parseSecondsToHms(e.target.value));
    }
  };

  const deleteItem = () => {
    dispatch({ type: "DELETE_AUDIO_CHUNKS_ITEM", paload: id });
  };

  useEffect(() => {
    setItemData({
      inputVal,
      startTimeVal,
      endTimeVal,
    });
  }, [inputVal, startTimeVal, endTimeVal]);

  return (
    <Styled.LyricsInputWrapper>
      <Styled.DeleteIcon size="lg" icon={faTrash} onClick={deleteItem} />
      <Styled.LyricsInput
        value={inputVal}
        onChange={(e) => handleChangeText(e)}
      ></Styled.LyricsInput>
      <Styled.StartEndWrapper>
        <Styled.StartEndSpan>Start</Styled.StartEndSpan>
        <Styled.MinuteInput
          type="time"
          step="2"
          value={startTimeVal}
          onChange={(e) => handleChangeTime(e, "start")}
        />
        <Styled.Line />
        <Styled.StartEndSpan>End</Styled.StartEndSpan>
        <Styled.MinuteInput
          type="time"
          step="2"
          value={endTimeVal}
          onChange={(e) => handleChangeTime(e, "end")}
        />
      </Styled.StartEndWrapper>
    </Styled.LyricsInputWrapper>
  );
});
