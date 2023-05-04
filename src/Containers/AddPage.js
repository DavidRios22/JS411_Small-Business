import { connect } from "react-redux";
import AddPage from "../Components/AddPage";

const mapStateToProps = (state) => {
    return {
        businesses: state.businesses
    }
}

export default connect(mapStateToProps)(AddPage)