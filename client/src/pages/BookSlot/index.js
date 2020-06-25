import React, { useState } from 'react';
import { withRouter, useParams } from 'react-router-dom';
import moment from 'moment';
import Logo from '../../components/Logo';
import Slot from '../../components/TimeSlot';

import { Images, Timing } from './util';
import styled from 'styled-components';


const BookslotContainer = styled.div`
  width: 100%;
  position: relative;
`
const MainImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 35rem;
  background-image: linear-gradient(rgba(12, 12, 13, 0.43),rgba(12, 12, 13, 0.43)),
                    url(${props => props.image});
  background-size: cover;
  background-position: -5rem;
`
const AboutThis = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .title{
    font-size: 3.5rem;
    color: #fff;
  }
  .sub{
    font-size: 2.5rem;
    color: #FBFD9A;
  }
`
const Header = styled.header`
  width: 85%;
  height: 8rem;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  
`
const Section = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left:0;
`
const TimeSlotContainer = styled.div`
  width: 60%;
  margin: 4rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Today = styled.h2`
 font-size: 2.5rem;
 color: #9E0F54;

`
const TimeSlotWrapper = styled.div`
  width: 90%;
  margin: 1rem auto;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  /* background: #333; */
`
const BookSlot = styled.div`
  width: 60%;
  height: 3.5rem;
  margin: 2rem auto;
  background: #11A466;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4rem;
  font-size: 1.8rem;
  color: #fff;
`
function Index(props) {
  const { id } = useParams();
  const today = moment().format("MMM Do YYYY");


  return (
    <BookslotContainer>
      <Header>
        <Logo />
      </Header>
      <Section>
        <MainImage image={Images[id].image}>
          <AboutThis>
            <h1 className="title">{Images[id].text}</h1>
            <h3 className="sub">Book your slot</h3>
          </AboutThis>
        </MainImage>
        <TimeSlotContainer>
          <Today>{today}</Today>
          <TimeSlotWrapper>
            {
              Timing.map(time => (
                <Slot
                  day={today}
                  time={time}

                />
              )
              )
            }
          </TimeSlotWrapper>
          <BookSlot>Book Your Slot</BookSlot>
        </TimeSlotContainer>
      </Section>

    </BookslotContainer>
  )
}

export default withRouter(Index)
