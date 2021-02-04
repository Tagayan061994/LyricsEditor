import React from "react";
import * as Styled from "./audioStyle";
import { faUndo } from "@fortawesome/free-solid-svg-icons";

export const BackBtn = React.memo((props) => {
  const { handleClick } = props;

  return (
    <Styled.BackForwWrapper>
      <Styled.BackForwSpan>-1s</Styled.BackForwSpan>
      <Styled.BackForwButton onClick={handleClick}>
        <Styled.BackForwIcon icon={faUndo} size="1x" />
      </Styled.BackForwButton>
    </Styled.BackForwWrapper>
  );
});
