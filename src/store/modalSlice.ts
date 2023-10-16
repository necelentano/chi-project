import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModalOpen: (state, action) => {
      state.open = action.payload;
    },
  },
});

export const { setModalOpen } = modalSlice.actions;

export default modalSlice.reducer;
