import React, { Children } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "../../pages/Login";
import { render } from "@testing-library/react";

jest.mock("react-router-dom", () => {
  return {
    useHistory: jest.fn(),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});
describe("Landing page", () => {
  it(" should be able to login", () => {
    const { getByPlaceholderText } = render(<Login />);

    const emailField = getByPlaceholderText("Email");
    const passwordField = getByPlaceholderText("Senha");
  });
});
