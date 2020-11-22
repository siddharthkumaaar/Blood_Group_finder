import Axios from 'axios';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Container = styled.div`
    display:flex;
    flex-direction:row;
`;
const studentData = styled.div`
    display:flex;
    flex-direction:column;
`;

const Hline = styled.div`
    height:400px;
    width:0px;
    border:1px solid gray;
    position:absolute;
    left:640px;
    top:20px;
`;

const Barea = styled.div`
    position:absolute;
    bottom:150px;
    left:500px;
`;
class Detail extends Component{
    constructor(props){
        super(props);
        this.state = {
            data:[]
        }
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
            data:res.data
        })
    })
    .catch(err=>{
        console.log(err)
    })
}

handleDelete = (name) => {
    console.log(name)
    Axios({
        method:"delete",
        url:"http://localhost:5000/api/students/name",
        params:{
            name:name
        }
    })
    .then(res=>{
        console.log(res.data)
    })
    .catch(err=>{
        console.log(err)
    })
}
    render(){
        // console.log(this.props.match.params.name)
        console.log(this.state.data)
        // const {Name,Blood_Group,City,Email,Gender,Image_Link} = this.state.data[0]
        const {data} = this.state
        return(
            <>
            {data && data.map(res=>(
            <div>
                <Container>
                <img style={{borderRadius:500, height:250, width:250}} src={res.Image_Link} alt={res.Name}/>
                <Hline></Hline>
                <studentData>    
                    <div style={{margin:20}}>
                        <label htmlFor="name">Name: {res.Name}</label>
                    </div>
                    <div style={{margin:20}}>
                        <label htmlFor="gender">Gender: {res.Gender}</label>
                    </div>
                    <div style={{margin:20}}>
                        <label htmlFor="email">Email: {res.Email}</label>
                    </div>
                    <div style={{margin:20}}>
                        <label htmlFor="city">City: {res.City}</label>
                    </div>
                    <div style={{margin:20}}>
                        <label htmlFor="bloodGroup">Blood Group: {res.Blood_Group}</label>
                    </div>
                </studentData>
                </Container>
                <Barea>
                    <button style={{height:50,width:100,backgroundColor:"blueviolet",color:"white",fontSize:20,margin:20,border:0,borderRadius:20}}><Link style={{textDecoration:'none'}} to={`/edit/${res.Name}`}>Edit</Link></button>
                    <button style={{height:50,width:100,backgroundColor:"red",color:"white",fontSize:20,margin:20,border:0,borderRadius:20}} onClick={()=>this.handleDelete(res.Name)}>Delete</button>
                </Barea>
            </div>
            ))}
            </>
        )
    }

}

export default Detail