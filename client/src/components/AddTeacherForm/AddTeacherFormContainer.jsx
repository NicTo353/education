import { connect } from "react-redux";
import { allActionCreators } from "../../redux/actions";
import { thunks } from "../../redux/thunks";
import AddTeacherForm from "./AddTeacherForm";

const mapStateToProps = (state) => ({
  ...state.regForm,
  title: "Добавить учителя"
});

const mapDispatchToProps = {
  clear: allActionCreators.clearRegForm,
  changeField: allActionCreators.changeRegFormField,
  submit: thunks.submitAddTeacherForm,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTeacherForm);
