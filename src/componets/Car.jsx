
export default function Car({car}) {
  return (
    <p>
        <b>{car.user.username} </b><br/>
        {car.make}
    </p>
  )
}
