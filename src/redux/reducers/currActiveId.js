const initialId = 1;

export const currentActiveId = (state = initialId, action) => {
   switch (action.type) {
      case "SET_CURRENT_ACTIVE_ID":
         return (state = action.payload);
      default:
         return state
   }
};
