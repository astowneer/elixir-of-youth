"use server";

import { JokeSchema } from "@/app/(root)/_components/joke-form";
import { sql } from "../../../modules/database/database";

type CurrentState = {
  success: boolean;
  error: boolean;
};

export const createJoke = async (
  currentState: CurrentState,
  data: JokeSchema
) => {
  try {
    await sql`
      INSERT INTO cards (text)
      VALUES (${data.text})
    `;

    return {
      success: true,
      error: false,
    };
  } catch (err: unknown) {
    console.error(err);
    return {
      success: false,
      error: true,
    };
  }
};

export const updateJoke = async (
  currentState: CurrentState,
  data: JokeSchema
) => {
  try {
    const cardId = parseInt(data.id!);

    await sql`
      UPDATE cards
      SET text = ${data.text}
      WHERE id = ${cardId}
    `;

    return {
      success: true,
      error: false,
    };
  } catch (err: unknown) {
    console.error(err);
    return {
      success: false,
      error: true,
    };
  }
};

export const deleteJoke = async (
  currentState: CurrentState,
  data: FormData
) => {
  try {
    const id = parseInt(data.get("id") as string);
    await sql`DELETE FROM cards WHERE id = ${id}`;

    return {
      success: true,
      error: false,
    };
  } catch (err: unknown) {
    console.error(err);
    return {
      success: false,
      error: true,
    };
  }
};
