import React, { useState, useEffect } from 'react';
import { withRouter, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';

import { initializeslot } from '../../Redux/actions/bookslot';
import Logo from '../../components/Logo';
import Slot from '../../components/TimeSlot';
import PulseLoading from '../../components/PulseLoading';

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
const BookSlot = styled.button`
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
  border: none;
  cursor: pointer;
`
const SlotBooked = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position:absolute;
  top: 0;
  left:0;
  z-index: 33;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, .7);
  .slotBookInfo{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30rem;
    height: 10rem;
    background: #fff;
    border-radius: 1rem;
    font-size: 2rem;
    color:  #11A466;
  }
  .errorSlot{
    position: relative;
    width: 30rem;
    height: 10rem;
    background: #fff;
    border-radius: 1.5rem;
    font-size: 2rem;
    color:  #EF5817;
    display: flex;
    justify-content: center;
    align-items: center;
  }

`
const Close = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
  color: red;
`

function Index(props) {
  const [tostOpen, setToast] = useState(false);
  const slotpicked = useSelector(state => state.currentSlotReducer.slotpicked);
  const bookslot = useSelector(state => state.bookslotReducer);
  const dispatch = useDispatch();
  const [slotdata, setSlotData] = useState("");
  const { id, book } = useParams();
  const today = moment().format("MMM Do YYYY");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(slotpicked.time)
    setSlotData({
      time: slotpicked.time,
      event: book
    })
    setToast(!tostOpen);
  }

  useEffect(() => {
    if (slotdata) dispatch(initializeslot(slotdata));
  }, [slotdata])

  const handleModal = () => {
    setToast(!tostOpen);
  }

  console.log(bookslot.slotBooked)
  console.log(bookslot.error)

  return (
    <BookslotContainer>
      {
        (bookslot.bookingSuccess === true && tostOpen === true) &&
        <SlotBooked>
          <div className="slotBookInfo">
            <Close onClick={handleModal}>
              X
            </Close>
            You slot has been booked. !!
          </div>
        </SlotBooked>
      }
      {(bookslot.error !== null && tostOpen === true) &&
        <SlotBooked>
          {
            <div className="errorSlot">
              <Close onClick={handleModal}>
                X
              </Close>
              {bookslot.error}
            </div>
          }
        </SlotBooked>
      }
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
          <form onSubmit={handleSubmit}>
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
            <BookSlot type='submit' >
              {
                bookslot.initialize ? <PulseLoading /> :
                  'Book Your Slot'
              }
            </BookSlot>
          </form>

        </TimeSlotContainer>
      </Section>

    </BookslotContainer>
  )
}

export default withRouter(Index)
