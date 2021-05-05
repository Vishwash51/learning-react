import React, { Fragment } from 'react';

export class RenderProp extends React.Component {
    render() {
      return (
        <div>
          <h1>Example!</h1>
          <Child render={ele => (
            <Count val={ele} />
          )}/>
        </div>
      );
    }
  }
  
  class Child extends React.Component {
    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
      this.state = { 
          counter:0
        };
    }
  
    handleClick() {
      this.setState({
        counter:this.state.counter+1
      });
    }
  
    render() {
      return (
        <div onClick={this.handleClick}>
            <span className="btn btn-link">
            Counter {this.props.render(this.state)}
            </span>
          
        </div>
      );
    }
  }
  class Count extends React.Component {
    render() {
      const val = this.props.val;
      return (
          <Fragment> {val.counter}</Fragment>
      );
    }
  }