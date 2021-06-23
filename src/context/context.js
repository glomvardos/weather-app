import { createContext, useEffect, useState } from 'react'

const context = createContext()

const ContextProvider = ({ children }) => {
  const [todayWeather, setTodayWeather] = useState({})
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

    const transformedData = {
      ...data.consolidated_weather[0],
      title: data.title,
      id: data.woeid,
    }

    setTodayWeather(transformedData)
  }

  useEffect(() => {
    fetchWeatherHandler()
  }, [])

  const showModalHandler = () => {
    setShowModal(prevState => !prevState)
  }

  const ctx = {
    todayWeather,
    showModal,
    isLoading,
    showModalHandler,
  }

  return <context.Provider value={ctx}>{children}</context.Provider>
}

export { ContextProvider, context }
