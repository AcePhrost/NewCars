import Car from "./Car"

export const Cars = () => {

  const cars = [
    {
    "model" : "G37",
    "make" : "infinti",
    "year" : '2009',
    "car_id" : '1'
    },
    {
    "model" : "SS",
    "make" : "impala",
    "year" : '2008',
    "car_id" : '2'
    },
    {
    "model" : "M35",
    "make" : "infinti",
    "year" : '2010',
    "car_id" : '3'
    },
  ]

  return (
    <>
    { cars.length > 0 ? cars.map(( car ) => {
      return <Car key={car.car_id} car={car} />
    }) : <p> No cars in Inventoy</p> }
    </>
  )
}

