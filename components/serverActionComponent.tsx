import { getPoke } from "@/server/poke";
import { revalidatePath } from "next/cache";

const ServerActionComponent = () => {
  const handleClickServerAction = async () => {
    "use server";
    const data = await getPoke();
    revalidatePath("/serverAction");
  };

  return (
    <form action={handleClickServerAction}>
      <button type="submit">서버액션 클릭</button>
    </form>
  );
};

export default ServerActionComponent;
