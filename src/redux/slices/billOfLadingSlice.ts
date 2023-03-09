import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBillOfLadingState } from "../../types/types";
import storage from "redux-persist/lib/storage";

const initialState: IBillOfLadingState = {
  billOfLadingStory: [],
};

const billOfLadingSlice = createSlice({
  name: "billOfLading",
  initialState,
  reducers: {
    setTBillOfLadingStory(state, { payload }: PayloadAction<string>) {
      if (state.billOfLadingStory.includes(payload)) return;
      state.billOfLadingStory = [...state.billOfLadingStory, payload];
    },
    clearTBillOfLadingStory(state) {
      storage.removeItem("persist:billOfLading");
      state.billOfLadingStory = [];
    },
  },
});

export const { setTBillOfLadingStory, clearTBillOfLadingStory } =
  billOfLadingSlice.actions;

export default billOfLadingSlice.reducer;
