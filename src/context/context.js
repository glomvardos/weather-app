import { createContext, useEffect, useState } from 'react'

const context = createContext()

const ContextProvider = ({ children }) => {
  const [currentWeather, setCurrentWeather] = useState({})
  const [weatherForecasts, setWeatherForecasts] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const fetchWeatherHandler = async () => {
    setIsLoading(true)
    const response = await fetch(
      'https://cors-anywhere-venky.herokuapp.com/https://www.metaweather.com/api/location/44418'
    )

    if (response.ok) {
      setIsLoading(false)
    }
    const data = await response.json()
    console.log(data)
    const currentWeatherData = {
      ...data.consolidated_weather[0],
      title: data.title,
      id: data.woeid,
    }

    const weatherForecastsData = Object.keys(data)
      .filter(key => key === 'consolidated_weather')
      .flatMap(key => data[key])
      .slice(1)

    setWeatherForecasts(weatherForecastsData)
    setCurrentWeather(currentWeatherData)
  }

  useEffect(() => {
    fetchWeatherHandler()
  }, [])

  const showModalHandler = () => {
    setShowModal(prevState => !prevState)
  }

  const ctx = {
    currentWeather,
    weatherForecasts,
    showModal,
    isLoading,
    showModalHandler,
  }

  return <context.Provider value={ctx}>{children}</context.Provider>
}

export { ContextProvider, context }
