import { root } from "./config";
import App from "./app";

export const renderApplication = () => {
  root.render(<App />);
};

if (process.env.REACT_APP_PUBLIC_API_MOCKING === "enabled") {
  import("./mocks").then(() => {
    renderApplication();
  });
} else {
  renderApplication();
}
