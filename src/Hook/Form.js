import React, { useState,useEffect } from 'react';
import {Form,Row,Col} from 'reactstrap'

function HookForm() {
    const now = new Date().toLocaleTimeString();
    let [date, setDate] = useState(now);
    let [timmer,setTimmer]=useState(0);
  const [Name, setName] = useState('');
  const [Mobile, setMobile] = useState('');
  const [Email, setEmail] = useState('');

  function updateTime(){
    const newTime = new Date().toLocaleTimeString();
    setDate(newTime);
  }
  function updateTimer(){
    setTimmer(timmer+1);
  }
  useEffect(() => {
    const timer=setInterval(() => {
        updateTime();
        updateTimer();
    }, 1000);
    // Clear timeout if the component is unmounted
    return () => clearInterval(timer);
  },[date],[timmer]);
  
  function reSetTimer(){
    setTimmer(timmer=0);
  }

  function handleSubmit(e) {
      alert('Name : '+Name+'\n Mobile : '+Mobile+'\n Email : '+Email)
e.preventDefault();
  } 
  return (
    <Form onSubmit={handleSubmit} style={{marginTop:'7%'}}>
    <h1 style={{color:'white'}} className="text-center">{}</h1>
    <div className="row">
        <Col sm={11} className="text-right" style={{float:'right'}}>
        date : {date} timmer : {timmer}
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
    <Col sm={4} className="offset-md-4">
            <input type="button" value="Reset Timer" onClick={reSetTimer} className="form-control btn btn-info" />
        </Col>
        <Col sm={4} className="offset-md-4">
            <input type="submit" value="Save" className="form-control btn btn-info" />
        </Col>
       
    </div>
</Form>
   );
 }
 export default HookForm;