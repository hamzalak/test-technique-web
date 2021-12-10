import { createStore } from "redux";

import { combineReducers } from "redux";
import { equipementReducer } from "./equipements/reducer";

const rootReducer = combineReducers({
  equipements: equipementReducer,
});

export const store = createStore(rootReducer);
