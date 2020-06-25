import React from 'react'

import styled from 'styled-components';

import BackButton from '../../components/BackButton';
import Logo from '../../components/Logo';


const SignupContaier = styled.div`
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
const SignupWrapper = styled.div`
  width: 50%;
  margin: 0rem auto;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* background: #eee; */
`

const SignupText = styled.h2`
  font-size: 2.5rem;
  color:#000;
  margin: 1rem 0;
  margin-bottom: 2rem;
`
const InputBox = styled.div`
  width: ${props => props.width};
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin-bottom: 1rem;
  .label{
    font-size: 1.7rem;
    color: rgba(60, 58, 58, 1);
    margin: .5rem;
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
  width: 60%;
  margin: 0 auto;
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
const FlexInput = styled.div`
   width: 100%;
   display: flex;
   justify-content:space-between;
   flex-direction: row;
   align-items: center;
`


function Index() {
  return (
    <SignupContaier>
      <Header>
        <Logo />
        <BackButton />
      </Header>
      <SignupWrapper>
        <SignupText>Sign Up</SignupText>
        <Form>
          <FlexInput>
            <InputBox width="48%">
              <span className="label">First Name</span>
              <Input
                name="firstname"
                type="text"
              />
            </InputBox>
            <InputBox  width="48%">
              <span className="label">Last Name</span>
              <Input
                name="lastname"
                type="text"
              />
            </InputBox>
          </FlexInput>
          <InputBox  width="100%">
            <span className="label"> Security Code</span>
            <Input 
              name="securitycode"
              type="text"
            />
          </InputBox>
           <InputBox  width="100%">
            <span className="label">Email</span>
            <Input 
              name="email"
              type="email"
            />
          </InputBox>
           <InputBox  width="100%">
            <span className="label"> Password</span>
            <Input 
              name="password"
              type="password"
            />
          </InputBox>
           <InputBox  width="100%">
            <span className="label">Confirm Password</span>
            <Input 
              name="confirmpassword"
              type="password"
            />
          </InputBox>
          <SubmitButton type="submit">Submit</SubmitButton>
        </Form>
      </SignupWrapper>
    </SignupContaier>
  )
}

export default Index
