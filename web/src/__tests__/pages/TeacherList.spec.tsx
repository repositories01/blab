import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import TeacherList from "../../pages/TeacherList";
import TeacherItem from "../../components/TeacherItem";
import { render, fireEvent, wait, screen } from "@testing-library/react";

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
    const teacherList = render(<TeacherList />);

    expect(teacherList).toBeTruthy();
  });

  it("should be to see the teacher item component", () => {

    const {container} = render(<TeacherList />)
    const teacherMock = {
      id: 2,
      bio: "mock",
      cost: "12,99",
      name: "name",
      subject: "sub",
      whatsapp: "121212",
    };

    //  render( <TeacherItem teacher={teacherMock} />);
   
    // expect(te).toHaveClass('teacher-item');
    console.log(container)
  });

});
