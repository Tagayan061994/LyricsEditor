import React from 'react';
import * as Styled from "./style";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const LuricsInputWrapper = React.memo(() => {
    return (
        <Styled.LyricsInputWrapper>
            <Styled.DeleteIcon icon={faTrash} size="lg" />
            <Styled.LyricsInput></Styled.LyricsInput>
            <Styled.StartEndWrapper>
                <Styled.StartEndSpan>Start</Styled.StartEndSpan>
                <Styled.MinuteInput
                    id="appt-time"
                    name="appt-time"
                    type="time"
                    step="2"
                >
                </Styled.MinuteInput>
                <Styled.Line />
                <Styled.StartEndSpan>End</Styled.StartEndSpan>
                <Styled.MinuteInput
                    id="appt-time"
                    name="appt-time"
                    type="time"
                    step="2"
                >
                </Styled.MinuteInput>
            </Styled.StartEndWrapper>
        </Styled.LyricsInputWrapper>
    );
});
