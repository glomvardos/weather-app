import styled from 'styled-components'

const Footer = () => {
  return (
    <StyledFooter>
      <StyledText>
        created by <strong>glomvardos</strong>
      </StyledText>
    </StyledFooter>
  )
}

export default Footer

const StyledFooter = styled.footer`
  padding: 2.5rem;
  margin-top: 3rem;
  text-align: center;

  @media (min-width: 1440px) {
    padding: 0;
    margin-top: 8rem;
  }
`

const StyledText = styled.p`
  font-size: 1.4rem;
  font-weight: 500;

  strong {
    text-decoration: underline;
  }
`
