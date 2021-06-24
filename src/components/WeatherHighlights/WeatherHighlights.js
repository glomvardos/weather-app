import { useContext } from 'react'
import styled from 'styled-components'

import Highlight from './Highlight'
import { context } from '../../context/context'

const WeatherHighlights = () => {
  const { currentWeather } = useContext(context)

  return (
    <StyledSection>
      <StyledTitle>Today's Highlights</StyledTitle>
      <HighlightContainer>
        <Highlight
          name='Wind status'
          value={currentWeather.wind_speed}
          windDirection={currentWeather.wind_direction_compass}
        />
        <Highlight name='Humidity' value={currentWeather.humidity} />
        <Highlight name='Visibility' value={currentWeather.visibility} />
        <Highlight name='Air Pressure' value={currentWeather.air_pressure} />
      </HighlightContainer>
    </StyledSection>
  )
}

export default WeatherHighlights

const StyledSection = styled.section`
  background-color: #100e1d;
  padding: 0 2.4rem 2.4rem 2.4rem;
`

const StyledTitle = styled.h2`
  font-size: 2.4rem;
  margin-bottom: 3.2rem;
`

const HighlightContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 3.2rem;
`
