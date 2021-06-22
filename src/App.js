import { useContext } from "react"
import Header from "./components/Header/Header"
import SearchBar from "./components/SearchBar/SearchBar"

import { context } from "./context/context"

const App = () => {
  const { showModal, showModalHandler } = useContext(context)

  return (
    <>
      {showModal && <SearchBar onShowModal={showModalHandler} />}
      <Header onShowModal={showModalHandler} />
    </>
  )
}

export default App
