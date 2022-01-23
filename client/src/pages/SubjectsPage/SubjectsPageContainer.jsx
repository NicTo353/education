import { connect } from "react-redux";
import { thunks } from "../../redux/thunks";
import SubjectsPage from "./SubjectsPage";

const mapStateToProps = (state) => ({
  subjects: state.data.subjects,
});

const mapDispatchToProps = {
  update: thunks.updateSubjects,
  deleteOne: thunks.deleteSubject
};

export default connect(mapStateToProps, mapDispatchToProps)(SubjectsPage);
