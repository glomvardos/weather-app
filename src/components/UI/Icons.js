import styled from 'styled-components'

export const MyLocationIcon = () => {
  return (
    <StyledMyLocationIcon viewBox='0 0 24 24'>
      <path
        fill='currentColor'
        d='M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M3.05,13H1V11H3.05C3.5,6.83 6.83,3.5 11,3.05V1H13V3.05C17.17,3.5 20.5,6.83 20.95,11H23V13H20.95C20.5,17.17 17.17,20.5 13,20.95V23H11V20.95C6.83,20.5 3.5,17.17 3.05,13M12,5A7,7 0 0,0 5,12A7,7 0 0,0 12,19A7,7 0 0,0 19,12A7,7 0 0,0 12,5Z'
      />
    </StyledMyLocationIcon>
  )
}

export const LocationIcon = () => {
  return (
    <StyledLocationIcon viewBox='0 0 24 24'>
      <path
        fill='currentColor'
        d='M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z'
      />
    </StyledLocationIcon>
  )
}

export const CloseModalIcon = ({ onShowModal }) => {
  return (
    <StyledCloseModalIcon onClick={onShowModal} viewBox='0 0 24 24'>
      <path
        fill='currentColor'
        d='M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z'
      />
    </StyledCloseModalIcon>
  )
}

export const SearchIcon = ({ isFocus }) => {
  return (
    <StyledSearchIcon isFocus={isFocus} viewBox='0 0 24 24'>
      <path
        fill='currentColor'
        d='M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z'
      />
    </StyledSearchIcon>
  )
}

export const CelsiusIcon = () => {
  return (
    <StyledCelsiusIcon>
      <svg viewBox='0 0 24 24'>
        <path
          fill='currentColor'
          d='M16.5,5C18.05,5 19.5,5.47 20.69,6.28L19.53,9.17C18.73,8.44 17.67,8 16.5,8C14,8 12,10 12,12.5C12,15 14,17 16.5,17C17.53,17 18.47,16.66 19.23,16.08L20.37,18.93C19.24,19.61 17.92,20 16.5,20A7.5,7.5 0 0,1 9,12.5A7.5,7.5 0 0,1 16.5,5M6,3A3,3 0 0,1 9,6A3,3 0 0,1 6,9A3,3 0 0,1 3,6A3,3 0 0,1 6,3M6,5A1,1 0 0,0 5,6A1,1 0 0,0 6,7A1,1 0 0,0 7,6A1,1 0 0,0 6,5Z'
        />
      </svg>
    </StyledCelsiusIcon>
  )
}

export const FahrenheitIcon = () => {
  return (
    <StyledFahrenheitIcon>
      <svg viewBox='0 0 24 24'>
        <path
          fill='currentColor'
          d='M11,20V5H20V8H14V11H19V14H14V20H11M6,3A3,3 0 0,1 9,6A3,3 0 0,1 6,9A3,3 0 0,1 3,6A3,3 0 0,1 6,3M6,5A1,1 0 0,0 5,6A1,1 0 0,0 6,7A1,1 0 0,0 7,6A1,1 0 0,0 6,5Z'
        />
      </svg>
    </StyledFahrenheitIcon>
  )
}

const StyledMyLocationIcon = styled.svg`
  display: block;
  width: 22px;
  height: 22px;
  margin: auto;
  cursor: pointer;
`
const StyledLocationIcon = styled.svg`
  width: 19px;
  height: 25px;
  margin-right: 0.4rem;
`
const StyledCloseModalIcon = styled.svg`
  display: block;
  margin-left: auto;
  width: 24px;
  height: 24px;
  cursor: pointer;
  path {
    fill: #fff;
  }
`
const StyledSearchIcon = styled.svg`
  width: 24px;
  height: 24px;
  path {
    transition: all 200ms;
    fill: ${({ isFocus }) => (isFocus ? '#e7e7eb' : '#616475')};
  }
`

const StyledCelsiusIcon = styled.svg`
  display: block;
  border-radius: 50%;
  width: 24px;
  height: 24px;
`

const StyledFahrenheitIcon = styled.svg`
  display: block;
  border-radius: 50%;
  width: 24px;
  height: 24px;
`
