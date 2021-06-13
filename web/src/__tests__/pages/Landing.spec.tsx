import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Landing from "../../presentation/pages/Landing";
import { render } from "@testing-library/react";

describe("Landing page", () => {
  it(" should be able return the landing page", () => {
    const landingPage = render(
      <Router>
        <Landing />
      </Router>
    );

    expect(landingPage).toBeTruthy()
  });
});
