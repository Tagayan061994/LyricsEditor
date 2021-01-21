import React from "react";
import * as Styled from "./editStyle";

export const Pickers = () => {
  return (
    <Styled.PickerSectionWrapper>
      <Styled.PickerWrapp>
        <Styled.PickerLabel>Text Color</Styled.PickerLabel>
        <Styled.ColorPicker type="color" defaultValue="#FF77E0" />
      </Styled.PickerWrapp>
      <Styled.PickerWrapp>
        <Styled.PickerLabel>Text Size</Styled.PickerLabel>
        <Styled.SizePicker type="number" defaultValue="15" />
      </Styled.PickerWrapp>
    </Styled.PickerSectionWrapper>
  );
};
