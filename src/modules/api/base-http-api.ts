import { ValueOf } from "@/utils/value-of";
import { HTTPApi } from "./libs/types/http-api";
import { HTTPApiOptions } from "./libs/types/http-api-options";
import { ContentType } from "./libs/types/content-type";
import { HTTPHeader } from "../http/libs/enums/http-header";
import { HTTP } from "../http/libs/types/http";
import { HTTPApiResponse } from "./libs/types/http-api-response";
import { HTTPError } from "../http/libs/exceptions/http-error";
import { ServerErrorType } from "@/shared/enums/server-error";
import { ServerErrorResponse } from "@/shared/enums/server-error-response";
import { HTTPCode } from "../http/libs/types/http-code";
import { configureString } from "@/helpers/configure-string";

type Constructor = {
  baseUrl: string;
  http: HTTP;
  path: string;
};

class BaseHTTPApi implements HTTPApi {
  private baseUrl: string;

  private http: HTTP;

  private path: string;

  constructor({ baseUrl, http, path }: Constructor) {
    this.http = http;
    this.baseUrl = baseUrl;
    this.path = path;
  }

  protected getEndpointWithQuery(
    endpoint: string,
    queryOptions: Record<string, string | number | undefined>
  ): string {
    const query = Object.keys(queryOptions)
      .filter((key) => queryOptions[key] !== undefined)
      .map((key) => `${key}=${String(queryOptions[key])}`)
      .join("&");

    return query ? `${endpoint}?${query}` : endpoint;
  }

  protected getFullEndpoint(
    ...parameters: [...string[], Record<string, number | string>]
  ) {
    const copiedParameters = [...parameters];

    const options = copiedParameters.pop() as Record<string, number | string>;

    return configureString(
      this.baseUrl,
      this.path,
      ...(copiedParameters as string[]),
      options
    );
  }

  public async load(
    path: string,
    options: HTTPApiOptions
  ): Promise<HTTPApiResponse> {
    const { contentType, method, payload = null } = options;

    const headers = await this.getHeaders(contentType);

    const response = await this.http.load(path, {
      method,
      headers,
      payload,
    });

    return (await this.checkResponse(response)) as HTTPApiResponse;
  }

  private async getHeaders(
    contentType: undefined | ValueOf<typeof ContentType>
  ) {
    const headers = new Headers();

    if (contentType) {
      headers.append(HTTPHeader.CONTENT_TYPE, contentType);
    }

    return headers;
  }

  private async checkResponse(response: Response): Promise<Response> {
    if (!response.ok) {
      await this.handleError(response);
    }

    return response;
  }

  private async handleError(response: Response): Promise<never> {
    let parsedException: ServerErrorResponse;

    try {
      parsedException = (await response.json()) as ServerErrorResponse;
    } catch {
      parsedException = {
        errorType: ServerErrorType.COMMON,
        message: response.statusText,
      };
    }

    const isCustomException = Boolean(parsedException.errorType);

    throw new HTTPError({
      errorType: isCustomException
        ? parsedException.errorType
        : ServerErrorType.COMMON,
      message: parsedException.message,
      status: response.status as ValueOf<typeof HTTPCode>,
    });
  }
}

export { BaseHTTPApi };
