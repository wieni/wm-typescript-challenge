import { Card } from "../components/card";
import { Cocktail } from "../types/types";
import { fetchCocktails } from "../utils/fetch";

export default async function RecipePage() {
  const cocktails: Cocktail[] = await fetchCocktails();

  return (
    <main>
      <h1>All cocktails</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {cocktails.map((cocktail) => (
          <Card key={cocktail.name} cocktail={cocktail} />
        ))}
      </div>
    </main>
  );
}
