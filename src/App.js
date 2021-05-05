import logo from './logo.svg';
import './App.css';
import React,{Fragment} from 'react';

class App extends React.Component {
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
          
          <a href={'/jokes'} style={{ color: 'white !important' }} > Jokes </a>
          <a href={'/registration'} style={{ color: 'white !important' }} > Registration </a>
        </header>
        {/* <div className="row">
        <div className="col-sm-3">
            <a href={'/jokes'} > Jokes </a>
        </div>
      </div> */}
      </div>
      </Fragment>
    );
  }
}

export default App;
