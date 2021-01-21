import styled from "styled-components";

export const TopContainer = styled.div`
  height: 55%;
  width: 100%;
  display: flex;
  flex: 1 1 auto;

  div + div {
    border-bottom: 1px solid rgba(112, 112, 112, 0.15);
    border-top: 1px solid rgba(112, 112, 112, 0.15);
  }
`;
