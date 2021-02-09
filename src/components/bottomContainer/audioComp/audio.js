import React, { useState, useRef } from "react";
import * as Styled from "./audioStyle";
import { Bar } from "./bar";
import { Play } from "./play";
import { BackBtn } from "./backBtn";
import { ForwardBtn } from "./forwardBtn";
import { Pause } from "./pause";
import { useSelector } from "react-redux";
import useAudioPlayer from "./useAudioPlayer";
import { getAudioUrl } from "../../../redux/selectors";

export const AudioPlayer = React.memo(() => {
  const audioRef = useRef();
  const audioUrl = useSelector(getAudioUrl);
  const [currentDuration, setCurrentDuration] = useState("00:00:00");
  const {
    curTime,
    duration,
    playing,
    setCurTime,
    setPlaying,
    setClickedTime,
  } = useAudioPlayer(audioRef);

  return (
    <Styled.AudioContainer>
      <Styled.Player ref={audioRef}>
        <source src={audioUrl} />
        Your browser does not support the <code>audio</code> element.
      </Styled.Player>
      <Styled.Controls>
        <Styled.PlayPauseWrapper>
          <BackBtn handleClick={() => setCurTime(curTime - 1)} />
          {playing ? (
            <Pause handleClick={() => setPlaying(false)} />
          ) : (
            <Play handleClick={() => setPlaying(true)} />
          )}
          <ForwardBtn handleClick={() => setCurTime(curTime + 1)} />
          <Styled.BarTimeSpan>{currentDuration}</Styled.BarTimeSpan>
        </Styled.PlayPauseWrapper>
        <Bar
          curTime={curTime}
          duration={duration}
          onTimeUpdate={setClickedTime}
          setCurrentDuration={setCurrentDuration}
        />
      </Styled.Controls>
    </Styled.AudioContainer>
  );
});
