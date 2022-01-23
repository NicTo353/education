import { Table } from "antd";
import Title from "antd/lib/typography/Title";
import React from "react";

const ScheduleDay = (props) => {
  const { day, slots, teachers, subjects, lessonsTime } = props;

  function findSubjectName(subjectId) {
    const subject = subjects.find((s) => s.id === subjectId);
    return subject ? subject.name : "";
  }

  function findTeacherFullName(teacherId) {
    const teacher = teachers.find((t) => t.id === teacherId);

    return teacher ? `${teacher.surname} ${teacher.name} ${teacher.parentName}` : "";
  }

  const dataSource = slots.map((s) => {
    return {
      teacher: findTeacherFullName(s.teacherId),
      subject: findSubjectName(s.subjectId),
      time: lessonsTime[s.lessonNumber - 1],
      id: s.id,
    };
  });

  const columns = [
    {
      dataIndex: "time",
      key: "id",
    },
    {
      dataIndex: "teacher",
      key: "id",
    },
    {
      dataIndex: "subject",
      key: "id",
    },
  ];

  return (
    <div style={{ marginBottom: "30px" }}>
      <Title level={3}>{day}</Title>
      <Table showHeader={false} dataSource={dataSource} columns={columns} pagination={false} />
    </div>
  );
};

export default ScheduleDay;
