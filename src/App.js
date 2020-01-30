import React from 'react';
import {Provider} from "react-redux";
import store from "./store/store";
import RoutesConfig from "./config/RoutesConfig";
import Overlays from "./overlay/Overlays";

function App() {
  return (
    <Provider store={store}>
        <RoutesConfig/>
        <Overlays/>
    </Provider>
  );
}

export default App;
