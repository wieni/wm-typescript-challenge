import cocktails from "./cocktails.json";

export async function GET() {
  return new Response(JSON.stringify(cocktails));
}
