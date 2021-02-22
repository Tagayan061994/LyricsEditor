import { createStore, combineReducers } from "redux";
import { audioConfigs } from "./reducers/audioConfig";
import { currentActiveId } from "./reducers/currActiveId";

const enhancers =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const appReducers = combineReducers({
  audioConfigs,
  currentActiveId
});

export const store = createStore(appReducers, enhancers);