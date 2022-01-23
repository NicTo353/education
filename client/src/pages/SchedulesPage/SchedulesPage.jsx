import { Button } from "antd";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddScheduleFormContainer from "../../components/AddScheduleForm/AddScheduleFormContainer";
import SchedulePreview from "../../components/SchedulePreview/SchedulePreview";
import AppContext from "../../context";

const SchedulesPage = (props) => {
  const { update, schedules, userId, deleteOne } = props;
  const { role } = useContext(AppContext);
  const [isAddScheduleFormVisible, setIsAddScheduleFormVisible] = useState(false);

  const closeForm = () => {
    setIsAddScheduleFormVisible(!isAddScheduleFormVisible);
  };

  useEffect(() => {
    update();
  }, [update]);

  const scheduleCards = schedules.map((s) => {
    return <SchedulePreview key={s.id} deleteOne={deleteOne} name={s.name} id={s.id} />;
  });

  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginBottom: "100px" }}>
        {scheduleCards}
      </div>
      <Link to={`/teacher/${userId}`} style={{ marginRight: "20px" }}>
        Мое расписание
      </Link>

      {role !== "DEAN" ? null : (
        <>
          <Button onClick={closeForm}>
            {isAddScheduleFormVisible ? "Отменить добавление расписания" : "Добавить расписание"}
          </Button>
          {!isAddScheduleFormVisible ? null : <AddScheduleFormContainer closeForm={closeForm} />}
        </>
      )}
    </div>
  );
};

export default SchedulesPage;
