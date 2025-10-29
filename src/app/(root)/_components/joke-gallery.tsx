"use client";

import Link from "next/link";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { deleteJoke } from "@/app/(root)/_actions/actions";
import { JokeDto } from "@/shared/types/modules/joke/joke-dto";
import { useActionState, useEffect } from "react";

function JokeGallery({ jokes }: { jokes: JokeDto[] }) {
  const router = useRouter();

  const [state, formActions] = useActionState(deleteJoke, {
    success: false,
    error: false,
  });

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
  };

  useEffect(() => {
    if (state.success) {
      toast.success("Deleted successfully");
      router.refresh();
    } else if (state.error) {
      toast.error("Delete failed");
    }
  }, [state, router]);

  return (
    <div className="w-full max-w-4xl space-y-4">
      <h2 className="font-bold text-2xl text-amber-700">Your previous jokes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 w-full auto-rows-fr">
        {jokes.map((joke) => (
          <Link
            key={joke.id}
            href={`/joke/${joke.id}`}
            className="relative border rounded-lg overflow-hidden shadow-lg p-4 bg-white w-full group"
            replace
          >
            <p className="text-gray-800">{joke.text}</p>
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <form action={formActions}>
                <input type="text" name="id" defaultValue={joke.id} hidden />
                <Button
                  type="submit"
                  variant="destructive"
                  size="sm"
                  onClick={handleDelete}
                >
                  Delete
                </Button>
              </form>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default JokeGallery;
