import React from "react";
import * as Styled from "./audioStyle";
import { faPause } from "@fortawesome/free-solid-svg-icons";

export const Pause = React.memo((props) => {
  const { handleClick } = props;

  return (
    <Styled.PauseButton onClick={() => handleClick()}>
      <Styled.PauseIcon icon={faPause} size="lg" />
    </Styled.PauseButton>
  );
});
