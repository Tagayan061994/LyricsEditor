import React, { useState, useEffect } from "react";
import * as Styled from "./style";
import { useDispatch } from "react-redux";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { deleteAudioChunksItem } from "../../../../redux/actions/audioActions";
import {
  parseSecondsToHms,
  parseHmsToSeconds,
} from "../../../../common/parseHelpers.js";
import StartEndWrapp from "./startEndWrapp";

export const LyricsInputWrapper = React.memo(({ data }) => {
  let {
    id,
    start,
    end,
    textParams: { text },
  } = data;

  const dispatch = useDispatch();
  const [inputVal, setinputVal] = useState(text || "");

  const handleChangeText = (e) => {
    setinputVal(e.target.value);
  };

  const deleteItem = () => {
    console.log(id);
    dispatch(deleteAudioChunksItem(id));
  };

  return (
    <Styled.LyricsInputWrapper>
      <Styled.DeleteIcon size="lg" icon={faTrash} onClick={deleteItem} />
      <Styled.LyricsInput
        value={inputVal}
        onChange={handleChangeText}
      ></Styled.LyricsInput>
      <StartEndWrapp start={start} end={end} id={id} />
    </Styled.LyricsInputWrapper>
  );
});

// //redux connect
// const mapStateToProps = (state) => ({
//   chunksData: getAudioChunks(state),
//   fullDuration: getAudioDuration(state),
// });

// export default connect(mapStateToProps, { addAudioChunksItem })(SubTitleSideBar);
