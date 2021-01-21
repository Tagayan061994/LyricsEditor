import React from "react";
import * as Styled from "./editStyle";
import {
  faBold,
  faItalic,
  faUnderline,
} from "@fortawesome/free-solid-svg-icons";

const data = [
  {
    icon: faBold,
    pos: "left",
  },
  {
    icon: faItalic,
    pos: "center",
  },
  {
    icon: faUnderline,
    pos: "right",
  },
];

export const TextProps = React.memo(() => {
  return (
    <Styled.TextPropWrapper>
      <Styled.PickerWrapp>
        <Styled.TextLabel>Text Properties</Styled.TextLabel>
        <Styled.BtnWrapper>
          {data.map((data, i) => (
            <Styled.PropBtn pos={data.pos} key={i}>
              <Styled.Icon icon={data.icon} size="lg" />
            </Styled.PropBtn>
          ))}
        </Styled.BtnWrapper>
      </Styled.PickerWrapp>
    </Styled.TextPropWrapper>
  );
});
