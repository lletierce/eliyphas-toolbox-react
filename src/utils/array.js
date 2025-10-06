export const findObjectById = (id, array) => {
    return array.find((itemInArray) => itemInArray.id === id)
  }

export function sortByName(array) {
  return [...array].sort((a, b) => {
    return a.name.localeCompare(b.name, 'fr', { sensitivity: 'base' });
  });
}