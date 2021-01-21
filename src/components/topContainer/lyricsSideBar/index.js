import React from "react";
import * as Styled from "./style";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAudioChunks } from "../../../redux/selectors";
import { LuricsInputWrapper } from "./lyricsInputComp/index.js";

export const SubTitleSideBar = React.memo(() => {
  const dispatch = useDispatch();
  const chunksData = useSelector(getAudioChunks);

  return (
    <Styled.LyricsSideBarWrapper>
      {chunksData.map((data, i) => (
        <LuricsInputWrapper key={i} data={data} id={i} />
      ))}
      <Styled.AddButton
        onClick={() => dispatch({ type: "ADD_AUDIO_CHUNKS_ITEM" })}
      >
        + add sub
      </Styled.AddButton>
    </Styled.LyricsSideBarWrapper>
  );
});
