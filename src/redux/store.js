import { configureStore } from "@reduxjs/toolkit";
import info from "./reducers/info";
import thunk from 'redux-thunk';


export default configureStore({
    reducer: {
        tooltipInfo: info,
    },
    middleware: [thunk],

});
