import ProductDetail from '../Components/ProductDetail'
import {connect} from 'react-redux'
const mapStateToProps=state=>({
    data:state.Sum_
})
const mapDispatchToProps=dispatch=>({
})
export default connect(mapStateToProps,mapDispatchToProps)(ProductDetail)
// export default Home;