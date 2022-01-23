import { Button, Input, Select } from "antd";
import Form from "antd/lib/form/Form";
import Title from "antd/lib/typography/Title";
import React, { useEffect } from "react";
import ScheduleDay from "./ScheduleDayForm/ScheduleDayForm";

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
    update,
    closeForm,
  } = props;

  useEffect(() => {
    update();
    reset();
  }, [reset, update]);

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
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderTop: "1px solid #c4c4c4",
        marginTop: "100px",
        paddingTop: "50px",
      }}
    >
      <div
        style={{
          border: "1px solid #c4c4c4",
          padding: "10px",
          borderRadius: "10px",
          maxWidth: "800px",
          width: "100%",
        }}
      >
        <Form
          onFinish={() => {
            submit({ slots, name, groupId });
            closeForm();
          }}
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "10px",
          }}
        >
          <Title style={{ textAlign: "center", marginBottom: "30px" }} level={2}>
            Добавление расписания
          </Title>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "10px",
              paddingRight: "10px",
              marginBottom: "30px",
            }}
          >
            <Input
              required
              name="name"
              value={name}
              onChange={(event) => {
                changeField({ value: event.target.value, name: event.target.name });
              }}
              placeholder="Введите название расписания"
            />
            <Select
              required
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
            <Button style={{ marginRight: "20px" }} htmlType="submit" type="primary">
              Создать
            </Button>
            <Button onClick={reset} type="ghost" htmlType="reset">
              Очистить
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddScheduleForm;
