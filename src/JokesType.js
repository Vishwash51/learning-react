import React from 'react';
import { Button, Col, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class JokesType extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            JokesList: null
        };
    }

    componentDidMount() {
        fetch('https://api.chucknorris.io/jokes/categories').then((response) => {
            response.json().then((result) => {

                this.setState({
                    JokesList: result
                })
            })
        })
    }

    openDescription(category) {
        window.location.href = '/jokes/';
    }

    render() {
        const cate = this.state.JokesList ?
            this.state.JokesList.map((item, i) =>
                <div className="col-xs-3 m-1" style={{border:'2px solid gray'}}>
                    <a href={'/jokes/'+item} className="form-control">
                        {item}
                    </a>
                </div>
            )
            :
            null

        return (
            <div className="container">
                <h1>Chuck Norries</h1>
                <Row className="mt-5 mx-2">
                    <div className="row">
                        {cate}
                    </div>
                </Row>

            </div>
        )
    }
}


export default JokesType;