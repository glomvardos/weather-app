import ReactDOM from 'react-dom'
import styled, { keyframes } from 'styled-components'

const Modal = ({ children, onShowModal }) => {

  const overlays = document.getElementById('overlays')
  return (
    <>
      {ReactDOM.createPortal(<StyledBackdrop onClick={onShowModal} />, overlays)}
      {ReactDOM.createPortal(<StyledModal>{children}</StyledModal>, overlays)}
    </>
  )
}

export default Modal

const slideDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-60%);
  }

  70% {
    opacity: 0.7;
    transform: translateY(-20%);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

const StyledBackdrop = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.25);
  z-index: 10;
  width: 100%;
  height: 100%;
`

const StyledModal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  min-height: 600px;
  padding: 2.5rem;
  background-color: #1E213A;
  z-index: 20;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  animation: ${slideDown} 250ms ease-out forwards;
  transform: translateY(-100%);
`