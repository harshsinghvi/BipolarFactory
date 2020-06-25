import React from 'react';
import { withRouter } from 'react-router-dom';
import Logo from '../../components/Logo';

import {
  HomeContainer,
  Header,
  MainContentWrapper,
  IntroParagraph,
  SpanIt,
  LoginBtn,
  SignupLink
} from './style';


function index({ history }) {
  return (
    <HomeContainer>
      <Header>
        <Logo />
        <SignupLink to="/signup">Sign Up</SignupLink>
      </Header>
      <MainContentWrapper>
        <IntroParagraph>
          <SpanIt>Hello Residents,</SpanIt> You need to login  to book the facility at
          your preferred time slot.  OR if you have not signed up yet
          over this portal then hurry up. You’re missing a lot.
        </IntroParagraph>
        <LoginBtn onClick={() => history.push('/login')}>
          Login
        </LoginBtn>
      </MainContentWrapper>
    </HomeContainer>
  )
}

export default withRouter(index);
