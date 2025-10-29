import { createAsyncThunk } from "@reduxjs/toolkit";

import { AsyncThunkConfig } from "@/shared/types/async-thunk-config";

const loadJoke = createAsyncThunk<void, void, AsyncThunkConfig>(
  `joke/`,
  async (_, { extra, rejectWithValue }) => {
    const { jokeApi } = extra;

    try {
      const response = await jokeApi.loadJoke();
      const data = await response.json();

      return data;
    } catch {
      return rejectWithValue("Some problems with load joke");
    }
  }
);

export { loadJoke };
