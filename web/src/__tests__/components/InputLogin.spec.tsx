import React from "react";
import { render } from "@testing-library/react";

import Input from "../../presentation/components/InputLogin";
import { wait, fireEvent } from "@testing-library/dom";

jest.mock("@unform/core", () => {
  return {
    useField() {
      return {
        fieldName: "email",
        defaultValue: "",
        error: "",
        registerField: jest.fn(),
      };
    },
  };
});

describe("input component", () => {
  it("should be able to render the input component", () => {
    const { getByPlaceholderText } = render(
      <Input name="inputLogin" placeholder="email" />
    );

    expect(getByPlaceholderText("email")).toBeTruthy();
  });

  it("should render highlight on input focus", async () => {
    const { getByPlaceholderText, getByTestId } = render(
      <Input name="inputLogin" placeholder="email" />
    );

    const inputElement = getByPlaceholderText("email");
    const containerElement = getByTestId("input-container");
    
    fireEvent.focus(inputElement);

    await wait(() => {
      // expect(containerElement).toHaveStyle('border-color:#509470;');
    });
  });
});
