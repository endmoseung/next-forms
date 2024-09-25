"use server";

const getPoke = async () => {
  const data = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  return data;
};

export { getPoke };
