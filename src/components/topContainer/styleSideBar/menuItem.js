import React, { useState } from "react";
import * as Styled from "./style";
import { TextEditor } from "./textEditor/index";

export const MenuItem = ({ data }) => {
  const [openEditor, setOpenEditor] = useState(false);

  return (
    <>
      <Styled.MenuWrapper onClick={() => setOpenEditor(!openEditor)}>
        <Styled.IconText>
          <Styled.Icon icon={data.icon} size="lg" />
          <Styled.TextSpan>{data.text}</Styled.TextSpan>
        </Styled.IconText>
        <Styled.Icon icon={data.rightIcon} size="sm" />
      </Styled.MenuWrapper>
      {openEditor && <TextEditor />}
    </>
  );
};
