import React, { Component } from 'react';
import { Redirect } from 'react-router';
import axios from 'axios'
import Auth from '../util/Auth';
import { Link } from 'react-router-dom';

export default class Homepage extends Component{

    constructor(props){
        super(props)
        this.state ={
            studentID: '',
            password: '',
            isLoggedIn: Auth.isAuthenticated()
        }
    }

    inputHandler = (event)=>{
        this.setState({
            [event.target.name]: event.target.value
        })
       // console.log(this.state)
    }

    loginHandler = (e) => {
        if(this.state.studentID === ''|| this.state.password=== '') return ;
        //Auth.authenticate({name:"Senanu",id:"3"});
        //  this.setState({ isLoggedIn: true });
        axios.post('/login', this.state)
        .then( (response) =>{ 
            console.log(response.data.isLoggedIn)
            Auth.authenticate({name:this.state.studentID});
            this.setState({ isLoggedIn: response.data.isLoggedIn });
            
         }) 
         e.preventDefault(); 
       
    }

 
    render(){
        const { isLoggedIn } = this.state
        return isLoggedIn? <Redirect to="/app" /> : (
            <div>
                <form onSubmit={this.loginHandler}>
                    <div>
                   <label>Student ID:</label>
                   <input placeholder='Student ID' name='studentID' value= {this.state.studentID} onChange={this.inputHandler} />
                   </div>
                   <div>
                   <label>Password:</label>
                   <input placeholder='Password' name='password' value={this.state.password} onChange = {this.inputHandler} />
                   </div>
                   <div>
                       <button>Submit</button>
                   </div>
                   <Link onClick={this.registerpage} to='/register' >Register to vote</Link> 
                </form>
            </div>
        )
    }
}
