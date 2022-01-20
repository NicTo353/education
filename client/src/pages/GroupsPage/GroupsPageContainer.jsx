import { connect } from "react-redux";
import { thunks } from "../../redux/thunks";
import GroupsPage from "./GroupsPage";

const mapStateToProps = (state) => ({
  groups: state.data.groups,
});

const mapDispatchToProps = {
  update: thunks.updateGroups,
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupsPage);
