"use client";

import { useAppSelector, useAppDispatch } from "@/hooks/hooks";
import {
  decrement,
  incrementByAmount,
} from "@/libs/features/counter/counterSlice";
import { loadJoke } from "@/libs/features/joke/slices/actions";

export default function Counter() {
  const joke = useAppSelector((state) => state.joke.joke);
  const dispatch = useAppDispatch();

  return (
    <div className="bg-red-500">
      <h1>asd: {joke?.joke}</h1>
      <button onClick={() => dispatch(loadJoke())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>
        Increment by 5
      </button>
    </div>
  );
}
