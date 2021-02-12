export const setType = (type) => {
  return {
    type: "SET_TYPE",
    payload: type,
  };
};

export const getAudioChunks = () => {
  return {
    type: "GET_AUDIO_CHUNKS",
  };
};

export const addAudioChunksItem = (item) => {
  return {
    type: "ADD_AUDIO_CHUNKS_ITEM",
    payload: item,
  };
};

export const deleteAudioChunksItem = (id) => {
  return {
    type: "DELETE_AUDIO_CHUNKS_ITEM",
    payload: id,
  };
};

export const setChunkStart = (type) => {
  return {
    type: "SET_CHUNK_START",
    payload: type,
  };
};

export const getAudioDuration = () => {
  return {
    type: "GET_AUDIO_DURATION",
  };
};

export const updateChunkItemEnd = (id, itemEnd) => {
  return {
    type: "UPDATE_CHUNK_ITEM_END",
    payload: {
      id,
      itemEnd,
    },
  };
};
export const updateChunkItemStart = (id, itemStart) => {
  return {
    type: "UPDATE_CHUNK_ITEM_START",
    payload: {
      id,
      itemStart,
    },
  };
};
