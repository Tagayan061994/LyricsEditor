import React from "react";
import * as Styled from "./style";
import { AudioPlayer } from "./audioComp/audio";

export const BottomContainer = () => {
  return (
    <Styled.BottomContainer>
      <AudioPlayer />
    </Styled.BottomContainer>
  );
};
