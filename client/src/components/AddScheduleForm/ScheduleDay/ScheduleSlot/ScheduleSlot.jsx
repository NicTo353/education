import { Select } from "antd";
import React from "react";

const ScheduleSlot = (props) => {
  const {
    lessonNumber,
    subjectId,
    teacherId,
    weekDayNumber,
    time,
    teachers,
    subjects,
    changeField,
  } = props;

  const teacherSelectHandler = (value) => {
    changeField({ name: "teacherId", lessonNumber, weekDayNumber, value });
  };

  const subjectSelectHandler = (value) => {
    changeField({ name: "subjectId", lessonNumber, weekDayNumber, value });
  };

  if(lessonNumber === 1){
  console.log(props);

  }

  const teachersOptions = teachers.map((t) => {
    return (
      <Select.Option key={t.id} value={t.id}>
        {t.surname} {t.name} {t.parentName}
      </Select.Option>
    );
  });

  const subjectsOptions = subjects.map((s) => {
    return (
      <Select.Option key={s.id} value={s.id}>
        {s.name}
      </Select.Option>
    );
  });
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "10px",
      }}
    >
      <div style={{ flex: "0 0 auto", minWidth: "20px" }}>{lessonNumber})</div>

      <div style={{ flex: "0 0 auto", minWidth: "50px" }}>{time}</div>

      <div style={{ flex: "1 0 33%", padding: "0 10px" }}>
        <Select
          value={teacherId}
          onChange={teacherSelectHandler}
          placeholder="Выберите учителя"
          style={{ width: "100%" }}
        >
          {teachersOptions}
        </Select>
      </div>

      <div style={{ flex: "1 0 33%", padding: "0 10px" }}>
        <Select
          value={subjectId}
          onChange={subjectSelectHandler}
          placeholder="Выберите предмет"
          style={{ width: "100%" }}
        >
          {subjectsOptions}
        </Select>
      </div>
    </div>
  );
};

export default ScheduleSlot;
