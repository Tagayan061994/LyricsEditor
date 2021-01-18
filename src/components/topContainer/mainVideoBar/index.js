import React from 'react';
import * as Styled from "./style";

export const MainVideoBar = React.memo(() => {
    return (
        <Styled.MainVideoWrapper>
            <Styled.VideoBaner>
                <span>Hello Hello</span>
            </Styled.VideoBaner>
        </Styled.MainVideoWrapper>
    );
});