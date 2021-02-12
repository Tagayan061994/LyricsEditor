import React, { useState } from "react";
import * as Styled from "./style";
import { connect } from "react-redux";
import { StartEndWrapp } from "./startEndWrapp";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { deleteAudioChunksItem } from "../../../../redux/actions/audioActions";

const LyricsInputWrapper = React.memo(({ data, deleteAudioChunksItem }) => {
  const {
    id,
    start,
    end,
    textParams: { text },
  } = data;
  const [inputVal, setinputVal] = useState(text || "");

  const handleChangeText = (e) => {
    setinputVal(e.target.value);
  };

  const deleteItem = () => {
    deleteAudioChunksItem(id);
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

//redux connect
const mapStateToProps = (state) => ({
  // chunksData: getAudioChunks(state),
  // fullDuration: getAudioDuration(state),
});

export default connect(mapStateToProps, { deleteAudioChunksItem })(
  LyricsInputWrapper
);
