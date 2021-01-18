import React, { useEffect } from "react";
import moment from "moment";
import * as Styled from "./style";
import momentDurationFormatSetup from "moment-duration-format";

export const Bar = React.memo((props) => {
    const { duration, curTime, onTimeUpdate, setCurrentDuration } = props;

    const curPercentage = (curTime / duration) * 100;

    const formatDuration = (duration) => {
        return moment
            .duration(duration, "seconds")
            .format("hh:mm:ss", { trim: false });
    };

    const calcClickedTime = (e) => {
        const clickPositionInPage = e.pageX;
        const bar = document.querySelector(".bar__progress");
        const barStart = bar.getBoundingClientRect().left + window.scrollX;
        const barWidth = bar.offsetWidth;
        const clickPositionInBar = clickPositionInPage - barStart;
        const timePerPixel = duration / barWidth;
        return timePerPixel * clickPositionInBar;
    };


    useEffect(() => {
        setCurrentDuration(formatDuration(curTime))
    }, [curTime, setCurrentDuration])

    function handleTimeDrag(e) {
        onTimeUpdate(calcClickedTime(e));

        const updateTimeOnMove = (eMove) => {
            onTimeUpdate(calcClickedTime(eMove));
        };

        document.addEventListener("mousemove", updateTimeOnMove);

        document.addEventListener("mouseup", () => {
            document.removeEventListener("mousemove", updateTimeOnMove);
        });
    }

    return (
        <Styled.BarContainer>
            <Styled.ProgressContainer
                className="bar__progress"
                curPercentage={curPercentage}
                onMouseDown={(e) => handleTimeDrag(e)}
            >
                <Styled.BarProgressKnob
                    curPercentage={curPercentage}
                />
            </Styled.ProgressContainer>
        </Styled.BarContainer>
    );
});
