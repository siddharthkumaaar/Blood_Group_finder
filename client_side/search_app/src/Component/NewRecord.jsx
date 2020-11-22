import Axios from 'axios';
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

class NewRecord extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:"",
            email:"",
            city:"",
            bloodGroup:"",
            gender:"",
            url:"",
            isProcessing:false
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {name,email,city,bloodGroup,gender,url,isProcessing} = this.state
        const data = {
            Name:name,
            Email:email,
            City:city,
            Blood_Group:bloodGroup,
            Gender:gender,
            Image_Link:url
        }

        // console.log(data)
        this.setState({
            isProcessing:true
        })
        Axios({
            method:'post',
            url:'http://localhost:5000/api/students/addnew',
            data:data
        })
        .then(res=>{
            console.log(res)
            this.setState({
              isProcessing:false
          })
        })
        .catch(err=>{
            console.log(err)
        })
    }

    render(){
        const {isProcessing} = this.state
        return(
            <>
                <h1>New Record</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="name">Full Name:</label>
                        <input type="text" 
                        name="name" 
                        value={this.state.name}
                        placeholder="Type your full name"
                        onChange={(e)=>{this.setState({name:e.target.value})}}/>
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" 
                        name="email" 
                        value={this.state.email}
                        placeholder="Type your email"
                        onChange={(e)=>{this.setState({email:e.target.value})}}/>
                    </div>
                    <div>
                        <label htmlFor="city">City:</label>
                        <input type="text" 
                        name="city" 
                        value={this.state.city}
                        placeholder="Type your city name"
                        onChange={(e)=>{this.setState({city:e.target.value})}}/>
                    </div>
                    <div>
                        <label htmlFor="bloodGroup">Blood Group:</label>
                        <input type="text" 
                        name="bloodGroup" 
                        value={this.state.bloodGroup}
                        placeholder="Type your Blood Group"
                        onChange={(e)=>{this.setState({bloodGroup:e.target.value})}}/>
                    </div>
                    <div>
                        <label htmlFor="gender">Male:</label>
                        <input type="radio" 
                        name="gender" 
                        value="male"
                        onClick={(e)=>{this.setState({gender:e.target.value})}}/>
                        <label htmlFor="gender">Female:</label>
                        <input type="radio" 
                        name="gender" 
                        value="female"
                        onClick={(e)=>{this.setState({gender:e.target.value})}}/>
                    </div>
                    <div>
                        <label htmlFor="image">Image Url:</label>
                        <input type="url" 
                        name="url" 
                        value={this.state.url}
                        placeholder="Tyep image url"
                        onChange={(e)=>{this.setState({url:e.target.value})}}/>
                    </div>
                    <div>
                        <button type="submit">Add</button>
                    </div>
                </form>
                {isProcessing ? <h3 style={{color:"red"}}>Processing...</h3>:""}
            </>
        )
    }
}

export default NewRecord