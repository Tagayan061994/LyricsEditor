import React from "react";
import * as Styled from "./audioStyle";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

export const Play = React.memo((props) => {
  const { handleClick } = props;

  return (
    <Styled.PlayButton onClick={handleClick}>
      <Styled.PlayIcon icon={faPlay} size="lg" />
    </Styled.PlayButton>
  );
});
