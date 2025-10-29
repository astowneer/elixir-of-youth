"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { createJoke, updateJoke } from "@/app/(root)/_actions/actions";
import { useActionState, useEffect, useTransition } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { loadJoke } from "@/libs/features/joke/slices/actions";
import { DataStatus } from "@/shared/enums/data-status";

const schema = z.object({
  id: z.string().optional(),
  text: z
    .string()
    .min(5, { message: "The text should consist of min 5 characteres" }),
});

export type JokeSchema = z.infer<typeof schema>;

function JokeForm({
  data,
  type,
  setOpen,
}: {
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  data?: any;
  type: "create" | "update";
}) {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<JokeSchema>({
    resolver: zodResolver(schema),
  });

  const [state, formActions] = useActionState(
    type === "create" ? createJoke : updateJoke,
    { success: false, error: false }
  );

  const [isPending, startTransition] = useTransition();

  const onSubmit = handleSubmit((data) => {
    startTransition(() => {
      formActions({ ...data });
    });
  });

  const router = useRouter();

  useEffect(() => {
    if (state.success) {
      setOpen?.(false);
      reset();
      router.refresh();
    }
  }, [state, router, type, setOpen]);

  const dispatch = useAppDispatch();

  const handleGenerate = async () => {
    await dispatch(loadJoke());
  };

  const joke = useAppSelector((state) => state.joke.joke);
  const status = useAppSelector((state) => state.joke.dataStatus);

  useEffect(() => {
    if (status === DataStatus.FULFILLED) {
      setValue("text", joke.joke);
    }
  }, [status]);

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4 p-4 flex-1">
      {data && <input defaultValue={data?.id} {...register("id")} hidden />}
      <textarea
        className="w-full h-32 p-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-amber-500"
        {...register("text")}
        defaultValue={data?.text}
      />
      {errors.text && <div className="text-red-500">{errors.text.message}</div>}
      <div className="flex justify-end gap-2 mt-4">
        <Button
          type="button"
          variant="secondary"
          onClick={() => handleGenerate()}
        >
          🔮 {type === "create" ? "Generate" : "Regenerate"}
        </Button>
        <Button type="submit" disabled={isPending} variant="secondary">
          💾 Save
        </Button>
      </div>
    </form>
  );
}

export { JokeForm };
