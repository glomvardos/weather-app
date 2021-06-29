import { createContext, useEffect, useState, useCallback } from 'react'
import { fetchWeatherForecasts, fetchWoeid } from '../helpers/fetchWeather'

const context = createContext()

const ContextProvider = ({ children }) => {
  const [currentWeather, setCurrentWeather] = useState({})
  const [weatherForecasts, setWeatherForecasts] = useState([])
  const [woeid, setWoeid] = useState(946738)
  const [coords, setCoords] = useState({})
  const [isFahrenheit, setIsFahrenheit] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  // Get my coordinates
  const fetchCurrentLocation = () => {
    setIsLoading(true)
    setError(null)
    const getPosition = position => {
      const latitude = position.coords.latitude
      const longitude = position.coords.longitude
      setCoords({
        latt: latitude,
        long: longitude,
      })
    }
    navigator.geolocation.getCurrentPosition(getPosition)
  }

  // Get my location
  const getMyLocation = useCallback(async () => {
    setIsLoading(true)
    setError(null)
    const { latt, long } = coords
    if (latt && long) {
      try {
        const { response, woeid: locationWoeid } = await fetchWoeid(
          `https://cors-anywhere-venky.herokuapp.com/https://www.metaweather.com/api/location/search/?lattlong=${latt},${long}`
        )

        if (!response.ok) {
          throw new Error()
        }

        setWoeid(locationWoeid)
      } catch (err) {
        setError('Failed to find your location')
      }
    }
  }, [coords])

  // Fetch Location based on the user input
  const fetchLocationHandler = async location => {
    setError(null)

    try {
      const { response, woeid: locationWoeid } = await fetchWoeid(
        `https://cors-anywhere-venky.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${location}`
      )

      if (response.ok) {
        setIsLoading(false)
      }

      if (!response.ok) {
        throw new Error()
      }

      setWoeid(locationWoeid)
    } catch (err) {
      setIsLoading(false)
      setError('No weather data found for the specified location!')
    }
  }

  // Pass woeid to weather handler
  const fetchWeatherHandler = useCallback(async () => {
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
    getMyLocation()
  }, [getMyLocation])

  useEffect(() => {
    fetchWeatherHandler()
  }, [fetchWeatherHandler])

  const showModalHandler = () => setShowModal(prevState => !prevState)

  const ctx = {
    currentWeather,
    weatherForecasts,
    showModal,
    isLoading,
    isFahrenheit,
    error,
    showModalHandler,
    fetchLocationHandler,
    fetchCurrentLocation,
    setIsFahrenheit,
  }

  return <context.Provider value={ctx}>{children}</context.Provider>
}

export { ContextProvider, context }
