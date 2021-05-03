import React from 'react';
import reactDom from 'react-dom';
import { Row,Col } from 'reactstrap';

class Info extends React.Component{    
    render(){
        const description="I am property from other component!";
        return(
            <div>
                <Information desc={description} />
            </div>
        )
    }
}

class Information extends React.Component{
    constructor(props){
        super(props);
        this.state={
            description:this.props.desc
        };
    }
    render(){
        return(
            <Row>
                <Col sm={6} className="offset-3 mt-4">
                    <strong>
                        {this.state.description}
                    </strong>
                </Col>
            </Row>
        )
    }
}

export default Info;