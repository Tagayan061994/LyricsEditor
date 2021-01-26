export const setType = (type) => {
  return {
    type: "SET_TYPE",
    payload: type,
  };
};

export const setChunkStart = (type) => {
  return {
    type: "SET_CHUNK_START",
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
