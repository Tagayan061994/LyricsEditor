import React from 'react';
import * as Styled from "./style";
import { LuricsInputWrapper } from './lyricsInputComp/index.js';

export const SubTitleSideBar = React.memo(() => {
    return (
        <Styled.LyricsSideBarWrapper>
            <LuricsInputWrapper />
            <Styled.AddButton>
                + add sub
            </Styled.AddButton>
        </Styled.LyricsSideBarWrapper>
    );
});

