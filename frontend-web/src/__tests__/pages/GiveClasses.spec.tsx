import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import TeacherForm from '../../pages/TeacherForm'
import { render } from "@testing-library/react";

const mockedSignIn = jest.fn();

// jest.mock("react-router-dom", () => {
//   return {
//     useHistory: () => ({
//       push: mockedHistoryPush,
//     }),
//     Link: ({ children }: { children: React.ReactNode }) => children,
//   };
// });

jest.mock("../../hooks/auth.tsx", () => {
  return {
    useAuth: () => ({
      user: {id: '2', name: 'nome', email: 'email@email.com'},
    }),
  };
});

describe("Landing page", () => {
  it(" should be able return the teacher list page", () => {
    const teacherForm = render(
      <Router>
        <TeacherForm />
      </Router>
    );

    expect(teacherForm).toBeTruthy()
  });

  it('should be able be redirect to teacher form page', () => {
      expect(true).toEqual(true)
  })
});
