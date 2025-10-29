import { configureStore } from "@reduxjs/toolkit";
import { jokeApi, reducer as jokeReducer } from "@/libs/features/joke/joke";
import { listenerMiddleware } from "./listener-middleware/listener-middleware";

export type RootState = {
  joke: ReturnType<typeof jokeReducer>;
};

export type ExtraArguments = {
  jokeApi: typeof jokeApi;
};

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const makeStore = () =>
  configureStore({
    reducer: {
      joke: jokeReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: { jokeApi },
        },
      }).prepend(listenerMiddleware.middleware),
  });
