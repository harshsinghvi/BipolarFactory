import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

const InputSlot = styled.input`
   width: 2rem;
  height: 2rem;
  margin-right:.7rem;
  outline: none;
`
const SlotWrapper = styled.div`
  width: 10rem;
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: .5rem 1rem;
  font-size: 1.8rem;
  border-radius: .5rem;
  cursor: pointer;
`
const SlotTime = styled.span`
  font-size: 1.6rem;
`

function Index({ time, day }) {
  const [selectedSlot, setSolt] = useState("");
  const handleChange = (e)=>{
     setSolt({
       day,
       time: e.target.value
     });
  }
  return (
    <SlotWrapper
    >
      <InputSlot
        type="radio"
        name="slot"
        value={time}
        onChange={handleChange}
      />
      <SlotTime>{time}</SlotTime>
    </SlotWrapper>

  )
}

export default Index;
