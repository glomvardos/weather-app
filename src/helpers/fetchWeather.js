export const fetchWoeid = async url => {
  const response = await fetch(url)

  const data = await response.json()
  const { woeid } = data[0]

  return { response, woeid }
}

export const fetchWeatherForecasts = async woeid => {
  const response = await fetch(
    `https://cors-anywhere-venky.herokuapp.com/https://www.metaweather.com/api/location/${woeid}`
  )

  const data = await response.json()

  const currentWeatherData = {
    ...data.consolidated_weather[0],
    title: data.title,
    id: data.woeid,
  }

  const weatherForecastsData = Object.keys(data)
    .filter(key => key === 'consolidated_weather')
    .flatMap(key => data[key])
    .slice(1)

  return {
    response,
    currentWeatherData,
    weatherForecastsData,
  }
}
