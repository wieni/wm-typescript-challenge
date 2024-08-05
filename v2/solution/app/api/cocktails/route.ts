import cocktails from "./cocktails.json";

export async function GET(request: Request) {
  return new Response(JSON.stringify(cocktails));
}

export async function POST(request: Request) {
  const data = await request.json();
  cocktails.push(data);
  return new Response(JSON.stringify(cocktails));
}
