import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';


const Nav = styled.div `
  height: 60px;
  background-color: #000;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h4 {
    color: #fff;
    margin-left: 30px;
  }

  .signout-button{
    margin-right: 30px;
  }
`


const NavBar = ({ user, signOut}) => {

  const onClick = () => {
    signOut();
    window.location.reload(true)
  }

  return (
    <Nav>
      <h4>Hi, {user.name}</h4>
      <Button type="primary" className="signout-button" onClick={onClick}> Sign Out</Button>
    </Nav>
  )
}

export default NavBar;