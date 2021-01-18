import React, { useState } from "react";
import * as Styled from "./style";
import { Bar } from "./bar";
import { Play } from "./play";
import { Pause } from "./pause";
import { useSelector } from "react-redux";
import useAudioPlayer from "./useAudioPlayer";
import { getAudioUrl } from "../../../redux/selectors";

export const AudioPlayer = React.memo(() => {
  const audioUrl = useSelector(getAudioUrl);
  const [currentDuration, setCurrentDuration] = useState("00:00:00")
  const {
    curTime,
    duration,
    playing,
    setPlaying,
    setClickedTime,
  } = useAudioPlayer();

  console.log("currentDuration", currentDuration);
  return (
    <Styled.AudioContainer>
      <Styled.Player id="audio">
        <source src={audioUrl} />
        Your browser does not support the <code>audio</code> element.
      </Styled.Player>
      <div className="controls">
        {playing ? (
          <Styled.PlayPauseWrapper>
            <Pause handleClick={() => setPlaying(false)} />
            <Styled.BarTimeSpan>{currentDuration}</Styled.BarTimeSpan>
          </Styled.PlayPauseWrapper>
        ) : (
            <Styled.PlayPauseWrapper>
              <Play handleClick={() => setPlaying(true)} />
              <Styled.BarTimeSpan>{currentDuration}</Styled.BarTimeSpan>
            </Styled.PlayPauseWrapper>
          )}
        <Bar
          curTime={curTime}
          duration={duration}
          setCurrentDuration={setCurrentDuration}
          onTimeUpdate={(time) => setClickedTime(time)}
        />
      </div>
    </Styled.AudioContainer>
  );
});
