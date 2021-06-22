import styled from 'styled-components'

export const MyLocationIcon = () => {
  return <StyledMyLocationIcon viewBox="0 0 24 24">
    <path fill="currentColor" d="M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M3.05,13H1V11H3.05C3.5,6.83 6.83,3.5 11,3.05V1H13V3.05C17.17,3.5 20.5,6.83 20.95,11H23V13H20.95C20.5,17.17 17.17,20.5 13,20.95V23H11V20.95C6.83,20.5 3.5,17.17 3.05,13M12,5A7,7 0 0,0 5,12A7,7 0 0,0 12,19A7,7 0 0,0 19,12A7,7 0 0,0 12,5Z" />
  </StyledMyLocationIcon>
}

export const LocationIcon = () => {
  return <StyledLocationIcon viewBox="0 0 24 24">
    <path fill="currentColor" d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
  </StyledLocationIcon>
}

export const CloseModalIcon = ({ onShowModal }) => {
  return <StyledCloseModalIcon onClick={onShowModal} viewBox="0 0 24 24">
    <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
  </StyledCloseModalIcon>
}

const StyledMyLocationIcon = styled.svg`
  display: block;
  width: 22px;
  height: 22px;
  margin: auto;
  
`
const StyledLocationIcon = styled.svg`
  width: 14px;
  height: 20px;

`
const StyledCloseModalIcon = styled.svg`
  display: block;
  margin-left: auto ;
  width: 14px;
  height: 14px;
  path {
    fill: #fff;
  }

`
