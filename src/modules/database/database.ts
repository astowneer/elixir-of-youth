import postgres from "postgres";

const globalForSql = globalThis as unknown as {
  sql: ReturnType<typeof postgres> | undefined;
};

export const sql =
  globalForSql.sql ??
  postgres(process.env.DATABASE_URL!, {
    ssl: false,
    max: 10,
  });
