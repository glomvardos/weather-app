import { useContext } from 'react'
import styled from 'styled-components'

import { getWeatherIcon } from '../../helpers/getWeatherIcon'
import { LocationIcon } from '../UI/Icons'
import { context } from '../../context/context'

const Weather = () => {
  const { currentWeather } = useContext(context)

  const weatherString = Math.round(currentWeather.the_temp).toString()
  const weatherTempLeft = weatherString[0]
  const weatherTempRight = weatherString[1]

  return (
    <StyledContainer>
      <StyledImgWrapper>
        <img
          src={getWeatherIcon(currentWeather.weather_state_abbr)}
          alt={currentWeather.weather_state_name}
        />
      </StyledImgWrapper>
      <StyledDegrees>
        <span className='left'>{weatherTempLeft}</span>
        <span className='right'>{weatherTempRight}</span>
        <span className='degrees'>°​C</span>
      </StyledDegrees>
      <StyledWeatherStatus>{currentWeather.weather_state_name}</StyledWeatherStatus>
      <StyledDate>Today &#183; {currentWeather.applicable_date}</StyledDate>
      <StyledLocation>
        <LocationIcon />
        {currentWeather.title}
      </StyledLocation>
    </StyledContainer>
  )
}

export default Weather

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 7rem;
`

const StyledImgWrapper = styled.div`
  width: 150px;
  height: 174px;

  img {
    max-width: 100%;
    object-fit: cover;
  }
`

const StyledDegrees = styled.h1`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  .left {
    font-size: 12rem;
    font-weight: 500;
    margin-bottom: 1.5rem;
  }
  .right {
    font-size: 14rem;
    font-weight: 500;
  }

  .degrees {
    font-size: 4.8rem;
    color: #a09fb1;
    margin-top: 2rem;
    font-weight: 100;
  }
`

const StyledWeatherStatus = styled.h2`
  color: #a09fb1;
  font-size: 3.6rem;
  font-weight: 600;
`

const StyledDate = styled.p`
  margin: 4.8rem 0 3.3rem 0;
  font-size: 1.8rem;
  font-weight: 500;
`

const StyledLocation = styled.p`
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  font-weight: 600;
`
