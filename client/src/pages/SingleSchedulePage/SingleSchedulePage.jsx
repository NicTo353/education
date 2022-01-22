import Paragraph from "antd/lib/typography/Paragraph";
import Title from "antd/lib/typography/Title";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ScheduleDay from "../../components/ScheduleDay/ScheduleDay";

const SingleSchedulePage = (props) => {
  const {
    dayNames,
    name,
    lessonsTime,
    slots,
    teachers,
    subjects,
    groups,
    groupId,
    updateData,
    updateSlots,
  } = props;
  const { scheduleId } = useParams();

  useEffect(() => {
    updateData();
    updateSlots(scheduleId);
  }, []);

  function findGroupName() {
    if (groups.length && groupId) {
      return groups.find((g) => g.id === groupId).name;
    }
    return "";
  }

  const daysElements = dayNames.map((day, dayIndex) => {
    const daySlots = slots.filter((s) => s.weekDayNumber === dayIndex + 1);

    return (
      <ScheduleDay
        key={dayIndex}
        day={day}
        slots={daySlots}
        teachers={teachers}
        subjects={subjects}
        lessonsTime={lessonsTime}
      />
    );
  });

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        backgroundColor: "#fff",
        padding: "20px",
        border: "1px solid #000",
      }}
    >
      <Title>
        {name} {findGroupName()}
      </Title>

      {daysElements}
    </div>
  );
};

export default SingleSchedulePage;
