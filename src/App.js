import { useContext } from 'react'
import Header from './components/Header/Header'
import SearchBar from './components/SearchBar/SearchBar'
import WeatherForecasts from './components/WeatherForecast/WeatherForecasts'
import WeatherHighlights from './components/WeatherHighlights/WeatherHighlights'
import Footer from './components/Footer/Footer'
import Spinner from './components/UI/Spinner'

import { context } from './context/context'

const App = () => {
  const { showModal, showModalHandler, error, isLoading } = useContext(context)

  return (
    <>
      <SearchBar showModal={showModal} onShowModal={showModalHandler} />
      <Header onShowModal={showModalHandler} />
      {!error && isLoading && <Spinner bg='dark' />}
      {!error && !isLoading && (
        <main>
          <WeatherForecasts />
          <WeatherHighlights />
          <Footer />
        </main>
      )}
    </>
  )
}

export default App
