import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const TimeLineWrapper = styled.div`
  width: 100%;
  height:41px;
  position:relative;
  margin-top: 13px;
  transform: scale(1, 1);   
  background-color:rgba(185, 207, 255, 1);
`;

export const RangeContainer = styled.div`
  background-color: rgba(118, 109, 232, 0.4);
  width:20%;
  height:100%;
  position:absolute;
  left: ${({ styles }) => styles ? `${styles.left}px` : "10px"};
  overflow: visible;
  display:flex;
  justify-content:space-between;
  cursor: move;
`;


export const ResizeKnobs = styled.div`
  width: 5%;
  height: 100%;
  background-color: rgba(118, 109, 232, 1);
  display:flex;
`;

export const Icon = styled(FontAwesomeIcon)`
  width: 15px;
  height: 15px;
  color: #FFFFFF;
  align-self:center;
  align-self: center;
`;