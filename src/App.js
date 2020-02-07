import React from 'react';
import {Provider} from "react-redux";
import store from "./store/store";
import RoutesConfig from "./config/RoutesConfig";
import Overlays from "./overlay/Overlays";
import {toast, ToastContainer} from "react-toastify";

function App() {
  return (
    <Provider store={store}>
        <RoutesConfig/>
        <Overlays/>
        <ToastContainer autoClose={4000} position={toast.POSITION.TOP_RIGHT} bodyClassName={'config-font-toast'} />
    </Provider>
  );
}

export default App;
