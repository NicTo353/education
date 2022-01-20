import { connect } from "react-redux";
import AddScheduleForm from "./AddScheduleForm";

const mapStateToProps = (state) => ({
  ...state.schedule,
  teachers: state.data.teachers,
  subjects: state.data.subjects,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AddScheduleForm);
