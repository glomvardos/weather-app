import { useContext, useState } from 'react'
import styled from 'styled-components'

import Modal from '../UI/Modal'
import { CloseModalIcon, SearchIcon } from '../UI/Icons'
import { context } from '../../context/context'

const SearchBar = ({ onShowModal, showModal }) => {
  const [isFocus, setIsFocus] = useState(false)
  const [inputLocation, setInputLocation] = useState('')

  const { fetchLocationHandler, showModalHandler } = useContext(context)

  const onSubmitHandler = event => {
    event.preventDefault()

    const enteredLocation = inputLocation.toLocaleLowerCase()

    if (enteredLocation.trim() === '') return

    fetchLocationHandler(enteredLocation)

    setInputLocation('')
    showModalHandler()
  }

  return (
    <Modal showModal={showModal} onShowModal={onShowModal}>
      <CloseModalIcon onShowModal={onShowModal} />
      <StyledForm onSubmit={onSubmitHandler}>
        <StyledInputWrapper
          isFocus={isFocus}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
        >
          <SearchIcon isFocus={isFocus} />
          <StyledInput
            type='text'
            value={inputLocation}
            onChange={event => setInputLocation(event.target.value)}
            placeholder='search location'
          />
        </StyledInputWrapper>
        <StyledSearchButton>Search</StyledSearchButton>
      </StyledForm>
    </Modal>
  )
}

export default SearchBar

const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3rem;
`

const StyledInputWrapper = styled.div`
  max-width: 72%;
  padding: 1rem;
  display: flex;
  align-items: center;
  border: ${({ isFocus }) => (isFocus ? '1px solid #e7e7eb' : '1px solid #616475')};
  transition: all 200ms;
`

const StyledInput = styled.input`
  max-width: 80%;
  background: transparent;
  border: none;
  color: inherit;
  font-size: 1.6rem;
  font-weight: 500;
  margin-left: 1rem;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #616475;
  }
`

const StyledSearchButton = styled.button`
  background-color: #3c47e9;
  color: inherit;
  border: none;
  padding: 1.3rem;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
`
