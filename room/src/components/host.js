import React, {Component} from 'react';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.css';


export default class Host extends Component{
    render(){
        return( <>
          <Navbar />
          <div className="container">
            <br/>
          <form>
          <div className="form-row">
          <div className="form-group col-md-6">
              <label htmlFor="inputState">Type of room</label>
              <select id="inputState" className="form-control" >
                <option>Type</option>
                <option>Single</option>
                <option>Double</option>
                <option>Family</option>
                <option>Presidential</option>
              </select>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputState">Capacity per room</label>
              <select id="inputState" className="form-control" >
                <option>Select</option>
                <option>1</option>
                <option>2</option>
                <option>5</option>
                <option>10</option>
              </select>
            </div>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
            <label className="form-check-label" htmlFor="inlineCheckbox1">Pets</label>
          </div>
          <div className="form-check form-check-inline col-md-6">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
            <label className="form-check-label" htmlFor="inlineCheckbox2">Breakfast</label>
          </div><br/><br/>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputCity">Price</label>
              <input type="text" className="form-control" id="inputCity" placeholder="Price" />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputState">Size(in SQFT.)</label>
              <input type="text" className="form-control" id="inputAddress" placeholder="size"/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputAddress">Address</label>
            <input type="text" className="form-control" id="inputAddress" placeholder="Address" />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputCity">City</label>
              <input type="text" className="form-control" id="inputCity" placeholder="city" />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="inputState">State</label>
              <select id="inputState" className="form-control" >
                <option >Choose...</option>
                <option>Chandigarh</option>
                <option>Haryana</option>
                <option>Punjab</option>
                <option>Rajasthan</option>
              </select>
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="inputZip">Zip</label>
              <input type="text" className="form-control" id="inputZip" />
            </div>
          </div>
          <div className="form-group">
              <label htmlFor="exampleFormControlFile1">Example file input</label>
              <input type="file" className="form-control-file" id="exampleFormControlFile1"/> <br/>
              <input type="file" className="form-control-file" id="exampleFormControlFile1"/>
          </div>
          <div className="form-group">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="gridCheck" />
              <label className="form-check-label" htmlFor="gridCheck">
                Lock the details
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Register</button>
      </form>
      </div>
      </>
        )
    }
}