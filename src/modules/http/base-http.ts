import { HTTP } from "./libs/types/http";
import { HTTPOptions } from "./libs/types/http-options";

class BaseHTTP implements HTTP {
  public load(path: string, options: HTTPOptions): Promise<Response> {
    const { payload, headers, method } = options;

    return fetch(path, {
      body: payload,
      headers,
      method,
    });
  }
}

const http = new BaseHTTP();

export { BaseHTTP, http };
