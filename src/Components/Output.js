import React from "react";
import { Fragment } from "react";

export default class Output extends React.Component{
    
    constructor(props)
    {
        super(props);
        this.state={
            prop:this.props.data,
            show:'F'
        }
        
        
    }
   
    render(){
        
        return(
            <Fragment>
                <br />
                    <div className="row">
                    <div className="col-sm-3 offset-md-1">
                        <span >
                            Number of times ADD press button :
                            {
                                 this.props.data.length
                            }

                        </span>
                    </div>
                    <div className="col-sm-3 offset-md-1">
                        <span >
                            Sum of these numbers is :
                            {
                                 this.props.data[0]==undefined?0:this.props.data[this.props.data.length-1].Mathematical
                                 
                                // +''+
                                 //console.log(this.props.data[0]==undefined?null:this.props.data[0].Mathematical)
                                //this.props.data[0]==undefined?null:props.data[this.state.len].Mathematical
                            }

                        </span>
                    </div>
                </div>
                
            </Fragment>
        )
    }
}