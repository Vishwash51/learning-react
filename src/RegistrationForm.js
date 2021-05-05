import React,{Suspense,Fragment} from 'react';
import { Col,Row } from 'reactstrap';
// import UserForm from './UserForm';
import Background from './imgbin_night-sky-png.png';
import ErrorBond from './ErrPage';
const UserForm=React.lazy(()=>import('./UserForm'))

class RegistrationForm extends React.Component {
    constructor(props){
        super(props);
        }
    render() {
        const title="Please Fill the form";
        const registrationDetail={
            name:'ABC',
            Email:'ABC@gmail.com',
            Phone:'9090909090',
            Gender:'Male',
            DOB:new Date()
        }
const sectionStyle = {
    backgroundImage: `url(${Background})`, backgroundRepeat: 'no-repeat', width: '100%', height: 'auto', color: 'antiquewhite',fontSize:'x-large'
};
        return (
            <Fragment>                
                <Row>
                    <Col sm={6} className="offset-md-3" >
                        <div className="card" >
                            <div className="card-header">
                               <span> Registration Form</span>
                               <span style={{float:"right"}}>
                                   <a href={'/'} className="btn" >Back</a>
                               </span>
                    </div>
                            <div className="card-body" style={sectionStyle}>
                                <Suspense fallback={<h1>Wait...</h1>}>
                                    <ErrorBond>
                                    <UserForm heading={title} detail={registrationDetail} />
                                    </ErrorBond>                                    
                                </Suspense>                                
                            </div>
                        </div>
                    </Col>
                </Row>
            </Fragment>
        )
    }
}
export default RegistrationForm;