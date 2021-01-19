import React from "react";
import * as Styled from "./audioStyle";
import { faUndo } from "@fortawesome/free-solid-svg-icons";

export const Undo = React.memo((props) => {
    const { handleClick } = props;

    return (
        <Styled.UndoWrapper>
            <Styled.UndoRedoSpan>-1s</Styled.UndoRedoSpan>
            <Styled.UndoButton onClick={() => handleClick()}>
                <Styled.UndoRedoIcon icon={faUndo} size="1x" />
            </Styled.UndoButton>
        </Styled.UndoWrapper>
    );
}); 