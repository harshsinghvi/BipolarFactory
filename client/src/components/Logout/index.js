import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import {Redirect} from 'react-router-dom';
import { logout } from '../../Redux/actions/user';

const LogoutWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: ${props => props.background};
  margin:  ${props => props.margin};
  
`
const Span = styled.span`
    font-size: ${props => props.size};
    color: ${props => props.color};
    cursor: pointer;
    font-size: 1.6rem;
`

function Index({ backgroundColor, textColor, margin, size }) {
  const dispatch = useDispatch();
  const [loggedOut, setLogOut] = useState(false);
  const handleLogout = () => {
    dispatch(logout());
    setLogOut(true);
  }
  return (
    <LogoutWrapper
      background={backgroundColor}
      margin={margin}
    >
      <Span
        color={textColor}
        onClick={handleLogout}
        size={size}
      >
        Logout
      </Span>
      {loggedOut && <Redirect to="/" />}
    </LogoutWrapper>
  )
}

export default Index
