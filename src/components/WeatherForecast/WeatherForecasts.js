import { useContext, useState } from 'react'
import styled from 'styled-components'

import DayForecast from './DayForecast'
import { context } from '../../context/context'
import { CelsiusIcon, FahrenheitIcon } from '../UI/Icons'
import { convertToFahrenHeit } from '../../helpers/convertToFahrenheit'

const WeatherForecasts = () => {
  const { weatherForecasts, isFahrenheit, setIsFahrenheit } = useContext(context)

  const celsiusHandler = () => setIsFahrenheit(false)
  const fahrenheitHandler = () => setIsFahrenheit(true)

  const displayWeather = weatherForecasts.map((weather, i) => (
    <DayForecast
      key={weather.id}
      date={weather.applicable_date}
      icon={weather.weather_state_abbr}
      max={isFahrenheit ? convertToFahrenHeit(weather.max_temp) : weather.max_temp}
      min={isFahrenheit ? convertToFahrenHeit(weather.min_temp) : weather.min_temp}
      i={i}
      isFahrenheit={isFahrenheit}
    />
  ))
  return (
    <StyledSection>
      <StyledContainer>
        <StyledCelsius isFahrenheit={isFahrenheit} onClick={celsiusHandler}>
          <CelsiusIcon />
        </StyledCelsius>
        <StyledFahrenheit isFahrenheit={isFahrenheit} onClick={fahrenheitHandler}>
          <FahrenheitIcon />
        </StyledFahrenheit>
      </StyledContainer>
      <ForecastsContainer>{displayWeather}</ForecastsContainer>
    </StyledSection>
  )
}

export default WeatherForecasts

const StyledSection = styled.section`
  padding: 5rem;
`

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2.5rem;
`

const StyledCelsius = styled.button`
  background-color: ${({ isFahrenheit }) => (!isFahrenheit ? '#e7e7eb' : '#585676')};
  color: ${({ isFahrenheit }) => (!isFahrenheit ? '#585676' : '#e7e7eb')};
  padding: 1rem 1.2rem;
  border-radius: 50px;
  border: none;
  cursor: pointer;
`

const StyledFahrenheit = styled(StyledCelsius)`
  background-color: ${({ isFahrenheit }) => (isFahrenheit ? '#e7e7eb' : '#585676')};
  color: ${({ isFahrenheit }) => (isFahrenheit ? '#585676' : '#e7e7eb')};
  margin-left: 1rem;
`

const ForecastsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 120px));
  column-gap: 2.6rem;
  row-gap: 3.2rem;
  justify-content: center;
`
