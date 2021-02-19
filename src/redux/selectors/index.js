import { createSelector } from "reselect";
export const getStore = (state) => state;

export const getAudioConfigs = createSelector(getStore, (state) => {
  return state.audioConfigs;
});

export const getAudioChunks = createSelector(
  getAudioConfigs,
  (audioConfigs) => audioConfigs.audioChunks
);

export const getImgOriginWidth = createSelector(
  getAudioConfigs,
  (audioConfigs) => audioConfigs.canvasWidth
);

export const getImgOriginHeight = createSelector(
  getAudioConfigs,
  (audioConfigs) => audioConfigs.canvasHeight
);

export const getPrevAudioChunkEndById = (state, id) => {
  const audioChunks = getAudioChunks(state);
  if (id - 1 > 0) {
    return audioChunks.find((chunk) => chunk.id === id - 1);
  }
};

export const getNextAudioChunkStartById = (state, id) => {
  const audioChunks = getAudioChunks(state);
  if (id + 1 < audioChunks[audioChunks.length - 1].id) {
    return audioChunks.find((chunk) => chunk.id === id + 1);
  }
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

export const makeGetPrevAudioChunkEndById = () => {
  return createSelector(
    getPrevAudioChunkEndById,
    (chunk) => chunk && chunk.end
  );
};

export const makeGetAudioChunkStartById = () => {
  return createSelector(
    getNextAudioChunkStartById,
    (chunk) => chunk && chunk.start
  );
};
