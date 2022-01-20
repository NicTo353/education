import { Input, Select } from "antd";
import Form from "antd/lib/form/Form";
import Title from "antd/lib/typography/Title";
import React from "react";
import ScheduleDay from "./ScheduleDay/ScheduleDay";

const AddScheduleForm = (props) => {
  const { days, slotsTime, teachers, subjects } = props;

  const daysElements = days.map((d) => {
    return (
      <ScheduleDay
        teachers={teachers}
        subjects={subjects}
        slotsTime={slotsTime}
        key={d.id}
        {...d}
      />
    );
  });
  // const daysElements = days.map((d) => {
  //   return (
  //     <div key={d.id}>
  //       <Title level={3}>{d.name}</Title>
  //       {d.slots.map((s, id) => {
  //         return (
  //           <div>
  //             <Title level={4}></Title>
  //             <Select style={{ width: "100%" }}>
  //               {teachers.map((t) => {
  //                 return (
  //                   <Select.Option key={t.id}>
  //                     {`${t.surname} ${t.name} ${t.parentName}`}
  //                   </Select.Option>
  //                 );
  //               })}
  //             </Select>
  //           </div>
  //         );
  //       })}
  //     </div>
  //   );
  // });

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      <Title style={{ textAlign: "center" }} level={2}>
        Добавление расписания
      </Title>
      {daysElements}
      <div></div>
    </div>
  );
};

export default AddScheduleForm;
