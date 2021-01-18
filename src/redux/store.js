import { createStore, combineReducers } from "redux";
import { audioConfigs } from "./reducers/audioConfig";

const enhancers =
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const appReducers = combineReducers({
    audioConfigs,
});

export const store = createStore(appReducers, enhancers);