import { type JokeDto } from "@/shared/types/modules/joke/joke-dto";
import { sql } from "./database";

export async function fetchCards() {
  try {
    const data = await sql<JokeDto[]>`SELECT * FROM cards ORDER BY id ASC`;

    return data;
  } catch (error) {
    throw new Error("Failed to fetch fetchCards data.");
  }
}

export async function fetchCardById(id: string) {
  try {
    const data = await sql<JokeDto[]>`SELECT * FROM cards WHERE id = ${parseInt(
      id
    )}`;

    return data[0];
  } catch (error) {
    throw new Error("Failed to fetch fetchCardById data.");
  }
}
