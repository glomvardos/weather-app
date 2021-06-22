import styled from 'styled-components'
import Weather from '../Weather/Weather'

import { MyLocationIcon } from '../UI/Icons'


const Header = ({ onShowModal }) => {

  return (
    <StyledHeader>
      <StyledContainer>
        <StyledButton onClick={onShowModal}>Search for places</StyledButton>
        <StyledMyLocation>
          <MyLocationIcon />
        </StyledMyLocation>
      </StyledContainer>
      <Weather />
    </StyledHeader>
  )
}

export default Header

const StyledHeader = styled.header`
  background-color: #1E213A;
  min-height: 100vh;
  padding: 2.5rem;
`
const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const StyledButton = styled.button`
  background-color: #6E707A;
  border: none;
  color: inherit;
  font-size: 1.6rem;
  font-weight: 500;
  padding: 1.1rem 1.8rem;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`

const StyledMyLocation = styled.button`
  background-color: #6E707A;
  color: inherit;
  padding: 0.9rem;
  border: none;
  border-radius: 50%; 
`