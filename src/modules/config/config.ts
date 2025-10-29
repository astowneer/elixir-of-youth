import { Config } from "./libs/types/config";
import { EnvironmentSchema } from "./libs/types/environment-schema";

class BaseConfig implements Config<EnvironmentSchema> {
  public ENV: EnvironmentSchema;

  private get envSchema(): EnvironmentSchema {
    return {
      API: {
        ORIGIN_URL: process.env.NEXT_PUBLIC_ORIGIN_URL as string,
      },
    };
  }

  public constructor() {
    this.ENV = this.envSchema;
  }
}

const config = new BaseConfig();

export { config };
