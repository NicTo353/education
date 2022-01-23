import { connect } from "react-redux";
import { thunks } from "../../redux/thunks";
import AddSubjectForm from "./AddSubjectForm";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  submit: thunks.createSubject,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddSubjectForm);
