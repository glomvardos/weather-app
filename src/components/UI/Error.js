import styled from 'styled-components'

const Error = ({ message }) => {
  return (
    <StyledError>
      <StyledMessage>{message}</StyledMessage>
    </StyledError>
  )
}

export default Error

const StyledError = styled.div`
  margin: 35vh auto;
  text-align: center;
`

const StyledMessage = styled.p`
  font-size: 2.5rem;
  line-height: 3.2rem;
`
