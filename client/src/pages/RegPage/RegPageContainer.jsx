import { connect } from "react-redux";
import { allActionCreators } from "../../redux/actions";
import { thunks } from "../../redux/thunks";
import RegPage from "./RegPage";

const mapStateToProps = (state) => ({
  ...state.regForm,
});

const mapDispatchToProps = {
  clear: allActionCreators.clearRegForm,
  changeField: allActionCreators.changeRegFormField,
  submit: thunks.submitRegForm,
  
};

export default connect(mapStateToProps, mapDispatchToProps)(RegPage);
