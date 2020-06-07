import React from 'react';
import styled from 'styled-components';


const LoadingContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`


const Loading = () => {
  return (
    <LoadingContainer>
      <h1>Loading...</h1>
    </LoadingContainer>
  )
}

export default Loading;