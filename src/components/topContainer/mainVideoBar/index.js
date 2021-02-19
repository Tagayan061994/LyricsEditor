import React, { useRef, useState, useEffect } from "react";
import * as Styled from "./style";
import { connect } from "react-redux";
import { getImgOriginWidth, getImgOriginHeight } from "../../../redux/selectors";

const MainVideoBar = React.memo((props) => {
    const { imgOriginWidth, imgOriginHeight } = props;
    const ref = useRef(null)
    const [scalRatio, setScalRatio] = useState(null)

    const calcScale = (originHeight, originWidth, currHeight, currWidth) => {
        return Math.min(currWidth / originWidth, currHeight / originHeight)
    }

    useEffect(() => {
        const canvasWidth = ref.current.offsetWidth
        const canvasHeight = ref.current.offsetHeight
        const scale = calcScale(canvasHeight, canvasWidth, imgOriginWidth, imgOriginHeight);
        setScalRatio(scale)
    }, [imgOriginHeight, imgOriginWidth])

    return (
        <Styled.MainVideoWrapper ref={ref} scale={scalRatio}>
            <Styled.VideoBaner>
                <span>Hello Hello</span>
            </Styled.VideoBaner>
        </Styled.MainVideoWrapper>
    );
});

//redux connect
const mapStateToProps = (state) => ({
    imgOriginWidth: getImgOriginWidth(state),
    imgOriginHeight: getImgOriginHeight(state)
});
export default connect(mapStateToProps, null)(MainVideoBar);
