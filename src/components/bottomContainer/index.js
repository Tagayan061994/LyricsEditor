import React from "react";
import * as Styled from "./style";
import { TimeLine } from "./timeLineComp";
import { AudioPlayer } from "./audioComp/audio";

export const BottomContainer = () => {
  return (
    <Styled.BottomContainer>
      <AudioPlayer />
      <TimeLine />
    </Styled.BottomContainer>
  );
};
