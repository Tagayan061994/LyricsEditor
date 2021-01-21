import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StyleSideBarWrapper = styled.div`
  max-width: 243px;
  width: 18%;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-right: 1px solid rgba(112, 112, 112, 0.15);
  box-shadow: 0px 6px 12px #0052e029;
  padding-top: 93px;
  padding-bottom: 238px;
`;

export const Icon = styled(FontAwesomeIcon)`
  width: 15px;
  height: 15px;
  color: rgba(84, 95, 126, 1);
  align-self: center;
`;

export const MenuWrapper = styled.div`
  padding: 17px 25px;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const IconText = styled.div`
  width: 70%;
  display: flex;
`;

export const TextSpan = styled.span`
  letter-spacing: 0px;
  font-size: 15px;
  color: rgba(37, 46, 72, 1);
  font-weight: Medium;
  margin-left: 17px;
`;
