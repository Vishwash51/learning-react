import React from "react";
import { Fragment } from "react";

export default class Add extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            first:0,
            second:0,
            sum:0
        }
    }
    render(){
        return(
            <Fragment>
                <div className="row">
                    <div className="col-sm-3 offset-md-1">
                        <input type="number" value={this.state.first} onChange={e=>{this.setState({first:e.target.value})}} />
                    </div>
                    <div className="col-sm-3 offset-md-1">
                        <input type="number" value={this.state.second} onChange={e=>{this.setState({second:e.target.value})}} />
                    </div>
                    <div className="col-sm-1">
                    <button 
                    onClick={
                        ()=>{this.props.addToNumberHandler({first:this.state.first,Second:this.state.second})}
                        }>
                        Add</button>
                       
                    </div>
                </div>

            </Fragment>
        )
    }
}