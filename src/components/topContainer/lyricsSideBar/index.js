import React, { useState, useRef } from "react";
import * as Styled from "./style";
import { connect } from "react-redux";
import { LyricsInputWrapper } from "./lyricsInputComp/index.js";
import { addAudioChunksItem } from "../../../redux/actions/audioActions";
import { getAudioChunks, getAudioDuration } from "../../../redux/selectors";
import { useOutsideClickHandler } from "../../../common/useOutSideClickHandler";

const SubTitleSideBar = React.memo((props) => {
  const modalRef = useRef(null);
  const [isModalOpen, setisModalOpen] = useState(false);
  useOutsideClickHandler(modalRef, () => setisModalOpen(false));

  const { chunksData, fullDuration, addAudioChunksItem } = props;
  const lastChunkEndTime = chunksData[chunksData.length - 1].end;

  return (
    <Styled.LyricsSideBarWrapper>
      {chunksData.map((data) => (
        <LyricsInputWrapper key={data.id} data={data} />
      ))}
      <Styled.AddButton
        onClick={addAudioChunksItem}
        disabled={lastChunkEndTime === fullDuration}
      >
        + add sub
      </Styled.AddButton>
      <button onClick={() => setisModalOpen(!isModalOpen)}>open modal</button>
      {isModalOpen && (
        <Styled.ModalWrapper ref={modalRef}>Modal</Styled.ModalWrapper>
      )}
    </Styled.LyricsSideBarWrapper>
  );
});

//redux connect
const mapStateToProps = (state) => ({
  chunksData: getAudioChunks(state),
  fullDuration: getAudioDuration(state),
});

export default connect(mapStateToProps, { addAudioChunksItem })(
  SubTitleSideBar
);
