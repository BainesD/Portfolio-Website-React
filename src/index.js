import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import App from "./components/App";
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter} from "react-router-dom"

const container = document.getElementById('root');

const root = ReactDOM.createRoot(container);

root.render(
<BrowserRouter>
    <App/>
</BrowserRouter>
);