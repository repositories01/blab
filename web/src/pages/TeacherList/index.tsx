import React, { useState,useRef,  FormEvent, useCallback, useEffect } from "react";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";

import PageHeader from "../../components/PageHeader";
import TeacherItem, { Teacher } from "../../components/TeacherItem";

import Input from "../../components/Input";
import Select from "../../components/Select";

import api from "../../services/api";

import "./styles.css";
import { resolve } from "dns";

function TeacherList() {
  const formRef = useRef<FormHandles>(null);

  const [teachers, setTeachers] = useState([]);

  const [subject, setSubject] = useState("");
  const [week_day, setWeekDay] = useState("");
  const [time, setTime] = useState("");

   // let formatter = new Intl.NumberFormat("en-US", {
      //   style: "currency",
      //   currency: "USD",
      // });
      // const number = parseFloat(cost);
      // let price = formatter.format(number);
      // console.log(price)


  async function searchTeachers(e: FormEvent) {
    e.preventDefault();

    const response = await api.get("classes", {
      params: {
        subject,
        week_day,
        time,
      },
    });

    setTeachers(response.data);
  }

  const loadApi = useCallback(async () => {
    const response = await api.get("classes");
    setTeachers(response.data);

  }, []);

  useEffect(() => {
    loadApi();
  }, []);

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader linkName="Give classes" to="/give-classes"title="These are the available teachers.">
        <Form ref={formRef} id="search-teachers" onSubmit={searchTeachers}>
          <Select
            name="week_day"
            label="Week Day"
            value={week_day}
            onChange={(e) => {
              setWeekDay(e.target.value);
            }}
            options={[
              { value: "0", label: "Sunday" },
              { value: "1", label: "Monday" },
              { value: "2", label: "Tuesday" },
              { value: "3", label: "Wednesday" },
              { value: "4", label: "Thursday" },
              { value: "5", label: "Friday" },
              { value: "6", label: "Saturday" },
            ]}
          />

          <Input
            type="time"
            name="time"
            label="Time"
            value={time}
            onChange={(e) => {
              setTime(e.target.value);
            }}
          />

          <button type="submit">Search</button>
        </Form>
      </PageHeader>

      <main>
        {teachers.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher} />;
        })}
      </main>
    </div>
  );
}

export default TeacherList;
