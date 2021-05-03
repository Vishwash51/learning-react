import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          
        </p>
        
        <a href={'/jokes'} style={{color:'white !important'}} > Jokes </a>
      </header>
      {/* <div className="row">
        <div className="col-sm-3">
            <a href={'/jokes'} > Jokes </a>
        </div>
      </div> */}
    </div>
  );
}

export default App;
