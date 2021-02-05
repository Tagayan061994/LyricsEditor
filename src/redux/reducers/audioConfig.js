import produce from "immer";

const initialState = {
  audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  imageUrl: "inch vor nkar",
  canvasHeight: 1080,
  canvasWidth: 1920,
  duration: 186,
  audioChunks: [
    {
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
    },
  ],
};

const deleteItem = (draft, id) => {
  draft.splice(
    draft.findIndex((chunk) => chunk.id !== id),
    1
  );
};

const updateTodos = (draft, obj) => {
  draft[draft.findIndex((chunk) => chunk.id === obj.id)].end = obj.itemEnd;
};

const addChunkItem = (draft) => {
  draft.audioChunks.push({
    ...initialState.audioChunks[0],
    id: draft.audioChunks.length + 1,
    end: draft.duration,
    start: draft.audioChunks[draft.audioChunks.length - 1].end,
  });
};

export const audioConfigs = produce((draft, action) => {
  switch (action.type) {
    case "SET_TYPE":
      draft.type = action.payload;
      break;
    case "ADD_AUDIO_CHUNKS_ITEM":
      addChunkItem(draft);
      break;
    case "DELETE_AUDIO_CHUNKS_ITEM":
      deleteItem(draft.audioChunks, action.payload);
      break;
    case "UPDATE_CHUNK_ITEM_END":
      updateTodos(draft.audioChunks, action.payload);
      break;
  }
}, initialState);
