import React, { Children } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "../../pages/Login";
import { render } from "@testing-library/react";


jest.mock('react-router-dom', () => {
    return{
        useHistory: jest.fn(),
        Link: ({children}:{children: React.ReactNode}) => children,
    }
})
describe("Landing page", () => {
  it(" should be able to login", () => {
    const { debug } = render(<Login />);

    debug();
  });
});
