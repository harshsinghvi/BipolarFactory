import styled from 'styled-components';

export const FacilityContainer = styled.div`
  width: 100%;
  height: 100vh;
`
export const Header = styled.header`
  width: 85%;
  height: 8rem;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
`
export const Content = styled.div`
  width: 71%;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
`
export const LabelBox = styled.div`
  width: 100%;
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
`
export const FacilitiyBox = styled.div`
  width: 95%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;
  border-radius: 1rem;
`
export const Facility = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 27rem;
  height: 20rem;
  margin: 1rem 1.3rem;
  background-image: linear-gradient(rgba(12, 12, 13, 0.43), rgba(12, 12, 13, 0.43)),
                     url(${props => props.image});
  background-size: cover;
  background-position: top;
  border-radius: 1rem;
  cursor: pointer;
`
export const FacilityInfo = styled.h3`
  font-size: 2rem;
  color: #fff;
`