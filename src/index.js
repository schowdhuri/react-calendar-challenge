import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

import { Provider } from "react-redux";

import configureStore from "./store"; // eslint-disable-line import/default
import reducer from "./reducers";

import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faTrash,
    faEdit,
    faChevronLeft,
    faChevronRight
} from '@fortawesome/free-solid-svg-icons';

import "./css/index.css" 

// import {library} from './utils/help';
// const icons = require('@fortawesome/free-solid-svg-icons');

console.log("in app: library = ", library)
// console.log("in app: icons = ", faTrash, faEdit, faChevronLeft, faChevronRight)
library.add(faTrash, faEdit, faChevronLeft, faChevronRight);


const store = configureStore(reducer);

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById("root"));
