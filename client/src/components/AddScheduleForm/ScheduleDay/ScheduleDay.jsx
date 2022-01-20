import Title from "antd/lib/typography/Title";
import React from "react";
import ScheduleSlot from "./ScheduleSlot/ScheduleSlot";

const ScheduleDay = (props) => {
  const { id, name, slots, slotsTime, teachers, subjects } = props;
  console.log(slots);
  return (
    <div>
      <Title level={3}>{name}</Title>

      {slots.map((s) => {
        const time = slotsTime.find((st) => st.id === s.id).time;

        return (
          <ScheduleSlot teachers={teachers} subjects={subjects} dayId={id} time={time} {...s} />
        );
      })}
    </div>
  );
};

export default ScheduleDay;
