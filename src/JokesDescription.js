import React from 'react';
import { Col, Label, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class JokesDescription extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            JokesDesc: null
        };
    }

    componentDidMount() {
        fetch('https://api.chucknorris.io/jokes/random?category=' + this.props.match.params.cate).then((response) => {
            response.json().then((result) => {
                this.setState({
                    JokesDesc: result
                })
            })
        })
    }

    render() {
        const jokeDes=this.state.JokesDesc ?
        <div className="mt-3 mx-2">
            <Row>
                <Col sm={6} className="offset-md-3" >
                    <h3 className="text-center">Selected category is : {this.state.JokesDesc.categories}</h3>
                </Col>
            </Row>

            <div className="row " >
                
                <div className="col-sm-6 offset-md-3" style={{ background: 'blue', color: 'white',paddingTop:'5%',paddingBottom:'5%' }}>
                    {this.state.JokesDesc.value}
                </div>
            </div>
            <br />
            <Row className="text-center">
                <Col sm={6} className="offset-md-3" >
                    <a href={'/jokes/' + this.state.JokesDesc.categories}>
                        New Joke
                        </a>
                </Col>

            </Row>
        </div>
        :
        null
        return (
            <div className="container" style={{ position: '' }}>
                {jokeDes}
            </div>
        )
    }
}

export default JokesDescription;