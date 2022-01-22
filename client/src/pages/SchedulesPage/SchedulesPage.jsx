import { Button } from "antd";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddScheduleFormContainer from "../../components/AddScheduleForm/AddScheduleFormContainer";
import AppContext from "../../context";

const SchedulesPage = (props) => {
  const { update, schedules } = props;
  const { role } = useContext(AppContext);
  const [isAddScheduleFormVisible, setIsAddScheduleFormVisible] = useState(false);

  useEffect(() => {
    update();
  }, [update]);

  const scheduleCards = schedules.map((s) => {
    return (
      <Link
        style={{
          display: "block",
          backgroundColor: "#fff",
          padding: "20px",
          minHeight: "200px",
          flex: "0 0 300px",
          border: "1px solid #000",
        }}
        to={`/schedule/${s.id}`}
      >
        {s.name}
      </Link>
    );
  });

  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginBottom: "100px" }}>
        {scheduleCards}
      </div>

      {role !== "DEAN" ? null : (
        <>
          <Button onClick={() => setIsAddScheduleFormVisible(!isAddScheduleFormVisible)}>
            {isAddScheduleFormVisible ? "Отменить добавление расписания" : "Добавить расписание"}
          </Button>
          {!isAddScheduleFormVisible ? null : <AddScheduleFormContainer />}
        </>
      )}
    </div>
  );
};

export default SchedulesPage;
