import React, { Component } from 'react';
import reactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import '../index.css'
import $ from 'jquery';
import axios from 'axios'
import Navbar from './Navbar';

export default class Form extends Component{
    constructor(props){
        super(props);
        this.state={
            fname: null,
            Lemail: null,
            Semail: null,
            loginPassword: null,
            signupPassword: null,
            errors: {
                fname: '',
                Lemail:'',
                Semail: '',
                loginPassword: '',
                signupPassword:'',
              }
        };
    }

    handleSignup = () => {
        $("#main").animate({left:"22.5%"},450);
        $("#main").animate({left:"30%"},500);
        $("#loginform").css("visibility","hidden");
        $("#loginform").animate({left:"25%"},450);
    
        $("#signupform").animate({left:"17%"},450);
        $("#signupform").animate({left:"30%"},500);
        $("#signupform").css("visibility","visible");
    }

    handleLogin = () => {
    $("#main").animate({left:"77.5%"},450);
    $("#main").animate({left:"70%"},500);
    $("#signupform").css("visibility","hidden");
    $("#signupform").animate({left:"75%"},450);

    $("#loginform").animate({left:"83%"},450);
    $("#loginform").animate({left:"70%"},500);
    $("#loginform").css("visibility","visible");
    }
    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;
        const validEmailRegex = 
  RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
        const validalpha =
        RegExp(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)$/i);
      
        switch (name) {
          case 'fname': 
            errors.fname = 
                validalpha.test(value) 
                ? ''
                : 'Name must contain alphabets only ';
            break;
          case 'Semail': 
            errors.Semail = 
              validEmailRegex.test(value)
                ? ''
                : 'Email is not valid!';
            break;
          case 'signupPassword': 
            errors.signupPassword = 
              value.length < 8
                ? 'Password must be 8 characters long!'
                : '';
            break;
            case 'Lemail': 
            errors.Lemail = 
              validEmailRegex.test(value)
                ? ''
                : 'Email is not valid!';
            break;
          case 'loginPassword': 
            errors.loginPassword = 
              value.length < 8
                ? 'Password must be 8 characters long!'
                : '';
            break;

          default:
            break;
        }

            this.setState({
                    [event.target.name]: event.target.value,errors
                 });
        }
    // handleChange=(e)=>
    // {
    //     console.log(e.target.name,e.target.value)
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     });
    // }

    handleLogin2=async (e)=>{
        e.preventDefault();
        console.log(this.state.Lemail + " " + this.state.loginPassword);
        var res = await axios.post(`http://localhost:5000/auth/login`, {
            email:this.state.Lemail,
            password:this.state.loginPassword
        });
        console.log(res.data);
        if(res.status === 200){
            console.log(res);
            localStorage.setItem("authenticated", res.data.success);
            localStorage.setItem("user", JSON.stringify(res.data.user));
            this.props.history.push('/')
        }
    }

    handleSignup2 = async (e)=>{
        e.preventDefault();
        var res = await axios.post(`http://localhost:5000/auth/register`, {
            name:this.state.fname,
            email:this.state.Semail,
            password:this.state.signupPassword
        });
        console.log(res)
        if(res.status === 200){
            localStorage.setItem("authenticated", true);
            localStorage.setItem("user", JSON.stringify(res.data));
            this.props.history.push('/')
        }
    }

    componentDidMount() {
        if(localStorage.getItem("authenticated") == true) { this.props.history.push('/') }
    }
    

    render()
    {
        let {errors}=this.state
        return(
            <div>
            <Navbar />
            <div id="form-div">
            <div id="box">
                <div id="main" style={{height:"500px"}}>

                </div>
                <form id="loginform" onSubmit={this.handleLogin2}>
                    <h1>Login</h1>
                    <div><input type="email" placeholder="Email" name="Lemail" value={this.props.value} onChange={this.handleChange} /></div>
                    {errors.Lemail.length>0&&<div className="alert alert-danger" style={{width:"100%"}}>{errors.Lemail}</div>}
                    <div><input type="password" placeholder="Password" name="loginPassword" value={this.props.value} onChange={this.handleChange} /></div>
                    {errors.loginPassword.length>0&&<div className="alert alert-danger" style={{width:"100%"}}>{errors.loginPassword}</div>}
                    <button type="submit" name="button">Login</button>
                </form>
                <form id="signupform"   onSubmit={this.handleSignup2}>
                    <h1>SIGN UP</h1>
                    <div className="input-group"><input type="text" placeholder="Full Name" name="fname" value={this.props.value} onChange={this.handleChange} />
                    </div>
                    {errors.fname.length>0&&<div className="alert alert-danger" style={{width:"100%"}}>{errors.fname}</div>}
                    <div className="input-group"><input type="email" placeholder="Email" name="Semail" value={this.props.value} onChange={this.handleChange} /></div>
                    {errors.Semail.length>0&&<div className="alert alert-danger" style={{width:"100%"}}>{errors.Semail}</div>}
                    <div className="input-group"><input type="password" placeholder="Password" name="signupPassword" value={this.props.value} onChange={this.handleChange} /></div>
                    {errors.signupPassword.length>0&&<div className="alert alert-danger" style={{width:"100%"}}>{errors.signupPassword}</div>}
                    <button type="submit">SIGN UP</button>
                </form>

                <div id="login_msg">
                Have an account?
                </div>

                <div id="signup_msg">
                Create an account?
                </div>
                <div>
                    <button type="button" name="button" id="login_btn" onClick={this.handleLogin}>LOGIN</button>
                    <button type="button" name="button" id="signup_btn" onClick={this.handleSignup}>SIGN UP</button>
                </div>
            </div>
            </div>
            </div>
        )
    }
}
