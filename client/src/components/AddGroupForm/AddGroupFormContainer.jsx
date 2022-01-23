import { connect } from "react-redux";
import { thunks } from "../../redux/thunks";
import AddGroupForm from "./AddGroupForm";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  submit: thunks.createGroup
};

export default connect(mapStateToProps, mapDispatchToProps)(AddGroupForm);
