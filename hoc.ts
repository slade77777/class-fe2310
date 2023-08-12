// higher order function
const createAnimal = (name: string, info: object, generateAnimal: (args: any) => void) => {
  return {
    name,
    // @ts-ignore
    ...generateAnimal(info)
  }
}

const createCat = ({legs, color}: {legs: number, color: string}) => {
  return {
    legNumber: legs,
    color,
  }
}

const createFish = ({toothNumber, weight}: {toothNumber: number, weight: number}) => {
  return {
    toothNumber: toothNumber,
    weight: weight
  }
}

console.log(createAnimal('cat', {legs: 3, color: 'red'}, createCat))
console.log(createAnimal('fish', {toothNumber: 28, weight: 60}, createFish))
