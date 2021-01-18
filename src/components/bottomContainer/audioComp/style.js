import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const AudioContainer = styled.div`
  width: 98%;
  background-color: #ffffff;
`;
export const Player = styled.audio`
  width: 100%;
`;

export const PauseIcon = styled(FontAwesomeIcon)`
  color: black;
`;

export const PlayIcon = styled(FontAwesomeIcon)`
  color: black;
`;

export const BarContainer = styled.div`
  user-select: none;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const PauseButton = styled.button`
  width: fit-content;
  align-self: center;
  margin-bottom: 15px;
  background-color: transparent;
  border: none;

  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
    svg {
      color: greenyellow;
    }
  }

  svg {
    width: 22px;
    height: 28px;
    font-size: 4em;
    color: black;
  }
`;

export const PlayButton = styled.button`
  width: fit-content;
  align-self: center;
  margin-bottom: 18px;
  background-color: transparent;
  border: none;

  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
    svg {
      color: greenyellow;
    }
  }
  svg {
    width: 22px;
    height: 28px;
    font-size: 4em;
    color: black;
  }
`;

export const BarTimeSpan = styled.span`
  color: rgba(37, 46, 72, 1);
  font-weight:normal;
  font-size: 20px;
  margin-left: 5%;
`;

export const ProgressContainer = styled.div`
  flex: 1;
  height: 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
  background: ${(props) =>
    props.curPercentage
      ? `linear-gradient(to right, rgba(86, 144, 255, 0.1) ${props.curPercentage} %, white 0)`
      : "rgba(185, 207, 255, 1)"};
`;

export const BarProgressKnob = styled.span`
  position: relative;
  height: 15px;
  width: 15px;
  background-color: rgba(86, 144, 252, 1);
  left:${(props) => props.curPercentage ? `${props.curPercentage - 2}%` : "2%"} ;
`;

export const PlayPauseWrapper = styled.div`
  display: flex;
  justify-content:center;
`; 