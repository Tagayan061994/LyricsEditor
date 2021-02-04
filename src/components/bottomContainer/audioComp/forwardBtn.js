import React from "react";
import * as Styled from "./audioStyle";
import { faRedo } from "@fortawesome/free-solid-svg-icons";

export const ForwardBtn = React.memo((props) => {
  const { handleClick } = props;

  return (
    <Styled.BackForwWrapper>
      <Styled.BackForwButton onClick={handleClick}>
        <Styled.BackForwIcon icon={faRedo} size="lg" />
      </Styled.BackForwButton>
      <Styled.BackForwSpan>+1s</Styled.BackForwSpan>
    </Styled.BackForwWrapper>
  );
});
