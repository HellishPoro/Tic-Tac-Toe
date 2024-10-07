import { appReduser } from "./reducer";
import { createStore } from "redux";

export const store = createStore(appReduser)
