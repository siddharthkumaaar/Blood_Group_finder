import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Nav = styled.div`
    height:50px;
    background-color:gray;
    color:white;
    display:flex;
    flex-direction:row;
`;

function Navbar(){

    return(
        <>
          <Nav>
              <Link style={{textDecoration:'none', margin:20,color:"white"}} to='/'>Dashboard</Link>
              <Link style={{textDecoration:'none', margin:20,color:"white"}} to='/create'>Create New Record</Link>
          </Nav>
        </>
    )
}

export default Navbar