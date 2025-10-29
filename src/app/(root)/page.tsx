import JokeGallery from "./_components/joke-gallery";
import { JokeCard } from "./_components/joke-card";
import { JokeDto } from "@/shared/types/modules/joke/joke-dto";
import { fetchCards } from "@/modules/database/data";

export default async function Home() {
  const jokes: JokeDto[] = await fetchCards();

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-300 to-amber-400 flex flex-col items-center justify-center p-8 space-y-8">
      <h1 className="text-3xl font-bold mb-6 text-amber-700">
        Joke generator ))
      </h1>
      <JokeCard />
      <JokeGallery jokes={jokes} />
    </div>
  );
}
