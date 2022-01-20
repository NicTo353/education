import { connect } from "react-redux";
import { thunks } from "../../redux/thunks";
import TeachersPage from "./TeachersPage";

const mapStateToProps = (state) => ({
  teachers: state.data.teachers,
});

const mapDispatchToProps = {
  update: thunks.updateTeachers,
};

export default connect(mapStateToProps, mapDispatchToProps)(TeachersPage);
