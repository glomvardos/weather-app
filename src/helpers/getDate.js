export const getDate = date => {
  const getDate = new Date(date).toString() // Convert date to string

  const dateArr = getDate.split(' ').slice(0, 3) // Convert date to array and get day and month

  const getLastItemFromArray = dateArr.pop().split('') // Get the last item of the array and convert the item from string to array

  const getDay =
    getLastItemFromArray[0] === '0' ? getLastItemFromArray.pop() : getLastItemFromArray.join('') // Remove 0 in front of the date and return the date

  dateArr.splice(1, 0, getDay) // Add the date between day and month

  return {
    day: dateArr[0],
    dateMonth: dateArr.slice(1).join(' '),
  }
}
