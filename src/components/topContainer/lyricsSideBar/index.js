import React from "react";
import * as Styled from "./style";
import { connect } from "react-redux";
import { LyricsInputWrapper } from "./lyricsInputComp/index.js";
import { addAudioChunksItem } from "../../../redux/actions/audioActions";
import { getAudioChunks, getAudioDuration } from "../../../redux/selectors";

const SubTitleSideBar = React.memo((props) => {
  const { chunksData, fullDuration, addAudioChunksItem } = props;
  const lastChunkEndTime = chunksData[chunksData.length - 1].end;

  return (
    <Styled.LyricsSideBarWrapper>
      {chunksData.map((data) => (
        <LyricsInputWrapper key={data.id} data={data} />
      ))}
      <Styled.AddButton
        onClick={addAudioChunksItem}
        disabled={lastChunkEndTime === fullDuration ? true : false}
      >
        + add sub
      </Styled.AddButton>
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
