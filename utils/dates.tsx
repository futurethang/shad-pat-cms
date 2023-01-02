export const parseDate = (date: string) => {
  const dateNums = date.split('-')
  const parsed = dateNums.map((i) => parseInt(i))
  parsed[1]--
  return parsed
}

export const readableDate = (date: string) => {
    const [y, m, d] = parseDate(date)
    const trueDate = new Date(y, m, d)
    return trueDate.toLocaleDateString()
}

export const sortableDate = (date: string) => {
    const [y, m, d] = parseDate(date)
    return new Date(y, m, d)
}