// @flow
import React from 'react';
import { Col, Form } from 'reactstrap';
import DatePicker from 'react-datepicker';

export default class UserForm extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            Name:this.props.detail.name,
            Email:this.props.detail.Email,
            Mobile:this.props.detail.Phone,
            Gender:this.props.detail.Gender,
            DOB:this.props.detail.DOB,//new Date(),
            title:this.props.heading,

            ErrName:'',
            ErrEmail:'',
            ErrMobile:'',
            ErrGender:'',
            ErrDOB:null
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleDate(date){
        debugger
        var dt=date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear();
        var DOB=this.state.DOB;
        this.setState({
            DOB:date
        })
        
    }
    valid(){
        this.setState({
            ErrName:'',
            ErrEmail:'',
            ErrMobile:'',
            ErrGender:'',
            ErrDOB:''
    
    })
        if(this.state.Name==''){
            this.setState({ErrName:'Enter Name'})
        }
        else if(this.state.Mobile==''||this.state.Mobile.length!=10){
            this.setState({ErrMobile:'Enter Valid Mobile'})
        }
        else if(this.state.Email==''){
            this.setState({ErrEmail:'Enter Email'})
        }
        else if(this.state.Gender==''){
            this.setState({ErrGender:'Select Gender'})
        }
        else if(this.state.DOB==''){
            this.setState({ErrDOB:'Select DOB'})
        }
        else{
            return true
        }
    }
    handleSubmit(e) {
        this.setState({
            ErrName:'',
            ErrEmail:'',
            ErrMobile:'',
            ErrGender:'',
            ErrDOB:''
    
    })
        if(this.valid())
        {
            var date=this.state.DOB;
            var dt=date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear();
            console.log('Name : '+this.state.Name+'\n Email : '+this.state.Email+'\n Mobile : '+this.state.Mobile+'\n DOB : '+this.state.DOB+'\n Gender : '+this.state.Gender)
        alert('Name : '+this.state.Name+'\n Email : '+this.state.Email+'\n Mobile : '+this.state.Mobile+'\n DOB : '+dt+'\n Gender : '+this.state.Gender);
        
        }
        e.preventDefault();
    }
    render() {
        return (
            <Form onSubmit={this.handleSubmit} style={{marginTop:'7%'}}>
                <h1 style={{color:'white'}} className="text-center">{this.state.title}</h1>
                <div className="row">
                    <Col sm={5} className="offset-1">
                        Name
                    </Col>
                    <Col sm={5} className="">
                        <input type="text" value={this.state.Name} name="Name" className="form-control" onChange={this.handleChange.bind(this)} />
                        <p style={{color:'red'}}>{this.state.ErrName}</p>  
                    </Col>
                </div>
                <div className="row mt-2">
                    <Col sm={5} className="offset-1">
                        Email
                    </Col>
                    <Col sm={5} className="">
                        <input type="email" value={this.state.Email} name="Email" className="form-control" onChange={this.handleChange.bind(this)} />
                        <p style={{color:'red'}}>{this.state.ErrEmail}</p>  
                    </Col>
                </div>
                <div className="row mt-2">
                    <Col sm={5} className="offset-1">
                        Mobile Number
                    </Col>
                    <Col sm={5} className="">
                        <input type="number" value={this.state.Mobile} name="Mobile" className="form-control" onChange={this.handleChange.bind(this)} />
                        <p style={{color:'red'}}>{this.state.ErrMobile}</p>  
                    </Col>
                </div>
                <div className="row mt-2">
                    <Col sm={5} className="offset-1">
                        Gender
                    </Col>
                    <Col sm={5} className="">
                        <input type="radio" value="Male" name="Gender" checked={this.state.Gender === 'Male'} onChange={this.handleChange.bind(this)} /> Male
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" value="Female" name="Gender" checked={this.state.Gender === 'Female'} onChange={this.handleChange.bind(this)} /> Female
                        <p style={{color:'red'}}>{this.state.ErrGender}</p>  
                    </Col>
                </div>
                <div className="row mt-2">
                    <Col sm={5} className="offset-1">
                        DOB
                    </Col>
                    <Col sm={5} className="">
                        <DatePicker
                            selected={this.state.DOB}
                            onChange={this.handleChange}
                            name="DOB"
                            dateFormat="dd/MM/yyyy"
                            onChange={this.handleDate.bind(this)} 
                            className="form-control"
                            readonly="readonly"
                            
                        />
                        <p style={{color:'red'}}>{this.state.ErrDOB}</p>  
                    </Col>
                </div>
                <br />
                
                <div className="row mt-2">
                    <Col sm={4} className="offset-md-4">
                        <input type="submit" value="Save" className="form-control btn btn-info" />
                    </Col>
                   
                </div>
            </Form>
        )
    }
}