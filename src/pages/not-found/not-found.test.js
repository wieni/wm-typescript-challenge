import { render, screen } from "@testing-library/react";

import NotFound from "./index";

it("renders error message", () => {
  render(<NotFound />);
  expect(screen.getByText(/Page not found/)).toBeInTheDocument();
});

it("renders contains back to home likn", () => {
  render(<NotFound />);
  expect(screen.getByText("Go to homepage")).toBeInTheDocument();
});
