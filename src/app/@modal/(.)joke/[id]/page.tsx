import Modal from "@/components/ui/modal";
import { fetchCardById } from "@/modules/database/data";

async function JokeDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const card = await fetchCardById(id);

  return <Modal table="joke" type="update" data={card} />;
}

export default JokeDetails;
