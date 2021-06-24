import { useContext } from 'react'
import styled from 'styled-components'

import DayForecast from './DayForecast'
import { context } from '../../context/context'

const WeatherForecasts = () => {
  const { weatherForecasts } = useContext(context)

  const displayWeather = weatherForecasts.map(weather => (
    <DayForecast
      key={weather.id}
      date={weather.applicable_date}
      icon={weather.weather_state_abbr}
      max={weather.max_temp}
      min={weather.min_temp}
    />
  ))
  return (
    <StyledSection>
      <ForecastsContainer>{displayWeather}</ForecastsContainer>
    </StyledSection>
  )
}

export default WeatherForecasts

const StyledSection = styled.section`
  padding: 5rem;
  background-color: #100e1d;
`

const ForecastsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 120px));
  column-gap: 2.6rem;
  row-gap: 3.2rem;
  justify-content: center;
`
