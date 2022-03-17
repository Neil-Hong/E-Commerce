import handleCart from "./reducers/handleCart";
import {combineReducers, createStore} from "redux";

const rootReducers = combineReducers({
    handleCart,
})

const store = createStore(rootReducers)

export default store;