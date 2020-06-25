import styled from 'styled-components';
import { Link } from 'react-router-dom';

import mainpic from '../../img/mainpic.jpg';


export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background-image: linear-gradient(rgba(33, 31, 31, 0.74), rgba(33, 31, 31, 0.74)), 
                    url(${mainpic});
  background-size: cover;
  background-position: top;
`
export const Header = styled.header`
  width: 85%;
  height: 8rem;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
`
export const SignupLink = styled(Link)`
  font-size: 1.6rem;
  color: #fff;
  text-decoration: none;
`
export const MainContentWrapper = styled.div`
  width: 45%;
  margin: 0 auto;
  margin-top: 12rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`
export const IntroParagraph = styled.p`
  font-size: 2.5rem;
  color: #fff;
`
export const LoginBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 3.5rem;
  background-color: #F44848;
  font-size: 2rem;
  margin-top: 4rem;
  color: #fff;
  border-radius: 4rem;
  cursor: pointer;
`
export const SpanIt = styled.span`
  color: rgba(238, 213, 124, 1);
`