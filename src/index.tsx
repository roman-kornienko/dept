import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { setupStore } from "./store/store";
import "./server/server";
import GlobalStyle from "./GlobalStyle";
import { BrowserRouter as Router } from "react-router-dom";

const store = setupStore();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <GlobalStyle />
        <App />
      </Router>
    </Provider>
  </StrictMode>,
  rootElement
);
