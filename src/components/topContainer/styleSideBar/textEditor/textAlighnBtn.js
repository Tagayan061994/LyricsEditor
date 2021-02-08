import React from "react";
import * as Styled from "./editStyle";
import {
  faAlignCenter,
  faAlignLeft,
  faAlignRight,
} from "@fortawesome/free-solid-svg-icons";

const data = [
  {
    icon: faAlignLeft,
    pos: "left",
  },
  {
    icon: faAlignCenter,
    pos: "center",
  },
  {
    icon: faAlignRight,
    pos: "right",
  },
];

export const TextAlign = React.memo(() => {
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
