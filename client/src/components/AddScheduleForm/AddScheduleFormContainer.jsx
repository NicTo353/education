import { connect } from "react-redux";
import { allActionCreators } from "../../redux/actions";
import { thunks } from "../../redux/thunks";
import AddScheduleForm from "./AddScheduleForm";

const mapStateToProps = (state) => ({
  ...state.schedule,
  teachers: state.data.teachers,
  subjects: state.data.subjects,
  groups: state.data.groups,

});
const mapDispatchToProps = {
  reset: allActionCreators.resetAddScheduleForm,
  changeField: allActionCreators.changeAddScheduleFormTopLevelField,
  changeSlotField: allActionCreators.changeSlotFieldByWeekDayAndLessonNumbers,
  submit: thunks.submitAddScheduleForm
};

export default connect(mapStateToProps, mapDispatchToProps)(AddScheduleForm);
