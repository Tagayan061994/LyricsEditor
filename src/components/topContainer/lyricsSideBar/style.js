import styled from "styled-components";

export const LyricsSideBarWrapper = styled.div`
  max-width: 339px;
  flex: 1 1 auto;
  display: flex;
  padding-top: 73px;
  padding-left: 8px;
  padding-right: 1px;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;
  border-left: 1px solid rgba(112, 112, 112, 0.15);
`;

export const AddButton = styled.button`
  border: none;
  color: #7683a7;
  cursor: pointer;
  display: block;
  font-size: 12px;
  margin-top: 33px;
  align-self: center;
  padding: 13px 35px;
  border-radius: 8px;
  text-align: center;
  text-decoration: none;
  box-shadow: 0px 3px 9px #0052e01a;
  background: #ffffff 0% 0% no-repeat padding-box;
`;

export const ModalWrapper = styled.div`
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 30%;
  top: 30%;
  width: 20%; /* Full width */
  height: 20%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 250, 0); /* Fallback color */
  background-color: rgba(0, 250, 0, 0.4); /* Black w/ opacity */
`;
