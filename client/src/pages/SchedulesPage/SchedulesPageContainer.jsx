import { connect } from "react-redux";
import { thunks } from "../../redux/thunks";
import SchedulesPage from "./SchedulesPage";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  update: thunks.updateAll
};

export default connect(mapStateToProps, mapDispatchToProps)(SchedulesPage);
