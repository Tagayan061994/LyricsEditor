import produce from "immer";
import { deleteItem, updateChunkEnd, updateChunkStart, addChunkItem } from "./producers"

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


export const audioConfigs = produce((draft, action) => {
  switch (action.type) {
    case "SET_TYPE":
      draft.type = action.payload;
      break;
    case "ADD_AUDIO_CHUNKS_ITEM":
      addChunkItem(draft, initialState);
      break;
    case "DELETE_AUDIO_CHUNKS_ITEM":
      deleteItem(draft.audioChunks, action.payload);
      break;
    case "UPDATE_CHUNK_ITEM_END":
      updateChunkEnd(draft.audioChunks, action.payload);
      break;
    case "UPDATE_CHUNK_ITEM_START":
      updateChunkStart(draft.audioChunks, action.payload);
      break;
  }
}, initialState);
