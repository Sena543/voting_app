import React, { Component } from 'react';
import axios from 'axios';



export default class Register extends Component{

    constructor(props){
        super(props)
        this.state = {
            studentID: '',
            password: '',
            confirmpassword:'',
            course: '',
            hall: ''
        }
    }

    submitForm = (e)=>{
        console.log(this.state)
        if(this.state.password !== this.state.confirmpassword){
            return ;
        }else{
            console.log(this.state)
            axios.post('/register', this.state)
            .then( (response)=>{ console.log(response)})
            .catch( error =>{ console.log( error.response)})
        }
    }

    inputHandler = (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    } 

    getSelection= (e)=>{
        const index = e.nativeEvent.target.selectedIndex;
        this.setState({
            course: e.nativeEvent.target[index].text
        })
    }

    gethall= (e)=>{
        const index = e.nativeEvent.target.selectedIndex;
        this.setState({
            hall: e.nativeEvent.target[index].text
        })
    }

    Rendercourses = ()=>{
        const courses = [
            {id:0, course:'Choose Course', value:'choose_course'},
            {id:1, course: 'Polictical Science', value:"p_science"},
            {id:2, course:'Geography', value:'geog'}
        ]
        return(
            courses.map( (item)=>{
                return(
                    <option key ={item.id} value={item.value}> {item.course} </option>
                )
            }
            ))}
    Renderhalls = ()=>{
                const halls = [
                    {id:0, course:'Choose Hall', value:'choose_course'},
                    {id:1, course: 'Sarbah', value:"okpo"},
                    {id:2, course:'Commonwealth', value:'vandal'}
                ]
                return(
                    halls.map( (item)=>{
                        return(
                            <option key ={item.id} value={item.value}> {item.course} </option>
                        )
                    }
                    ))}
    

    render(){
        return(
            <div>
                <form className='registration_form' onSubmit ={this.submitForm}>
                    <div>
                    <label>Student ID:</label>
                    <input placeholder='Student ID' name='studentID' onChange={this.inputHandler}/>
                    </div><br/>
                    <div>
                    <label>Password:</label>
                    <input placeholder='Password' type='password' onChange={this.inputHandler} name='password'/>
                    </div><br/>
                    <div>
                    <label>Confirm Password:</label>
                    <input placeholder='Confirm Password' type='password' name='confirmpassword' onChange={this.inputHandler} />
                    </div><br/>                    
                    <div>
                        <label>Course:</label>
                        <select  onChange={this.getSelection}>
                            <this.Rendercourses/>
                        </select>
                    </div><br/>
                    <div>
                        <label>Halls:</label>
                        <select onChange={this.gethall}>
                            <this.Renderhalls/>
                        </select>
                    </div>
                    <div>
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}