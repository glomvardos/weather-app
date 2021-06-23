import ReactDOM from 'react-dom'
import styled from 'styled-components'

const Modal = ({ children, showModal }) => {
  const overlays = document.getElementById('overlays')
  return (
    <>
      {ReactDOM.createPortal(<StyledModal showModal={showModal}>{children}</StyledModal>, overlays)}
    </>
  )
}

export default Modal

const StyledModal = styled.div`
  position: fixed;
  background-color: #1e213a;
  width: 100%;
  min-height: 600px;
  left: 0;
  top: 0;
  z-index: 20;
  padding: 2.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  transform: ${({ showModal }) => (showModal ? 'translateY(0)' : 'translateY(-100%)')};
  transition: transform 400ms;
`
