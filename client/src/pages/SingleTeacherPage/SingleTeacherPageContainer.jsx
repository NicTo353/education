import { connect } from "react-redux";
import SingleTeacherPage from "./SingleTeacherPage";

const mapStateToProps = (state) => ({
  ...state.user,
  ...state.data,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SingleTeacherPage);
