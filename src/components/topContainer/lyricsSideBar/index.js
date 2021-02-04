import React from "react";
import * as Styled from "./style";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAudioChunks } from "../../../redux/selectors";
import { LyricsInputWrapper } from "./lyricsInputComp/index.js";
import { addAudioChunksItem } from "../../../redux/actions/audioActions";

export const SubTitleSideBar = React.memo(() => {
  const dispatch = useDispatch();
  const chunksData = useSelector(getAudioChunks);
  console.log(chunksData)
  return (
    <Styled.LyricsSideBarWrapper>
      {chunksData.map((data) => (
        <LyricsInputWrapper key={data.id} data={data} />
      ))}
      <Styled.AddButton
        onClick={() => dispatch(addAudioChunksItem())}
      >
        + add sub
      </Styled.AddButton>
    </Styled.LyricsSideBarWrapper>
  );
});
