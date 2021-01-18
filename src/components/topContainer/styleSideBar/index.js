import React from "react";
import * as Styled from "./style";
import {
    faTextWidth,
    faChevronRight,
    faPalette,
    faImage
} from "@fortawesome/free-solid-svg-icons";

const data = [
    {
        icon: faTextWidth,
        rightIcon: faChevronRight,
        text: "Text style",
    },
    {
        icon: faPalette,
        rightIcon: faChevronRight,
        text: "Filters",
    },
    {
        icon: faImage,
        rightIcon: faChevronRight,
        text: "Media",
    },
];

export const StyleSideBar = React.memo(() => {
    return (
        <Styled.StyleSideBarWrapper>
            {data.map((data, i) => (
                <Styled.ToggleWrapper key={i}>
                    <Styled.IconTextWrapper>
                        <Styled.Icon icon={data.icon} size="lg" />
                        <Styled.TextSpan>{data.text}</Styled.TextSpan>
                    </Styled.IconTextWrapper>
                    <Styled.Icon icon={data.rightIcon} size="sm" />
                </Styled.ToggleWrapper>
            ))}
        </Styled.StyleSideBarWrapper>
    );
});
