import React, { useState } from "react";
import * as Styled from "./style";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { parseSecondsToHms } from "../../../../common/parseSecondsToHms";

export const LuricsInputWrapper = React.memo(({ data, setItemData }) => {
    let {
        start,
        end,
        textParams: { text },
    } = data;
    console.log(data)
    const [startTimeVal, setStartTimeVal] = useState(
        start ? parseSecondsToHms(start) : "00:00:00"
    );
    const [endTimeVal, setEndTimeVal] = useState(
        end ? parseSecondsToHms(end) : "00:00:00"
    );
    const [inputVal, setinputVal] = useState(text ? text : "");

    const handleChange = (e, inputName) => {
        if (inputName === "start") {
            setStartTimeVal(parseSecondsToHms(e.target.value));
        } else if (inputName === "end") {
            setEndTimeVal(parseSecondsToHms(e.target.value));
        } else if (inputName === "text") {
            setinputVal(e.target.value);
        }
        setItemData({
            inputVal,
            startTimeVal,
            endTimeVal,
        });
    };

    return (
        <Styled.LyricsInputWrapper>
            <Styled.DeleteIcon icon={faTrash} size="lg" />
            <Styled.LyricsInput
                value={inputVal}
                onChange={(e) => handleChange(e, "text")}
            ></Styled.LyricsInput>
            <Styled.StartEndWrapper>
                <Styled.StartEndSpan>Start</Styled.StartEndSpan>
                <Styled.MinuteInput
                    id="appt-time"
                    name="appt-time"
                    type="time"
                    step="2"
                    value={startTimeVal}
                    onChange={(e) => handleChange(e, "start")}
                ></Styled.MinuteInput>
                <Styled.Line />
                <Styled.StartEndSpan>End</Styled.StartEndSpan>
                <Styled.MinuteInput
                    id="appt-time"
                    name="appt-time"
                    type="time"
                    step="2"
                    value={endTimeVal}
                    onChange={(e) => handleChange(e, "end")}
                ></Styled.MinuteInput>
            </Styled.StartEndWrapper>
        </Styled.LyricsInputWrapper>
    );
});
