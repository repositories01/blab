import React, { Children } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "../../pages/Login";
import { render, fireEvent, wait } from "@testing-library/react";

const mockedHistoryPush = jest.fn();
jest.mock("react-router-dom", () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

jest.mock("../../hooks/auth.tsx", () => {
  return {
    useAuth: () => ({
      signIn: jest.fn(),
    }),
  };
});

describe("Test login", () => {
  beforeEach(() =>  mockedHistoryPush.mockClear());
  it(" should  be able to login ", async () => {
    const { getByPlaceholderText, getByText } = render(<Login />);

    const emailField = getByPlaceholderText("Email");
    const passwordField = getByPlaceholderText("Senha");
    const buttonElement = getByText("Entrar");

    fireEvent.change(emailField, { target: { value: "nome@email.com" } });
    fireEvent.change(passwordField, { target: { value: "1212121" } });
    fireEvent.click(buttonElement);

    await wait(() => {
      expect(mockedHistoryPush).toHaveBeenCalledWith("/give-classes");
    });
  });

  it(" should not be able to login with invalid credentials ", async () => {
    const { getByPlaceholderText, getByText } = render(<Login />);

    const emailField = getByPlaceholderText("Email");
    const passwordField = getByPlaceholderText("Senha");
    const buttonElement = getByText("Entrar");

    fireEvent.change(emailField, { target: { value: "not-email-valid" } });
    fireEvent.change(passwordField, { target: { value: "1212121" } });

    fireEvent.click(buttonElement);

    await wait(() => {
      expect(mockedHistoryPush).not.toHaveBeenCalledWith("/give-classes");
    });
  });
});
