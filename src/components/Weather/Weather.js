import { useEffect } from 'react'
import styled from 'styled-components'

const Weather = () => {

  const fetchWeatherHandler = async () => {
    const response = await fetch('https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/44418')
    const data = await response.json()
    console.log(data)
  }

  useEffect(() => {
    fetchWeatherHandler()
  }, [])

  return (
    <StyledContainer>
      <StyledImgWrapper>
        <img />
      </StyledImgWrapper>

      <StyledDegrees></StyledDegrees>
      <StyledWeatherStatus></StyledWeatherStatus>
      <StyledDate></StyledDate>
      <StyledLocation></StyledLocation>
    </StyledContainer>
  )
}

export default Weather

const StyledContainer = styled.div``

const StyledImgWrapper = styled.div``

const StyledDegrees = styled.h1``

const StyledWeatherStatus = styled.h2``

const StyledDate = styled.p``

const StyledLocation = styled.p``