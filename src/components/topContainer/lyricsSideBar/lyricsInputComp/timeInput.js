import React from 'react';
import * as Styled from "./style";

export const TimeInput = React.memo((props) => {
   const { value, onChange, label, max, min } = props;
   return (
      <>
         <Styled.StartEndSpan>{label}</Styled.StartEndSpan>
         <Styled.MinuteInput
            type="time"
            step="2"
            max={max}
            min={min}
            value={value}
            onChange={onChange}
         />
      </>
   );
});
