import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import { Router } from "./router";
import Fallback from "./fallback";

import "./index.css";

const App = () => (
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<Fallback />}>
        <Router />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);

export default App;
