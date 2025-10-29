import { type HTTPMethod } from "./http-method";

type HTTPOptions = {
  headers: Headers;
  method: HTTPMethod;
  payload: null | BodyInit;
};

export { type HTTPOptions };
