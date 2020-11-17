import React, { Children } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "../../pages/Login";
import { render, fireEvent } from "@testing-library/react";

const mockedHistoryPush = jest.fn();
jest.mock("react-router-dom", () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});
describe("Landing page", () => {
  it(" should be able to login", () => {
    const { getByPlaceholderText, getByText } = render(<Login />);

    const emailField = getByPlaceholderText("Email");
    const passwordField = getByPlaceholderText("Senha");
    const buttonElement = getByText("Entrar");

    fireEvent.change(emailField, { target: { value: "nome@email.com" } });
    fireEvent.change(passwordField, { target: { value: "1212121" } });
    fireEvent.click(buttonElement);
    expect(mockedHistoryPush).toHaveBeenCalledWith("/give-classes");
  });
});
