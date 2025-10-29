import { HTTPOptions } from "@/modules/http/libs/types/http-options";
import { ContentType } from "./content-type";
import { ValueOf } from "@/utils/value-of";

type HTTPApiOptions = Omit<HTTPOptions, "headers" | "payload"> & {
  contentType?: ValueOf<typeof ContentType>;
  payload?: HTTPOptions["payload"];
};

export { type HTTPApiOptions };
