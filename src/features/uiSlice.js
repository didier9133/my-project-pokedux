import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  valueSearch: "",
  currentPage: 1,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setLoading: (state, actions) => {
      state.loading = actions.payload;
    },
    setValueSearch: (state, actions) => {
      state.valueSearch = actions.payload;
    },
    setCurrentPage: (state, actions) => {
      state.currentPage = actions.payload;
    },
  },
});

export const { setLoading, setValueSearch, setCurrentPage } = uiSlice.actions;
export default uiSlice.reducer;
