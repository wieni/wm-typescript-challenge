const url = "http://localhost:3000/api/cocktails";

export async function fetchCocktails() {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function fetchPopularCocktails() {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  return data.slice(0, 5);
}
