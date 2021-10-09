import React from "react";
import { render } from "react-dom";
import App from "./containers/App";
import { nanoid } from "nanoid";

const uuid = nanoid();

render(
  <App uuid={uuid} />,
  document.body.appendChild(document.createElement("div"))
);
