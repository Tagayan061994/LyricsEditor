import { createSelector } from "reselect";
export const getStore = (state) => state;

export const getAudioConfigs = createSelector(getStore, (state) => {
    return state.audioConfigs;
});
export const getImgUrl = createSelector(
    getAudioConfigs,
    (audioConfigs) => audioConfigs.imageUrl
);
export const getAudioUrl = createSelector(
    getAudioConfigs,
    (audioConfigs) => audioConfigs.audioUrl
);
export const getAudioChunks = createSelector(
    getAudioConfigs,
    (audioConfigs) => audioConfigs.audioChunks
);
