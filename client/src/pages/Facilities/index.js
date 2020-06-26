import React from 'react';

import BackButton from '../../components/Logout';
import Logo from '../../components/Logo';
import { FacilityData } from './util';
import { withRouter } from 'react-router-dom';

import {
  FacilityContainer,
  Header,
  Content,
  FacilitiyBox,
  Facility,
  FacilityInfo,
  LabelBox
} from './style';



function Index({ history }) {
  return (
    <FacilityContainer>
      <Header>
        <Logo />
        <BackButton />
      </Header>
      <Content>
        <LabelBox>Facilities</LabelBox>
        <FacilitiyBox>
          {
            FacilityData.map(data => (
              <Facility
                image={data.image}
                onClick={() => history.push(data.link)}
              >
                <FacilityInfo>{data.text}</FacilityInfo>
              </Facility>
            ))
          }
        </FacilitiyBox>
      </Content>
    </FacilityContainer>
  )
}

export default withRouter(Index)
