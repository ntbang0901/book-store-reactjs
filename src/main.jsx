import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store, persistor } from "./store.";
import { PersistGate } from "redux-persist/integration/react";
import "font-awesome/css/font-awesome.min.css";
import setupInterceptors from "./services/setupInterceptors";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

setupInterceptors(store);
