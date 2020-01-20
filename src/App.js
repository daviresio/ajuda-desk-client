import React from 'react';
import {Provider} from "react-redux";
import store from "./store/store";
import RoutesConfig from "./config/RoutesConfig";

function App() {
  return (
    <Provider store={store}>
        <RoutesConfig/>
    </Provider>
  );
}

export default App;
