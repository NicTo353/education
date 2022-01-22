import { useEffect } from "react";
import AddScheduleFormContainer from "../../components/AddScheduleForm/AddScheduleFormContainer";

const SchedulesPage = (props) => {
  const { update } = props;

  useEffect(() => {
    update();
  }, [update]);

  return (
    <div>
      <AddScheduleFormContainer />
    </div>
  );
};

export default SchedulesPage;
