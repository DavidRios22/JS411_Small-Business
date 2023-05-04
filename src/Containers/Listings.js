import { connect } from "react-redux"
import Listings from "../Components/Listings"
import { removeBusiness } from "../Redux/actions"

const mapStateToProps = (state) => {
  return {
    businesses: state.businesses,
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeBusiness: (index) => dispatch(removeBusiness(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Listings)
