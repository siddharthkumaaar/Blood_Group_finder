import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Link, Route} from 'react-router-dom';
import Detail from './Detail';
// import Routing from '../Routes/Routing';

const default_img = 'https://images.pexels.com/photos/681467/pexels-photo-681467.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'

const CardBox = styled.div`
    height:200px;
    width:450px;
    margin:30px;
    border-radius:10px;
    box-shadow: 0px 0px 15px 5px #aaaaaa;
`;

const LeftSide = styled.div`
    height:200px;
    width:150px;
    text-align:center;
    float:left;
    background:white;
    border-radius:10px;
`;

const RightSide = styled.div`
    height:200px;
    width:300px;
    // border:1px solid green;
    border-radius:0px 10px 10px 0px;
    float: right;
    text-align:centre;
    background-image:url(${props=>props.link? props.link:default_img});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position:realtive;
    // opacity: 0.3;
    
`;

class Card extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLodding:true,
            studentsData:[]
        }
    }

    componentDidMount(){
        axios({
            method:'get',
            url:'http://localhost:5000/api/students',
        })
        .then((res)=>{
            // console.log(res.data)
            this.setState({
                studentsData:res.data
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    render(){
        console.log(this.state.studentsData)
        const {studentsData} = this.state
        return(
            <>
                {studentsData && studentsData.map((student)=>(<>
                <CardBox key={student.Name}>
                    <LeftSide>
                        <h1 style={{fontSize:60,marginTop:10,marginBottom:-5}}>{student.Blood_Group}</h1>
                        <p style={{marginBottom:-10}}>{student.City}</p>
                        <p>{student.Gender}</p>
                        <button><Link style={{textDecoration:'none'}} to={`/detail/${student.Name}`}>Detail</Link></button>
                    </LeftSide>
                    <RightSide link={student.Image_Link}>
                        <p style={{backgroundColor:"white",marginTop:170}}>{student.Name}</p>
                    </RightSide>
                </CardBox>
                </>))}
                {/* <Route path='/detail' component={Detail}/> */}
                
            </>
        )
    }
}

export default Card