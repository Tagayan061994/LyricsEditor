import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const EditorWrapper = styled.div`
  padding: 15px 36px 7px 10px;
  background-color: rgba(255, 255, 255, 1);
`;

export const SectionWrapper = styled.div`
  padding: 14px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PickerSectionWrapper = styled.div`
  padding: 14px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const TextPropWrapper = styled.div`
  padding: 14px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const BtnWrapper = styled.div`
  display: flex;
`;

export const Icon = styled(FontAwesomeIcon)`
  width: 15px;
  height: 15px;
  color: rgba(84, 95, 126, 1);
  align-self: center;
`;

export const PropBtn = styled.button`
  padding: 9px 19px;
  border: 1px solid #c2c9de;
  border-radius: ${(props) =>
    props.pos === "left"
      ? "10px 0px 0px 10px"
      : props.pos === "center"
      ? "0px 0px 0px 0px"
      : props.pos === "right"
      ? "0px 10px 10px 0px"
      : 0};
  background: #ffffff 0% 0% no-repeat padding-box;
  cursor: pointer;
`;

export const Selectlabel = styled.label`
  font-size: 11px;
  color: rgba(98, 117, 177, 1);
  margin-bottom: 8px;
  margin-left: 6%;
  align-self: flex-start;
`;

export const TextLabel = styled.label`
  color: rgba(98, 117, 177, 1);
  font-size: 11px;
  margin-bottom: 6px;
  align-self: flex-start;
`;

export const PickerWrapp = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PickerLabel = styled.label`
  color: rgba(98, 117, 177, 1);
  font-size: 9px;
  margin-bottom: 6px;
`;

export const ColorPicker = styled.input`
  width: 33px;
  height: 33px;
  background-color: #ff77e0;
  color: #ff77e0;
  border: 1px solid #ff77e0;
  border-radius: 6px;
`;

export const SizePicker = styled.input`
  width: 47px;
  height: 24px;
  background-color: rgba(255, 255, 255, 1);
  color: rgba(194, 201, 222, 1);
  border: 1px solid rgba(194, 201, 222, 1);
  border-radius: 6px;
`;

export const FontSelect = styled.select`
  width: 205px;
  height: 40px;
  background-color: rgba(255, 255, 255, 1);
  color: rgba(98, 117, 177, 1);
  border: 1px solid #dde3f0;
  border-radius: 10px;
  margin-left: 5%;
  padding: 2%;
  font-family: ${(props) => props.textFont};
  font-size: 12px;
  outline: none;
  .select {
    -moz-appearance: none; /* Firefox */
    -webkit-appearance: none; /* Safari and Chrome */
    appearance: none;
  }
  .Hachi-Maru-Pop {
    font-family: "Hachi Maru Pop";
  }
  .Potta-One {
    font-family: "Potta-One";
  }
  .East-Sea-Dokdo {
    font-family: "East-Sea-Dokdo";
  }
  .Montserrat {
    font-family: "Montserrat";
  }
`;
