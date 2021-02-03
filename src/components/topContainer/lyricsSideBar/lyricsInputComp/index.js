import React, { useState, useEffect } from "react";
import * as Styled from "./style";
import { useDispatch } from "react-redux";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { parseSecondsToHms, parseHmsToSeconds } from "../../../../common/parseHelpers.js";
import { StartEndInputs } from "./startEndInputs";

export const LyricsInputWrapper = React.memo(({ data, id }) => {
  let {
    start,
    end,
    textParams: { text },
  } = data;

  const dispatch = useDispatch();
  const [inputVal, setinputVal] = useState(text ? text : "");

  const handleChangeText = (e) => {
    setinputVal(e.target.value);
  };

  const deleteItem = () => {
    dispatch({ type: "DELETE_AUDIO_CHUNKS_ITEM", paload: id });
  };

  return (
    <Styled.LyricsInputWrapper>
      <Styled.DeleteIcon size="lg" icon={faTrash} onClick={deleteItem} />
      <Styled.LyricsInput
        value={inputVal}
        onChange={handleChangeText}
      ></Styled.LyricsInput>
      <StartEndInputs start={start} end={end} />
    </Styled.LyricsInputWrapper>
  );
});
