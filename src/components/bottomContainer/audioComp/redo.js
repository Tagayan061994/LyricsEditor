import React from "react";
import * as Styled from "./audioStyle";
import { faRedo } from "@fortawesome/free-solid-svg-icons";

export const Redo = React.memo((props) => {
    const { handleClick } = props;

    return (
        <Styled.UndoWrapper>
            <Styled.UndoButton onClick={() => handleClick()}>
                <Styled.UndoRedoIcon icon={faRedo} size="lg" />
            </Styled.UndoButton>
            <Styled.UndoRedoSpan>+1s</Styled.UndoRedoSpan>
        </Styled.UndoWrapper>
    );
}); 