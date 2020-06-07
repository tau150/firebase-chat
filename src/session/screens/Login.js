import React from 'react';
import styled from 'styled-components'
import loginLogo  from '../../assets/images/Google-Sign-In.png'

const LoginContainer = styled.div `
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
`

const Card = styled.div `
  width: 30%;
  height: 400px;
  display: flex;
  flex-direction: column;
  -webkit-box-shadow: 10px 10px 33px -9px rgba(0,0,0,0.75);
-moz-box-shadow: 10px 10px 33px -9px rgba(0,0,0,0.75);
box-shadow: 10px 10px 33px -9px rgba(0,0,0,0.75);
`

const TitleContainer = styled.div `
  background: #3d4da1;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;

  h4{
    color: #fff;
    font-size: 1.3em
  }
`

const LogoContainer = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  cursor: pointer;

  img{
    width: 60%;
  }
`

const Login  = ({login}) => {

  return (
    <LoginContainer>
      <Card>
        <TitleContainer>
          <h4>Chatty App</h4>
        </TitleContainer>
        <LogoContainer onClick={login}r>
            <img src={loginLogo} alt=""/>
        </LogoContainer>
      </Card>
    </LoginContainer>
  )

}

export default Login;