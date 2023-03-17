import React from "react";
import ReactDOM from "react-dom/client";
import {createRoot} from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.css';
import App from "./app";

const root = createRoot(document.querySelector('#root'))

root.render(<App />)