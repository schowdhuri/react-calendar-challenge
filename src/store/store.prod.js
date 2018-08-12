import { createStore } from "redux";

export default function configureStore(reducer) {
    return createStore(reducer);
}
