import { ServerErrorType } from "./server-error";

type ServerCommonErrorResponse = {
  errorType: typeof ServerErrorType.COMMON;
  message: string;
};

type ServerErrorResponse = ServerCommonErrorResponse;

export { type ServerErrorResponse };
