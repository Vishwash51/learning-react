import logo from './logo.svg';
import './App.css';
import React,{Fragment} from 'react';
import BlogPageContainers from './Containers/BlogPageContainer'
import OutputContainers from './Containers/OutputContainers'


class ReduxPage extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      hasError:false
    }
  }
  static getDerivedStateFromError(){
    return {hasError:true};
  }
  render() {
    if(this.state.hasError){
      return <h1>Error Occured</h1>
    }
    return (
      <Fragment>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
         
        </header>
            <br />
            <BlogPageContainers />
            <OutputContainers />
      </div>
      </Fragment>
    );
  }
}

export default ReduxPage;
