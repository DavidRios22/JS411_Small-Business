import { connect } from "react-redux";
import Login from "../Components/Login"
import { removeUser } from "../Redux/actions";

const mapStateToProps = (state) => {
  return {
    users: state.users,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeUser: (index) => dispatch(removeUser(index)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)