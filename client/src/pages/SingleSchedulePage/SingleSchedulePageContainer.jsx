import { connect } from "react-redux";
import { thunks } from "../../redux/thunks";
import SingleSchedulePage from "./SingleSchedulePage";

const mapStateToProps = (state) => ({
  ...state.data,
  ...state.schedule,
});

const mapDispatchToProps = {
  updateData: thunks.updateAll,
  updateSlots: thunks.updateSingleSchedulePageSlots,
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleSchedulePage);
