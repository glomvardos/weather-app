import { useContext } from 'react'
import styled from 'styled-components'

import { getWeatherIcon } from '../../helpers/getWeatherIcon'
import { LocationIcon } from '../UI/Icons'
import { context } from '../../context/context'
import { getDate } from '../../helpers/getDate'
import { convertToFahrenHeit } from '../../helpers/convertToFahrenheit'

const Weather = () => {
  const { currentWeather, isFahrenheit } = useContext(context)

  const degrees = Math.round(currentWeather.the_temp)
  const weatherString = isFahrenheit ? convertToFahrenHeit(degrees).toFixed() : degrees.toFixed()
  const weatherTempLeft = weatherString[0]
  const weatherTempRight =
    weatherString.length >= 3 ? weatherString[1] + weatherString[2] : weatherString[1]

  const { day, dateMonth } = getDate(currentWeather.applicable_date)

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
        <span className='degrees'>{isFahrenheit ? '°​F' : '°​C'}</span>
      </StyledDegrees>
      <StyledWeatherState>{currentWeather.weather_state_name}</StyledWeatherState>
      <StyledDate>
        Today &#183; {day}, {dateMonth}
      </StyledDate>
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

  @media (min-width: 768px) {
    margin-top: 9rem;
  }
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
  @media (min-width: 768px) {
    margin: 8rem 0;
  }
`

const StyledWeatherState = styled.h2`
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
