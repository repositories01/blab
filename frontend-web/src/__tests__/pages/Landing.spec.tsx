import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Landing from "../../pages/Landing";
import { render } from "@testing-library/react";

describe("Landing page", () => {
  it(" should be able return the landing page", () => {
    const { debug } = render(
      <Router>
        <Landing />
      </Router>
    );

    debug()
  });
});
