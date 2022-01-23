import { Select } from "antd";
import Item from "antd/lib/form/FormItem";
import React from "react";

const ScheduleSlotForm = (props) => {
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

  const freeTeachers = teachers.filter((t) => {
    const slot = t.slots.find((s) => s.weekDayNumber === weekDayNumber && s.lessonNumber === lessonNumber);

    return !slot;
  });

  const teacherSelectHandler = (value) => {
    changeField({ name: "teacherId", lessonNumber, weekDayNumber, value });
  };

  const subjectSelectHandler = (value) => {
    changeField({ name: "subjectId", lessonNumber, weekDayNumber, value });
  };



  const teachersOptions = freeTeachers.map((t) => {
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
        marginBottom: "10px",
      }}
    >
      <div style={{ flex: "0 0 auto", minWidth: "20px", paddingTop: "5px" }}>{lessonNumber})</div>

      <div style={{ flex: "0 0 auto", minWidth: "50px", paddingTop: "5px" }}>{time}</div>

      <div style={{ flex: "1 0 33%", padding: "0 10px" }}>
        <Item
          name={"subject" + weekDayNumber + lessonNumber}
          rules={[{ required: !!subjectId, message: "Выберите предмет" }]}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Select
            required={subjectId}
            value={teacherId}
            onChange={teacherSelectHandler}
            placeholder="Выберите учителя"
            style={{ width: "100%" }}
          >
            <Select.Option value={null}></Select.Option>
            {teachersOptions}
          </Select>
        </Item>
      </div>

      <div style={{ flex: "1 0 33%", padding: "0 10px" }}>
        <Item
          name={"teacher" + weekDayNumber + lessonNumber}
          rules={[{ required: !!teacherId, message: "Выберите предмет" }]}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Select
            value={subjectId}
            onChange={subjectSelectHandler}
            placeholder="Выберите предмет"
            style={{ width: "100%" }}
          >
            <Select.Option value={null}></Select.Option>
            {subjectsOptions}
          </Select>
        </Item>
      </div>
    </div>
  );
};

export default ScheduleSlotForm;
