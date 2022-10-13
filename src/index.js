import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { StateProvder } from "./StateProvider";
import reducer, { initialState } from "./reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StateProvder initialState={initialState} reducer={reducer}>
    <App />
  </StateProvder>
);
