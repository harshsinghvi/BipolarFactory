import React from 'react'
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';

const BackButton = styled.div`
  display: inline-block;
  cursor: pointer;
  .fas{
    color: #A8884A;
    font-size: 3.5rem;
  }
`
function index({history}) {
  return (
    <BackButton onClick= {()=> history.goBack()}>
      <i className="fas fa-times"></i>
    </BackButton>
  )
}

export default withRouter(index);
