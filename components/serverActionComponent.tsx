import { getPoke } from "@/server/poke";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const ServerActionComponent = () => {
  const handleClickServerAction = async () => {
    "use server";
    const data = await getPoke();
    revalidatePath("/serverAction");
    redirect("/");
  };

  return (
    <form action={handleClickServerAction}>
      <button type="submit">서버액션 클릭</button>
    </form>
  );
};

export default ServerActionComponent;
