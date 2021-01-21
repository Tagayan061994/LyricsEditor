import React from "react";
import * as Styled from "./style";
import { MenuItem } from "./menuItem";
import {
  faTextWidth,
  faChevronRight,
  faPalette,
  faImage,
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
        <MenuItem data={data} key={i} />
      ))}
    </Styled.StyleSideBarWrapper>
  );
});
