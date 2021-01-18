import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const LyricsInputWrapper = styled.div`
  padding: 14px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ffffff;
  box-shadow: 0px 6px 12px #0052e01a;
  border-radius: 10px;
`;
export const DeleteIcon = styled(FontAwesomeIcon)`
  align-self: flex-end;
  color: gray;
  cursor: pointer;
`;
export const LyricsInput = styled.input`
  padding-top: 9px;
  padding-left: 15px;
  padding-bottom: 9px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #dde3f0;
  border-radius: 5px;
  margin-top: 10px;
`;
export const MinuteInput = styled.input`
  padding: 8px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid rgba(221, 227, 240, 1);
  border-radius: 5px;
`;

export const StartEndWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content:space-between;
`;

export const StartEndSpan = styled.span`
  color: #545f7e;
  font-size: 12px;
  align-self:center;
`;

export const Line = styled.hr`
  color: rgba(112, 112, 112, 0.15);
  transform: rotate(90);
`;
