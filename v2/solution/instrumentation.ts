export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    const { server } = await import("./app/mocks/node");
    server.listen();
  }
}
