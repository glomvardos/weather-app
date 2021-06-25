import styled from 'styled-components'

const Highlight = ({ name, value, windDirection }) => {
  let metric
  switch (name) {
    case 'Wind status':
      metric = ' mph'
      break
    case 'Humidity':
      metric = '%'
      break
    case 'Visibility':
      metric = ' miles'
      break
    case 'Air Pressure':
      metric = ' mb'
      break
    default:
      break
  }

  return (
    <StyledContainer>
      <HighlightName>{name}</HighlightName>
      <HighlightValue>
        {name === 'Visibility' ? value?.toFixed(1) : value?.toFixed()}
        <span>{metric}</span>
      </HighlightValue>
      {name === 'Wind status' && <Compass>{windDirection}</Compass>}
      {name === 'Humidity' && (
        <BarWrapper>
          <Percentages>
            <p>0</p>
            <p>50</p>
            <p>100</p>
          </Percentages>
          <Bar>
            <Fill fill={value} />
          </Bar>
          <p className='percentage'>%</p>
        </BarWrapper>
      )}
    </StyledContainer>
  )
}

export default Highlight

const StyledContainer = styled.div`
  background-color: #1e213a;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`
const HighlightName = styled.h4`
  font-size: 1.6rem;
  font-weight: 500;
  margin-bottom: 2rem;
`

const HighlightValue = styled.h2`
  font-size: 6.4rem;
  span {
    font-size: 3.6rem;
    font-weight: 400;
  }
`
const Compass = styled.p`
  color: #e7e7eb;
  font-size: 1.4rem;
  font-weight: 500;
  margin-top: 3rem;
`

const BarWrapper = styled.div`
  width: 229px;

  .percentage {
    text-align: right;
  }

  p {
    font-size: 1.2rem;
    font-weight: bold;
    color: #a09fb1;
  }
`
const Percentages = styled.div`
  display: flex;
  justify-content: space-between;
`
const Bar = styled.div`
  background-color: white;
  width: 100%;
  height: 8px;
  border-radius: 80px;
`

const Fill = styled.div`
  background-color: #ffec65;
  width: ${({ fill }) => fill + '%'};
  height: 100%;
  border-radius: 80px;
`
