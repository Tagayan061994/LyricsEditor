export const ParsePxTopercent = (fullWidthPx, px) => {
   return (px * 100) / fullWidthPx;
}

export const ParsePercentToSecond = (fullSecond, percent) => {
   return (fullSecond * percent) / 100;
}

export const ParseSecondToPercent = (fullSecond, second) => {
   return (second * 100) / fullSecond;
}