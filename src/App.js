import React from 'react';
import {Provider} from "react-redux";
import store from "./store/store";
import RoutesConfig from "./config/RoutesConfig";
import NovoContato from "./overlay/NovoContato";

function App() {
  return (
    <Provider store={store}>
        <RoutesConfig/>
        <NovoContato/>
    </Provider>
  );
}

export default App;
