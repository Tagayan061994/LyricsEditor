import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const TimeLineWrapper = styled.div`
  width: 100%;
  height: 41px;
  position: relative;
  margin-top: 13px;
  transform: scale(1, 1);
  background-color: rgba(185, 207, 255, 1);
`;

export const RangeContainer = styled.div`
  background-color: rgba(118, 109, 232, 0.4);
  width: 20%;
  height: 100%;
  overflow: visible;
  display: flex;
  cursor: move;
  position: absolute;
  justify-content: space-between;
  left: ${({ styles }) => (styles ? `${styles.left}px` : "50px")};
`;

export const ResizeKnobs = styled.div`
  max-width: 10px;
  min-width: 10px;
  width: 5%;
  height: 100%;
  background-color: rgba(118, 109, 232, 1);
  display: flex;
  justify-content:center;
  align-items: center;
  cursor: e-resize;
`;

export const Icon = styled(FontAwesomeIcon)`
  width: 10px;
  height: 10px;
  color: #ffffff;
  align-self: center;
  align-self: center;
`;
