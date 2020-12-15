import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import TeacherList from "../../pages/TeacherList";
import { render, fireEvent, wait } from "@testing-library/react";

const mocked = jest.fn();

// jest.mock("react-router-dom", () => {
//   return {
//     useHistory: () => ({
//       push: mocked,
//     }),
//     Link: ({ children }: { children: React.ReactNode }) => children,
//   };
// });

jest.mock("../../hooks/auth.tsx", () => {
  return {
    useAuth: () => ({
      user: { id: "2", name: "nome", email: "email@email.com" },
    }),
  };
});

describe("Landing page", () => {
  it(" should be able return the teacher list page", () => {
    const teacherForm = render(
      <Router>
        <TeacherList />
      </Router>
    );

    expect(teacherForm).toBeTruthy();
  });

  it("should be able be redirect to teacher form page", () => {
    jest.mock("react-router-dom", () => {
        return {
          useHistory: () => ({
            push: mocked,
          }),
          Link: ({ children }: { children: React.ReactNode }) => children,
        };
      });
    const { getByText } = render(
      <Router>
        <TeacherList />
      </Router>
    );
    
    const buttonElement = getByText("Give classes");
  });
});
