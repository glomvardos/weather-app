import { createContext, useState } from "react";

const context = createContext()

const ContextProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false)

  const showModalHandler = () => {
    setShowModal(prevState => !prevState)
  }

  const ctx = {
    showModal,
    showModalHandler
  }

  return (
    <context.Provider value={ctx}>
      {children}
    </context.Provider>
  )
}

export { ContextProvider, context }