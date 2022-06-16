import { rest } from "msw";

import cocktails from "../data/cocktails.json";

export const popularRecipes = rest.get(
  "/api/recipes/popular",
  (req, res, { json }) => {
    const params = {
      limit: (req.url.searchParams.get("limit") as string) || "5",
    };

    return res(
      json({
        cocktails,
      })
    );
  }
);
