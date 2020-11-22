import Axios from 'axios';
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

class EditRecord extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:"",
            email:"",
            city:"",
            bloodGroup:"",
            gender:"",
            url:"",
            isProcessing:false,
            data:[]
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

        console.log(name)
        this.setState({
            isProcessing:true
        })
        Axios({
            method:'put',
            url:'http://localhost:5000/api/students/name',
            params:{
                name:name
            },
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

    componentDidMount(){
        const {name} = this.props.match.params

        Axios({
            method:'get',
            url:'http://localhost:5000/api/students/name',
            params:{
                name:name
            }
        })
        .then(res=>{
            console.log(res.data)
            this.setState({
                name:res.data[0].Name,
                email:res.data[0].Email,
                city:res.data[0].City,
                bloodGroup:res.data[0].Blood_Group,
                gender:res.data[0].Gender,
                url:res.data[0].Image_Link
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }

    render(){
        const {name,email,city,bloodGroup,gender,url} = this.state
        return(
            <>
           
                <div>
                    <h1>Edit Record</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="name">Full Name:</label>
                        <input type="text" 
                        name="name" 
                        value={name}
                        placeholder="Type your full name"
                        onChange={(e)=>{this.setState({name:e.target.value})}}/>
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" 
                        name="email" 
                        value={email}
                        placeholder="Type your email"
                        onChange={(e)=>{this.setState({email:e.target.value})}}/>
                    </div>
                    <div>
                        <label htmlFor="city">City:</label>
                        <input type="text" 
                        name="city" 
                        value={city}
                        placeholder="Type your city name"
                        onChange={(e)=>{this.setState({city:e.target.value})}}/>
                    </div>
                    <div>
                        <label htmlFor="bloodGroup">Blood Group:</label>
                        <input type="text" 
                        name="bloodGroup" 
                        value={bloodGroup}
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
                        value={url}
                        placeholder="Tyep image url"
                        onChange={(e)=>{this.setState({url:e.target.value})}}/>
                    </div>
                    <div>
                        <button type="submit">Update</button>
                    </div>
                </form>
                {/* {isProcessing ? <h3 style={{color:"red"}}>Processing...</h3>:""} */}
                </div>
            
                
            </>
        )
    }
}

export default EditRecord