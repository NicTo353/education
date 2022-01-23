import { connect } from "react-redux";
import { thunks } from "../../redux/thunks";
import SchedulesPage from "./SchedulesPage";

const mapStateToProps = (state) => ({
  schedules: state.data.schedules,
  userId: state.user.id
});

const mapDispatchToProps = {
  update: thunks.updateSchedules,
};

export default connect(mapStateToProps, mapDispatchToProps)(SchedulesPage);
