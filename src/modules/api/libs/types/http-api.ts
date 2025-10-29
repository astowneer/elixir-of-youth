import { HTTPApiOptions } from "./http-api-options";
import { HTTPApiResponse } from "./http-api-response";

type HTTPApi = {
  load(path: string, options: HTTPApiOptions): Promise<HTTPApiResponse>;
};

export { type HTTPApi };
