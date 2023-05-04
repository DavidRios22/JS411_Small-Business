import { connect } from "react-redux";
import Add from "../Components/Add";
import { addBusiness } from "../Redux/actions";

const mapDispatchToProps = (dispatch) => {
    return {
        addBusiness: (business) => dispatch(addBusiness(business))
    }
}

export default connect(null, mapDispatchToProps)(Add)