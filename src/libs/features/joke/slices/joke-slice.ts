import { DataStatus } from "@/shared/enums/data-status";
import { ValueOf } from "@/utils/value-of";
import { createSlice } from "@reduxjs/toolkit";

import { loadJoke } from "./actions";

type State = {
  dataStatus: ValueOf<typeof DataStatus>;
  joke: any;
};

const initialState: State = {
  dataStatus: DataStatus.IDLE,
  joke: null,
};

const { name, reducer, actions } = createSlice({
  extraReducers(builder) {
    builder.addCase(loadJoke.pending, (state) => {
      state.dataStatus = DataStatus.PENDING;
    });
    builder.addCase(loadJoke.fulfilled, (state, action) => {
      state.dataStatus = DataStatus.FULFILLED;
      state.joke = action.payload;
    });
    builder.addCase(loadJoke.rejected, (state) => {
      state.dataStatus = DataStatus.REJECTED;
      state.joke = null;
    });
  },
  name: "joke",
  initialState,
  reducers: {},
});

export { name, actions, reducer };
