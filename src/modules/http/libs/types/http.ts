import { type HTTPOptions } from "./http-options";

type HTTP = {
  load(path: string, options: HTTPOptions): Promise<Response>;
};

export { type HTTP };
