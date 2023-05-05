import { connect } from "react-redux";
import Navigation from "../Components/Navigation"

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(Navigation)