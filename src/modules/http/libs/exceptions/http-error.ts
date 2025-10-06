import { ValueOf } from "@/utils/value-of";
import { HTTPCode } from "../types/http-code";
import { ServerErrorType } from "@/shared/enums/server-error";

type Constructor = {
  cause?: unknown;
  message: string;
  status: ValueOf<typeof HTTPCode>;
  errorType: ValueOf<typeof ServerErrorType>;
};

class HTTPError extends Error {
  public status: ValueOf<typeof HTTPCode>;
  public errorType: ValueOf<typeof ServerErrorType>;

  constructor({ cause, message, status, errorType }: Constructor) {
    super(message, { cause });

    this.status = status;
    this.errorType = errorType;
  }
}

export { HTTPError };
