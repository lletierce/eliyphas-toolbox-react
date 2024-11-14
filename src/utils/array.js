export const findObjectById = (id, array) => {
    return array.find((itemInArray) => itemInArray.id === id)
  }