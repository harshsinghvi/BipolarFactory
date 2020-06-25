import React from 'react'
import styled from 'styled-components';

import BackButton from '../../components/BackButton';
import Logo from '../../components/Logo';


const LoginContaier = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;  
`
const Header = styled.header`

  width: 85%;
  height: 8rem;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
`
const InputWrapper = styled.div`
  width: 50%;
  margin: 8rem auto;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* background: #eee; */
`
const WelcomeBack = styled.div`
  width: 50%;
  height: 3.5rem;
  background-color: #FBCE2E;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  color:#000;
  border-radius: 1rem;
`
const LoginText = styled.h2`
  font-size: 2.5rem;
  color:#000;
  margin: 1rem 0;
  margin-bottom: 2rem;
`
const InputBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin-bottom: 1rem;
  .label{
    font-size: 1.7rem;
    color: rgba(60, 58, 58, 1);
    margin: .5rem 0;
  }
`
const Input = styled.input`
   width: 100%;
   height: 3.5rem;
   outline: none;
   background: rgba(226, 224, 224, 1);
   border: none;
   border-radius: 1rem;
   padding: 0 1rem;
  
`
const Form = styled.form`
  width: 50%;
  margin: 1rem auto;
`
const SubmitButton = styled.button`
  width: 100%;
  height:3.5rem;
  border: none;
  border-radius: 1rem;
  background-color: #6089F4;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2.5rem;
  cursor: pointer;
  font-size: 1.8rem;
`
function Index() {
  return (
    <LoginContaier>
      <Header>
        <Logo />
        <BackButton />
      </Header>
      <InputWrapper>
        <WelcomeBack>Welcome back !!</WelcomeBack>
        <LoginText>Login</LoginText>
        <Form>
          <InputBox>
            <span className="label">Email</span>
            <Input
              name="email"
              type="email"
              required
            />
          </InputBox>
          <InputBox>
            <span className="label">Password</span>
            <Input
              name="password"
              type="password"
              required
            />
          </InputBox>
          <SubmitButton type="submit">Get In</SubmitButton>
        </Form>
      </InputWrapper>
    </LoginContaier>
  )
}

export default Index
