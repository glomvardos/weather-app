import snow from '../assets/Snow.png'
import sleet from '../assets/Sleet.png'
import hail from '../assets/Hail.png'
import thunderstorm from '../assets/Thunderstorm.png'
import heavyRain from '../assets/HeavyRain.png'
import lightRain from '../assets/LightRain.png'
import showers from '../assets/Shower.png'
import heavyCloud from '../assets/HeavyCloud.png'
import lightCloud from '../assets/LightCloud.png'
import clear from '../assets/Clear.png'

export const getWeatherIcon = abbr => {
  let icon
  switch (abbr) {
    case 'sn':
      icon = snow
      break
    case 'sl':
      icon = sleet
      break
    case 'h':
      icon = hail
      break
    case 't':
      icon = thunderstorm
      break
    case 'hr':
      icon = heavyRain
      break
    case 'lr':
      icon = lightRain
      break
    case 's':
      icon = showers
      break
    case 'hc':
      icon = heavyCloud
      break
    case 'lc':
      icon = lightCloud
      break
    case 'c':
      icon = clear
      break

    default:
      break
  }
  return icon
}
