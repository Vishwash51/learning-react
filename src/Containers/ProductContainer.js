import Product from '../Components/Product'
import {connect} from 'react-redux'
import {addToCart} from '../Services/Action/action'
// import {RemoveToCart} from '../Services/Action/action'

const mapStateToProps=state=>({
    // data:state.Sum_
})
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data)),
    //RemoveToCartHandler:data=>dispatch(RemoveToCart(data))

})
export default connect(mapStateToProps,mapDispatchToProps)(Product)
// export default Home;