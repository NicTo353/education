import { Select } from "antd";
import React from "react";

const ScheduleSlot = (props) => {
  const { teachers, subjects, time, dayId } = props;

  console.log(subjects);

  const teachersOptions = teachers.map((t) => {
    return (
      <Select.Option key={t.id} value={t.id}>
        {t.surname} {t.name} {t.parentName}
      </Select.Option>
    );
  });

  const subjectsOptions = subjects.map((s) => {
    return (
      <Select.Option key={s.id} value={s.name}>
        {s.name}
      </Select.Option>
    );
  });
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px"}}>
      <div style={{ flex: "0 0 auto", minWidth: "50px" }}>{time}</div>

      <div style={{ flex: "1 0 33%", padding: "0 10px" }}>
        <Select placeholder="Выберите учителя" style={{ width: "100%" }}>
          {teachersOptions}
        </Select>
      </div>

      <div style={{ flex: "1 0 33%", padding: "0 10px" }}>
        <Select placeholder="Выберите предмет" style={{ width: "100%" }}>
          {subjectsOptions}
        </Select>
      </div>
    </div>
  );
};

export default ScheduleSlot;
