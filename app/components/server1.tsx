import React from "react";

const Server1 = async () => {
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  await delay(1000);

  const random = Math.floor(Math.random() * 3) + 1;

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${random}`, {
    next: { revalidate: 5 },
  });
  const pokemon = await response.json();
  return <div>{pokemon.name}</div>;
};

export default Server1;
