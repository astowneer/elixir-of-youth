type HTTPMethod = "DELETE" | "GET" | "PATCH" | "POST" | "PUT";

const HTTPMethod = {
  DELETE: "DELETE",
  GET: "GET",
  PATCH: "PATCH",
  POST: "POST",
  PUT: "PUT",
} as const;

export { type HTTPMethod, HTTPMethod as HTTPRequestMethod };
