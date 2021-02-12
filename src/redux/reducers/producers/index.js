const initialChunkItem = {
  id: 1,
  start: 0,
  end: 186,
  textParams: {
    text: "Lorem Ipsum",
    fontName: "Montserrat",
    color: "red",
    size: "16px",
    coordinates: [120, 190],
    opacity: 1,
    styles: ["bold", "italic", "underlined"],
  },
};

const getChunkById = (chunks, id) => {
  return chunks.find((chunk) => chunk.id === id);
};

export const deleteItem = (draft, id) => {
  const chunk = getChunkById(draft.audioChunks, id);
  draft.audioChunks.splice(chunk, 1);
};

export const updateChunkEnd = (draft, obj) => {
  const chunk = getChunkById(draft.audioChunks, obj.id);
  if (chunk) {
    chunk.end = obj.itemEnd;
  }
};

export const updateChunkStart = (draft, obj) => {
  const chunk = getChunkById(draft.audioChunks, obj.id);
  if (chunk) {
    chunk.start = obj.itemStart;
  }
};

export const addChunkItem = (draft) => {
  const chunksLength = draft.audioChunks.length;
  const lastChunkIndex = chunksLength - 1;
  draft.audioChunks.push({
    ...initialChunkItem,
    id: chunksLength + 1,
    end: draft.duration,
    start: draft.audioChunks[lastChunkIndex].end,
  });
};
