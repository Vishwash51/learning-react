import React, { useState,useEffect, Fragment } from 'react';
import {Form,Row,Col} from 'reactstrap'
import './Form.css';

function HookForm() {
    const now = new Date().toLocaleTimeString();
    let [date, setDate] = useState(now);
    let [timmer,setTimmer]=useState(0);
  const [Name, setName] = useState('');
  const [Mobile, setMobile] = useState('');
  const [Email, setEmail] = useState('');
  let [darkMode,setDarkMode]=useState(false);
  let [dark,setDark]=useState("");

  function updateTime(){
    const newTime = new Date().toLocaleTimeString();
    setDate(newTime)
  }

  function updateTimer(){
    setTimmer(timmer+1);
  }
  useEffect(() => {
    const timer=setInterval(() => {
        updateTime();
    }, 1000);
    return () => clearInterval(timer);
  },[date]);

  useEffect(() => {
    const timer=setInterval(() => {
        updateTimer();
    }, 1000);
    return () => clearInterval(timer);
  },[timmer]);
  
//----
let checked, modeClass="";
  useEffect(()=>{
      debugger
    darkMode ? setDark("dark-mode") : setDark("light-mode");
    checked = darkMode ? "checked" : "unchecked";
    modeClass = darkMode ? "dark-mode" : "light-mode";

    document.getElementsByTagName('body')[0].className = modeClass
   },[darkMode])
   //---

  function reSetTimer(){
    setTimmer(timmer=0);
  }

  function handleSubmit(e) {
      alert('Name : '+Name+'\n Mobile : '+Mobile+'\n Email : '+Email)
      e.preventDefault();
  } 
  
  function handleMode() {
      debugger
      setDarkMode(!darkMode);
  }

  return (
      <Fragment>
          <div className="row">
        <Col sm={11} className="text-right" style={{float:'right'}}>
        <label className="checkbox">
              <input 
                type="checkbox" 
                defaultChecked={checked} 
                onChange={handleMode} />
              {' '}Dark Mode
            </label>
        </Col>
       
    </div>
    <h1 className="text-center">Using Hook</h1>
    <Form onSubmit={handleSubmit} style={{marginTop:'7%'}} className={` ${dark}`}>
    <h1 style={{color:'white'}} className="text-center">{}</h1>
    <div className="row">
        <Col sm={11} className="text-right" style={{float:'right'}}>
        date : {date} timmer : {timmer}  {'   '} {` ${dark}`}
        </Col>
       
    </div>
    <br />
    <div className="row">
        <Col sm={5} className="offset-1">
            Name
        </Col>
        <Col sm={5} className="">
            <input type="text" value={Name} name="Name" className="form-control" onChange={(e)=>{setName(e.target.value)}} />
            
        </Col>
    </div>
    <div className="row mt-2">
        <Col sm={5} className="offset-1">
            Email
        </Col>
        <Col sm={5} className="">
            <input type="email" value={Email} name="Email" className="form-control" onChange={(e)=>{setEmail(e.target.value)}} />
            
        </Col>
    </div>
    <div className="row mt-2">
        <Col sm={5} className="offset-1">
            Mobile Number
        </Col>
        <Col sm={5} className="">
            <input type="number" value={Mobile} name="Mobile" className="form-control" onChange={(e)=>{setMobile(e.target.value)}} />
            
        </Col>
    </div>

    <br />
    
    <div className="row mt-2">
    <Col sm={2} className="offset-md-3">
            <input type="button" value="Reset Timer" onClick={reSetTimer} className="form-control btn btn-info" />
        </Col>
        <Col sm={2} className="offset-md-1">
            <input type="submit" value="Save" className="form-control btn btn-info" />
        </Col>
       
    </div>
</Form>
<br />
</Fragment>
   );
 }
 export default HookForm;