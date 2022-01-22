import Title from "antd/lib/typography/Title";
import React from "react";
import ScheduleSlot from "./ScheduleSlot/ScheduleSlot";

const ScheduleDay = (props) => {
  const { day, slots, teachers, subjects, changeSlotField } = props;
  return (
    <div>
      <Title level={3}>{day}</Title>

      {slots.map((s) => {
        return (
          <ScheduleSlot
            changeField={changeSlotField}
            key={s.lessonNumber}
            teachers={teachers}
            subjects={subjects}
            {...s}
          />
        );
      })}
    </div>
  );
};

export default ScheduleDay;
