import styled from 'styled-components'

import Modal from '../UI/Modal'
import { CloseModalIcon } from '../UI/Icons'

const SearchBar = ({ onShowModal }) => {
  return (
    <Modal onShowModal={onShowModal}>
      <StyledContainer>
        <CloseModalIcon onShowModal={onShowModal} />
      </StyledContainer>
    </Modal>
  )
}

export default SearchBar

const StyledContainer = styled.div``

