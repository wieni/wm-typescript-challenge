import { FC } from "react";
import { Cocktail } from "../../types/types";

interface Props {
  cocktail: Cocktail;
}

export const Card: FC<Props> = ({
  cocktail: { name, category, ingredients, preparation },
}) => {
  return (
    <div className="mb-4 flex border border-gray-200 bg-white/50 p-4">
      <div className="block space-y-2">
        <h2 className="text-2xl font-bold">{name}</h2>
        <span className="mr-1 inline-block rounded bg-pink-200 px-2 py-1 text-xs font-semibold uppercase text-pink-600 last:mr-0">
          {category}
        </span>

        <h3 className="text-lg font-bold">Ingredients</h3>
        <ul className="list-inside list-disc px-1 text-sm">
          {ingredients.map((ingredient) => (
            <li>
              {"special" in ingredient ? (
                <span className="font-semibold">{ingredient.special}</span>
              ) : (
                <span className="font-semibold">
                  {ingredient.amount} {ingredient.unit} {ingredient.ingredient}
                </span>
              )}
            </li>
          ))}
        </ul>

        <h3 className="text-lg font-bold">Preparation</h3>
        <div className="text-sm">{preparation}</div>
      </div>
    </div>
  );
};
