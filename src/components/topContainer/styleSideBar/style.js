import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StyleSideBarWrapper = styled.div`
  max-width: 270px;
  width: 100%;
  /* max-height: 550px; */
  box-sizing: border-box;
  flex: 1 1 auto;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-right: 1px solid rgba(112, 112, 112, 0.15);
  box-shadow: 0px 6px 12px #0052e029;
  padding: 91px 0px 210px 0px;
  overflow: auto;
  div + div {
    border-bottom: 1px solid rgba(112, 112, 112, 0.15);
    border-top: 1px solid rgba(112, 112, 112, 0.15);
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  width: 15px;
  height: 15px;
  color: rgba(84, 95, 126, 1);
  align-self: center;
`;

export const MenuWrapper = styled.div`
  padding: 26px 29px 21px 18px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
`;

export const IconTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 56px;
`;

export const TextSpan = styled.span`
  letter-spacing: 0px;
  font-size: 15px;
  color: rgba(37, 46, 72, 1);
  font-weight: Medium;
  margin-left: 18px;
`;
