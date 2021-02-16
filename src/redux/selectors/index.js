import { createSelector } from "reselect";
export const getStore = (state) => state;

export const getAudioConfigs = createSelector(getStore, (state) => {
  return state.audioConfigs;
});

export const getAudioChunks = createSelector(
  getAudioConfigs,
  (audioConfigs) => audioConfigs.audioChunks
);

export const getPrevAudioChunkStartById = (state, props) => {
  const audioChunks = getAudioChunks(state);
  return props.id - 1 && audioChunks.find((chunk) => chunk.id === props.id - 1);
};

export const getNextAudioChunkEndById = (state, props) => {
  const audioChunks = getAudioChunks(state);
  return props.id + 1 && audioChunks.find((chunk) => chunk.id === props.id + 1);
};

export const getImgUrl = createSelector(
  getAudioConfigs,
  (audioConfigs) => audioConfigs.imageUrl
);

export const getAudioUrl = createSelector(
  getAudioConfigs,
  (audioConfigs) => audioConfigs.audioUrl
);

export const getAudioDuration = createSelector(
  getAudioConfigs,
  (audioConfigs) => audioConfigs.duration
);

export const makeGetPrevAudioChunkStartById = () => {
  return createSelector(getPrevAudioChunkStartById, (chunk) => chunk && chunk.start);
};

export const makeGetAudioChunkEndById = () => {
  return createSelector(getNextAudioChunkEndById, (chunk) => chunk && chunk.end);
};
