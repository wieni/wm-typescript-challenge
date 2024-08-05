import { Card } from "./components/card";
import { Cocktail } from "./types/types";
import { fetchPopularCocktails } from "./utils/fetch";

export default async function Home() {
  const cocktails: Cocktail[] = await fetchPopularCocktails();

  return (
    <main>
      <h1>Popular cocktails this week:</h1>
      <ul>
        {cocktails.map((cocktail) => (
          <Card key={cocktail.name} cocktail={cocktail} />
        ))}
      </ul>
    </main>
  );
}
