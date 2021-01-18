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
