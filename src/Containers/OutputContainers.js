import Output from '../Components/Output'
import {connect} from 'react-redux'
const mapStateToProps=state=>({
    data:state.Sum_
})
const mapDispatchToProps=dispatch=>({
})
export default connect(mapStateToProps,mapDispatchToProps)(Output)
// export default Home;