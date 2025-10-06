import { BaseHTTPApi } from "@/modules/api/base-http-api";
import { HTTP } from "@/modules/http/libs/types/http";
import { HTTPRequestMethod } from "@/modules/http/libs/types/http-method";

type Constructor = {
  baseUrl: string;
  http: HTTP;
};

const APIPath = {
  JOKES: "/jokes",
} as const;

class JokeApi extends BaseHTTPApi {
  public constructor({ baseUrl, http }: Constructor) {
    super({ baseUrl, http, path: APIPath.JOKES });
  }

  public async loadJoke(): Promise<any> {
    return await this.load(
      "https://v2.jokeapi.dev/joke/Programming?type=single",
      {
        method: HTTPRequestMethod.GET,
      }
    );
  }
}

export { JokeApi };
