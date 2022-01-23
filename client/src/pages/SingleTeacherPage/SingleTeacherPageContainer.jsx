import { connect } from "react-redux";
import { thunks } from "../../redux/thunks";
import SingleTeacherPage from "./SingleTeacherPage";

const mapStateToProps = (state) => ({
  ...state.user,
  ...state.data,
});

const mapDispatchToProps = {
  update: thunks.updateAll
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleTeacherPage);
