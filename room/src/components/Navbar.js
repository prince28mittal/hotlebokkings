import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import logo from "../images/logo.svg";
import './../App.css';


export default class Navbar extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      isOpen: false,
      auth: false
    };
    this.handleToggle=this.handleToggle.bind(this)
    this.logout=this.logout.bind(this)
    console.log(localStorage.getItem("authenticated"))
  }
  logout(e){
    e.preventDefault();
    //console.log('before',localStorage.getItem("authenticated"))
    localStorage.setItem("authenticated",false)
    //console.log('after',localStorage.getItem("authenticated"))
    this.setState({auth: false})
  }
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
   // console.log(typeof(localStorage.getItem("authenticated")))
    let logButton = null
    if(String(localStorage.getItem("authenticated")) === "true") {
      logButton = <Link to='' className="logout" onClick={this.logout}>Logout</Link>
    }
    else {
      console.log('inside else')
      logButton = <Link to="/components/form">
        login
    </Link>
    }
    // {localStorage.getItem("authenticated")}
    //           { if(localStorage.getItem("authenticated"))
    //             {<button onClick={this.logout}>Logout</button>}
    //             else(
    //             <Link to="/components/form">
    //               login
    //             </Link>
    //           ) }
    return (
      <nav className="navbarApp">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="Beach Resort" />
            </Link>
            <button type="button" className="nav-btn" onClick={this.handleToggle}>
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <div>
            <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/rooms">Rooms</Link> 
              </li>
              <li>
              {/* { localStorage.getItem("authenticated") ? (<a> {JSON.parse(localStorage.getItem("user")).name} </a>) : (
                <Link to="/components/form">
                  login
                </Link>
              ) } */}
              {logButton}
              </li>
              <li>
                <Link to="/components/host">Host</Link> 
              </li>
              {/* <li>
                <Link to
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
