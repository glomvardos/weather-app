import styled from 'styled-components'
import { getDate } from '../../helpers/getDate'
import { getWeatherIcon } from '../../helpers/getWeatherIcon'

const DayForecast = ({ date, icon, max, min, i, isFahrenheit }) => {
  const maxDegrees = max.toFixed()
  const lowDegrees = min.toFixed()

  const { day, dateMonth } = getDate(date)

  return (
    <StyledContainer>
      <StyledDate>{i === 0 ? 'Tomorrow' : `${day}, ${dateMonth}`}</StyledDate>
      <StyledImgWrapper>
        <img src={getWeatherIcon(icon)} alt={icon} />
      </StyledImgWrapper>
      <StyledDegreesContainer>
        <StyledMaxDegrees>
          {maxDegrees}
          {isFahrenheit ? '°​F' : '°​C'}
        </StyledMaxDegrees>
        <StyledLowDegrees>
          {lowDegrees}
          {isFahrenheit ? '°​F' : '°​C'}
        </StyledLowDegrees>
      </StyledDegreesContainer>
    </StyledContainer>
  )
}

export default DayForecast

const StyledContainer = styled.div`
  background-color: #1e213a;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 120px;
  height: 177px;
`

const StyledDate = styled.h4`
  font-size: 1.6rem;
  font-weight: 500;
  margin-top: 1.8rem;
`

const StyledImgWrapper = styled.div`
  width: 56px;
  height: 62px;
  margin: 1rem 0 3rem 0;
  img {
    max-width: 100%;
    object-fit: cover;
  }
`

const StyledDegreesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.6rem;
  font-weight: 500;
`

const StyledMaxDegrees = styled.p`
  color: #e7e7eb;
  margin-right: 1.6rem;
`

const StyledLowDegrees = styled.p``
