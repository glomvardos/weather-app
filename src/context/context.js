import { createContext, useEffect, useState, useCallback } from 'react'
import { fetchWeatherForecasts, fetchWoeid } from '../helpers/fetchWeather'

const context = createContext()

const ContextProvider = ({ children }) => {
  const [currentWeather, setCurrentWeather] = useState({})
  const [weatherForecasts, setWeatherForecasts] = useState([])
  const [woeid, setWoeid] = useState(946738)
  const [showModal, setShowModal] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  // Fetch Location based on the user input
  const fetchLocationHandler = async location => {
    setError(null)
    try {
      const { response, woeid: locationWoeid } = await fetchWoeid(location)
      if (!response.ok) {
        throw new Error()
      }
      setWoeid(locationWoeid)
    } catch (err) {
      setError('No weather data found for the specified location!')
    }
  }

  // Pass woeid to weather handler
  const fetchWeatherHandler = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    try {
      const { response, currentWeatherData, weatherForecastsData } = await fetchWeatherForecasts(
        woeid
      )

      if (response.ok) {
        setIsLoading(false)
      }

      if (!response.ok) {
        throw new Error()
      }
      setCurrentWeather(currentWeatherData)
      setWeatherForecasts(weatherForecastsData)
    } catch (err) {
      setIsLoading(false)
      setError('Something went wrong! Please try again!')
    }
  }, [woeid])

  useEffect(() => {
    fetchWeatherHandler()
  }, [fetchWeatherHandler])

  const showModalHandler = () => {
    setShowModal(prevState => !prevState)
  }

  const ctx = {
    currentWeather,
    weatherForecasts,
    showModal,
    isLoading,
    error,
    showModalHandler,
    fetchLocationHandler,
  }

  return <context.Provider value={ctx}>{children}</context.Provider>
}

export { ContextProvider, context }
