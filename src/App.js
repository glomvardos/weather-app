import { useContext } from 'react'
import Header from './components/Header/Header'
import SearchBar from './components/SearchBar/SearchBar'
import WeatherForecasts from './components/WeatherForecast/WeatherForecasts'

import { context } from './context/context'

const App = () => {
  const { showModal, showModalHandler } = useContext(context)

  return (
    <>
      <SearchBar showModal={showModal} onShowModal={showModalHandler} />
      <Header onShowModal={showModalHandler} />
      <WeatherForecasts />
    </>
  )
}

export default App
