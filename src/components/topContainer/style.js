import styled from "styled-components";

export const TopContainer = styled.div`
  height: 60%;
  width: 100%;
  display: flex;

  div + div {
    border-bottom: 1px solid rgba(112, 112, 112, 0.15);
    border-top: 1px solid rgba(112, 112, 112, 0.15);
  }
`;
