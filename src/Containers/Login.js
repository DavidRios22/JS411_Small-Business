import { connect } from "react-redux";
import Login from "../Components/Login"
import { addUser } from "../Redux/actions";

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (index) => dispatch(addUser(index)),
  }
}

export default connect(null, mapDispatchToProps)(Login)