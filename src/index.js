import React from 'react';
import ReactDOM from "react-dom";

import './styles/main.scss';

const HelloReactWebpack = (props) => {
    return (
        <h1>Hello React Webpack :)</h1>
    );
};

ReactDOM.render(
    <HelloReactWebpack />,
  document.getElementById("app")
);