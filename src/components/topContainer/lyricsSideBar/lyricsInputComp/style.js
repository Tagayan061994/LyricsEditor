import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const LyricsInputWrapper = styled.div`
  display: flex;
  padding: 14px 15px;
  border-radius: 10px;
  margin-bottom: 12px;
  flex-direction: column;
  background-color: #ffffff;
  justify-content: space-between;
  box-shadow: 0px 6px 12px #0052e01a;
`;

export const DeleteIcon = styled(FontAwesomeIcon)`
  align-self: flex-end;
  color: gray;
  cursor: pointer;
`;

export const LyricsInput = styled.input`
  color: #252e48;
  font-size: 14px;
  margin-top: 10px;
  border-radius: 5px;
  padding: 9px 0 8px 15px;
  border: 1px solid #dde3f0;
  background: #ffffff 0% 0% no-repeat padding-box;
`;

export const MinuteInput = styled.input`
  padding: 8px;
  color: #252e48;
  font-size: 12px;
  border-radius: 5px;
  border: 1px solid rgba(221, 227, 240, 1);
  background: #ffffff 0% 0% no-repeat padding-box;
`;

export const StartEndWrapper = styled.div`
  display: flex;
  margin-top: 16px;
  justify-content: space-between;
`;

export const StartEndSpan = styled.span`
  color: #545f7e;
  font-size: 12px;
  align-self: center;
`;

export const Line = styled.hr`
  color: rgba(112, 112, 112, 0.15);
  transform: rotate(90);
`;
