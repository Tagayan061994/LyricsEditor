import React from "react";
import * as Styled from "./editStyle";

const selectData = [
  {
    className: "Hachi-Maru-Pop",
    name: "Hachi Maru Pop",
  },
  {
    className: "Potta-One",
    name: "Potta One",
  },
  {
    className: "East-Sea-Dokdo",
    name: "East Sea Dokdo",
  },
  {
    className: "Montserrat",
    name: "Montserrat",
  },
];

export const SelectFont = React.memo(
  ({ textFont, actionName, handleTextChange }) => {
    return (
      <Styled.SectionWrapper>
        <Styled.Selectlabel>Font Family</Styled.Selectlabel>
        <Styled.FontSelect
          textFont={textFont}
          onChange={(e) => handleTextChange(e, actionName)}
        >
          {selectData.map((data, i) => (
            <option key={i} className={data.className} value={data.name}>
              {data.name}
            </option>
          ))}
        </Styled.FontSelect>
      </Styled.SectionWrapper>
    );
  }
);
