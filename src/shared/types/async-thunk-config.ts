import { AppDispatch, AppState, ExtraArguments } from "@/modules/store/store";

type AsyncThunkConfig = {
  dispatch: AppDispatch;
  state: AppState;
  extra: ExtraArguments;
};

export { type AsyncThunkConfig };
