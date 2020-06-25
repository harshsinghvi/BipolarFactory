import React from 'react'
import { withRouter } from 'react-router-dom';

import {
  LogoWrapper,
  Logoname
} from './style';

function index({ history }) {
  return (
    <LogoWrapper onClick={() => history.push("/")}>
      <Logoname>Bipolar Apartment</Logoname>
    </LogoWrapper>
  )
}

export default withRouter(index)
