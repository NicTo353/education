import { connect } from "react-redux";
import { allActionCreators } from "../../redux/actions";
import { thunks } from "../../redux/thunks";
import LoginPage from "./LoginPage";

const mapStateToProps = (state) => ({
  ...state.loginForm,
});

const mapDispatchToProps = {
  clear: allActionCreators.clearLoginForm,
  changeField: allActionCreators.changeLoginFormField,
  submit: thunks.submitLoginForm
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
