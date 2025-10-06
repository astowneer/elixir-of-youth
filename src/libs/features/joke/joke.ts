import { config } from "@/modules/config/config";
import { JokeApi } from "./joke-api";
import { http } from "@/modules/http/base-http";

const jokeApi = new JokeApi({
  baseUrl: config.ENV.API.ORIGIN_URL,
  http,
});

export { jokeApi };
export { actions, reducer } from "./slices/joke-slice";
