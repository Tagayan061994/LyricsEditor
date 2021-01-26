import produce from "immer";

const initialState = {
  audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  imageUrl: "inch vor nkar",
  canvasHeight: 1080,
  canvasWidth: 1920,
  duration: 186,
  audioChunks: [
    {
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
      draft.audioChunks.push(initialState.audioChunks[0]);
      break;
    case "DELETE_AUDIO_CHUNKS_ITEM":
      draft.audioChunks.splice(action.payload, 1);
  }
}, initialState);
