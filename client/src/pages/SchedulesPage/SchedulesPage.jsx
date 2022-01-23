import { Button } from "antd";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddScheduleFormContainer from "../../components/AddScheduleForm/AddScheduleFormContainer";
import AppContext from "../../context";

const SchedulesPage = (props) => {
  const { update, schedules, userId } = props;
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
          border: "1px solid #c4c4c4",
          borderRadius: "10px"
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
      <Link to={`/teacher/${userId}`} style={{marginRight: "20px"}}>Мое расписание</Link>

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
