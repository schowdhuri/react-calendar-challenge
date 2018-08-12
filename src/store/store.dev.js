import { createStore, compose } from "redux";

export default function configureStore(reducer) {
    const store = createStore(reducer, {}, compose(
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
    return store;
}
