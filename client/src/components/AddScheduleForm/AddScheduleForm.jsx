import { Button, Input, Select } from "antd";
import Form from "antd/lib/form/Form";
import Title from "antd/lib/typography/Title";
import React, { useEffect } from "react";
import ScheduleDay from "./ScheduleDay/ScheduleDay";

const AddScheduleForm = (props) => {
  const {
    dayNames,
    lessonsTime,
    slots,
    groupId,
    name,
    teachers,
    subjects,
    groups,
    reset,
    changeSlotField,
    changeField,
    submit,
  } = props;

  const submitButtonHandler = () => {
    submit({ slots, name, groupId });
  };

  useEffect(() => {
    reset();
  }, [reset]);

  const daysElements = dayNames.map((day, dayIndex) => {
    const daySlots = slots
      .filter((s) => {
        return s.weekDayNumber === dayIndex + 1;
      })
      .map((s) => {
        return {
          ...s,
          time: lessonsTime[s.lessonNumber - 1],
        };
      });

    return (
      <ScheduleDay
        changeSlotField={changeSlotField}
        key={dayIndex}
        teachers={teachers}
        day={day}
        subjects={subjects}
        slots={daySlots}
      />
    );
  });

  const groupsOptions = groups.map((g) => {
    return (
      <Select.Option key={g.id} value={g.id}>
        {g.name}
      </Select.Option>
    );
  });

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        border: "1px solid #000",
        borderRadius: "10px",
        padding: "10px",
      }}
    >
      <Title style={{ textAlign: "center" }} level={2}>
        Добавление расписания
      </Title>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "10px",
          paddingRight: "10px",
        }}
      >
        <Input
          name="name"
          value={name}
          onChange={(event) => {
            changeField({ value: event.target.value, name: event.target.name });
          }}
          placeholder="Введите название расписания"
        />
        <Select
          value={groupId}
          onChange={(value) => changeField({ name: "groupId", value })}
          placeholder="Выберите группу из списка"
          style={{ flex: "0 0 50%" }}
        >
          {groupsOptions}
        </Select>
      </div>

      {daysElements}
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <Button onClick={submitButtonHandler} style={{ marginRight: "20px" }} type="primary">
          Создать
        </Button>
        <Button onClick={reset} type="ghost">
          Сбросить
        </Button>
      </div>
    </div>
  );
};

export default AddScheduleForm;
