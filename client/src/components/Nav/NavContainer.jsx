import { connect } from "react-redux"
import { thunks } from "../../redux/thunks"
import Nav from "./Nav"

const mapStateToProps = (state) => {

}

const mapDispatchToProps = {
  logout: thunks.forgetUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)