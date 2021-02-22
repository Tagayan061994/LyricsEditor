import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ResizeKnobs = styled.div`
  max-width: 10px;
  min-width: 10px;
  flex: 1;
  width: 5%;
  height: 100%;
  background-color: rgba(118, 109, 232, 1);
  display: flex;
  justify-content: center;
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
