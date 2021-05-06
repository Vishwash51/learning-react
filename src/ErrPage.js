import React,{Component} from 'react';

export default class ErrorBond extends Component{
    constructor(props){
        super(props)
        this.state={
            hasError:false
        }
    }
    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
      }
    
      render() {
        if (this.state.hasError) {
          // You can render any custom fallback UI
          return <h1>Something went wrong.</h1>;
        }
        return this.props.children; 
      }
    // render(){
    //     return(
    //         <div>
    //             {
    //                 this.state.hasError?<h1>Error</h1>:this.props.children
    //             }
    //         </div>
    //     )
    // }

}