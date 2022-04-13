// import { createRoot } from "react-dom/client";
// import { Provider } from "react-redux";
// import App from "./App";
// import { setupStore } from "./store/store";
// import "./server/server";
// import GlobalStyle from "./GlobalStyle";
//
// const container = document.getElementById("root") as HTMLElement;
// const root = createRoot(container);
//
// const store = setupStore();
//
// root.render(
//   <Provider store={store}>
//     <GlobalStyle />
//     <App />
//   </Provider>
// );
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { setupStore } from "./store/store";
import "./server/server";
import GlobalStyle from "./GlobalStyle";

const store = setupStore();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
