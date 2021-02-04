import React from "react";
import * as Styled from "./style";
import { MainVideoBar } from "./mainVideoBar";
import { StyleSideBar } from "./styleSideBar";
import SubTitleSideBar from "./lyricsSideBar";

export const TopContainer = () => {
  return (
    <Styled.TopContainer>
      <StyleSideBar />
      <MainVideoBar />
      <SubTitleSideBar />
    </Styled.TopContainer>
  );
};
