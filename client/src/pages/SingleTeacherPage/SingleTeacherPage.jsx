import Title from "antd/lib/typography/Title";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ScheduleDay from "../../components/ScheduleDay/ScheduleDay";

const SingleTeacherPage = (props) => {
  const { update, name, surname, parentName, role, teachers, subjects, dayNames, lessonsTime } =
    props;

  const { teacherId } = useParams();

  console.log(teachers)
  const daysElements = [];

  const teacher = teachers.find((t) => t.id === teacherId);

  if (teacher) {
    dayNames.forEach((day, dayIndex) => {
      const daySlots = [];
      lessonsTime.forEach((time, timeIndex) => {
        const slot = teacher.slots.find(
          (s) => s.lessonNumber === timeIndex + 1 && s.weekDayNumber === dayIndex + 1
        );

        if (slot) {
          return daySlots.push(slot);
        }

        return daySlots.push({ lessonNumber: timeIndex + 1, weekDayNumber: dayIndex + 1 });
      });

      daysElements.push(
        <ScheduleDay
          key={dayIndex}
          teachers={teachers}
          subjects={subjects}
          day={day}
          lessonsTime={lessonsTime}
          slots={daySlots}
        />
      );
    });
  }

  // day, slots, teachers, subjects, lessonsTime

  useEffect(() => {
    update();
  }, [update]);

  return (
    <div style={{maxWidth: "800px", padding: "20px", backgroundColor: "#fff", border: "1px solid #000"}}>
      <Title>
        {name} {surname} {parentName}
      </Title>

      <Title level={2}>Должность: {role === "DEAN" ? "декан" : "учитель"}</Title>

      {daysElements}
    </div>
  );
};

export default SingleTeacherPage;
