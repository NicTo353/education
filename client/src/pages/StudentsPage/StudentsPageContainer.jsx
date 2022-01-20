import { connect } from "react-redux";
import { thunks } from "../../redux/thunks";
import StudentsPage from "./StudentsPage";

const mapStateToProps = (state) => ({
  students: state.data.students,
});

const mapDispatchToProps = {
  update: thunks.updateStudents,
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentsPage);
