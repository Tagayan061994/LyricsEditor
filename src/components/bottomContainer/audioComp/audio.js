import React, { useState } from "react";
import * as Styled from "./audioStyle";
import { Bar } from "./bar";
import { Play } from "./play";
import { Undo } from "./undo";
import { Redo } from "./redo";
import { Pause } from "./pause";
import { useSelector } from "react-redux";
import useAudioPlayer from "./useAudioPlayer";
import { getAudioUrl } from "../../../redux/selectors";

export const AudioPlayer = React.memo(() => {
  const audioUrl = useSelector(getAudioUrl);
  const [currentDuration, setCurrentDuration] = useState("00:00:00");
  const {
    curTime,
    duration,
    playing,
    setCurTime,
    setPlaying,
    setClickedTime,
  } = useAudioPlayer();

  return (
    <Styled.AudioContainer>
      <Styled.Player id="audio">
        <source src={audioUrl} />
        Your browser does not support the <code>audio</code> element.
      </Styled.Player>
      <Styled.Controls>
        <Styled.PlayPauseWrapper>
          <Undo handleClick={() => setCurTime(curTime - 1)} />
          {playing ? (
            <Pause handleClick={() => setPlaying(false)} />
          ) : (
              <Play handleClick={() => setPlaying(true)} />
            )}
          <Redo handleClick={() => setCurTime(curTime + 1)} />
          <Styled.BarTimeSpan>{currentDuration}</Styled.BarTimeSpan>
        </Styled.PlayPauseWrapper>
        <Bar
          curTime={curTime}
          duration={duration}
          setCurrentDuration={setCurrentDuration}
          onTimeUpdate={(time) => setClickedTime(time)}
        />
      </Styled.Controls>
    </Styled.AudioContainer>
  );
});
