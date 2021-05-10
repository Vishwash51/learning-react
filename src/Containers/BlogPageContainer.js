import {connect} from 'react-redux';
import Add from '../Components/BlogPage'
import Sum from '../Services/Action/action'

const mapStateToProps=state=>({

})

const mapDispatchToProps=dispatch=>({
    addToNumberHandler:data=>dispatch(Sum(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Add)