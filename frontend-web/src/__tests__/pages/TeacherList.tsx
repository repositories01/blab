import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import TeacherList from "../../pages/TeacherList";
import TeacherItem from '../../components/TeacherItem'
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
      user: { id: "2", name: "nome", email: "email@email.com" },
    }),
  };
});

describe("Testing the teacher list", () => {
  it(" should be able return the teacher list page", () => {
    const teacherForm = render(
      <Router>
        <TeacherList />
      </Router>
    );

    expect(teacherForm).toBeTruthy();
  });


  it('should be to see the teacher item component', () => {

    
  })
});
