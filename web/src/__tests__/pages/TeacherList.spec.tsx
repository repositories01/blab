import React from "react";
import TeacherList from "../../pages/TeacherList";
import TeacherItem from "../../components/TeacherItem";
import { render, fireEvent, wait, screen } from "@testing-library/react";
import { debug } from "console";

import { act } from 'react-dom/test-utils';

const whenStable = async () =>
  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
  });
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

  it("should not be able to see the teacher item component", () => {

const teacherMock = {
  id: 2,
  bio: "mock",
  cost: "12,99",
  name: "name",
  subject: "sub",
  whatsapp: "121212",
};
    
    const props = { loadApi: jest.fn() };
 
    const { container } = render(<TeacherList />)

    const wrapper = shallow(<TeacherList {...props}></TeacherList>);




    // const teacherItem = screen.getByTestId("teacher-item")
    //  render( <TeacherItem teacher={teacherMock} />);

    //  console.log(teacherItem)

    // expect(te).toHaveClass('teacher-item');
  });

});
