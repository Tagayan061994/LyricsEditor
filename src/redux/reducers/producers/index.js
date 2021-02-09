export const deleteItem = (draft, id) => {
   draft.splice(
      draft.findIndex((chunk) => chunk.id !== id),
      1
   );
};

export const updateChunkEnd = (draft, obj) => {
   draft[draft.findIndex((chunk) => chunk.id === obj.id)].end = obj.itemEnd;
};

export const updateChunkStart = (draft, obj) => {
   draft[draft.findIndex((chunk) => chunk.id === obj.id)].start = obj.itemStart;
};

export const addChunkItem = (draft, initialState) => {
   draft.audioChunks.push({
      ...initialState.audioChunks[0],
      id: draft.audioChunks.length + 1,
      end: draft.duration,
      start: draft.audioChunks[draft.audioChunks.length - 1].end,
   });
};