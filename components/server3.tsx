import { delay } from "@/utils/delay";

const Server3 = async () => {
  if (process.env.NODE_ENV === "production" && !process.env.RUNTIME) {
    return <div>Build-time request disabled</div>;
  }

  await delay(3000);
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/poke3`);
  const pokemon = await response.json();
  return <div>{pokemon.name}</div>;
};

export default Server3;
