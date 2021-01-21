import React from "react";
import * as Styled from "./editStyle";
import { Pickers } from "./pickers";
import { SelectFont } from "./selectFont";
import { TextAlign } from "./textAlighnBtn";
import { TextProps } from "./textpropBtn";

export const TextEditor = () => {
   return (
      <Styled.EditorWrapper>
         <SelectFont />
         <Pickers />
         <TextProps />
         <TextAlign />
      </Styled.EditorWrapper>
   );
};
