const filterImageString = (string: string) => {
  return string !== null ? string.match("[^/]+$")[0] : "default"
}

export default filterImageString
