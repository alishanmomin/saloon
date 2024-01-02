import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    infoValue: localStorage.getItem("toggleState") ? JSON.parse(localStorage.getItem("toggleState")) : false,
    sidebarState: false,
    showSidebar: false,
    open: true
};

const info = createSlice({
    name: "info",
    initialState,
    reducers: {
        toggleState: (state, { payload }) => {
            state.infoValue = payload.isChecked;
            localStorage.setItem("toggleState", JSON.stringify(state.infoValue))
        },
        toggleSidebar: (state, { payload }) => {
            state.sidebarState = payload.event;
        },
        setShowSidebar: (state, { payload }) => {
            state.showSidebar = payload?.active;
        },
        setOpen: (state, { payload }) => {
            state.open = payload;
        },
    },
});

export const {
    toggleState,
    toggleSidebar,
    setShowSidebar,
    setOpen
} = info.actions;

export default info.reducer;