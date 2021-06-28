import { useContext } from 'react'
import styled from 'styled-components'

import Spinner from '../UI/Spinner'
import Error from '../UI/Error'
import Weather from '../Weather/Weather'

import { MyLocationIcon } from '../UI/Icons'
import { context } from '../../context/context'

const Header = ({ onShowModal }) => {
  const { isLoading, error, fetchCurrentLocation } = useContext(context)

  const errorMessage = <Error message={error} />
  const spinner = <Spinner />
  const weather = <Weather />

  return (
    <StyledHeader>
      <StyledContainer>
        <StyledButton onClick={onShowModal}>Search for places</StyledButton>
        <StyledMyLocation onClick={fetchCurrentLocation}>
          <MyLocationIcon />
        </StyledMyLocation>
      </StyledContainer>
      {isLoading && spinner}
      {!isLoading && !error && weather}
      {error && !isLoading && errorMessage}
    </StyledHeader>
  )
}

export default Header

const StyledHeader = styled.header`
  background-color: #1e213a;
  min-height: 100vh;
  padding: 2.5rem;
`
const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const StyledButton = styled.button`
  background-color: #6e707a;
  border: none;
  color: inherit;
  font-size: 1.6rem;
  font-weight: 500;
  padding: 1.1rem 1.8rem;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`

const StyledMyLocation = styled.button`
  background-color: #6e707a;
  color: inherit;
  padding: 0.9rem;
  border: none;
  border-radius: 50%;
`
