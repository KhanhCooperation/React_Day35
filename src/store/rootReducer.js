import { combineReducers } from "redux";
import btMovieReducer from "./BTMovie/reducer";

export const rootReducer = combineReducers({
  btMovie: btMovieReducer,
});
