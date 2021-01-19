import React, { useState } from "react";
import * as Styled from "./style";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux"
import { getAudioChunks } from "../../../redux/selectors";
import { LuricsInputWrapper } from "./lyricsInputComp/index.js";

export const SubTitleSideBar = React.memo(() => {
    const dispatch = useDispatch()
    const chunksData = useSelector(getAudioChunks);
    const [itemData, setItemData] = useState({})

    const addChunksItem = (chunksData, item) => {
        let updatedChunkData = { ...chunksData }
        updatedChunkData.end = item.endTimeVal
        updatedChunkData.start = item.startTimeVal
        updatedChunkData.textParams = {
            ...chunksData.textParams,
            text: item.inputVal
        }
        dispatch({ type: "ADD_AUDIO_CHUNKS_ITEM", payload: item })
    }
    return (
        <Styled.LyricsSideBarWrapper>
            {chunksData.map((data, i) => (
                <LuricsInputWrapper
                    key={i}
                    data={data}
                    setItemData={setItemData}
                />
            ))}
            <Styled.AddButton onClick={() => addChunksItem(chunksData, itemData)}>+ add sub</Styled.AddButton>
        </Styled.LyricsSideBarWrapper>
    );
});
