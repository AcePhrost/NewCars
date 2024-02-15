import { useState, useEffect } from "react"
import Car from "./Car"

export const Cars = () => {
  const [cars, setCars]=useState([]);
  const [user,setUser]=useState({})
  const [loading, setLoading]=useState(true);
  useEffect(()=>{
    getData();
  },[]);

  const getData=async()=>{
      const API_SERVER_URI=localStorage.getItem("API_SERVER_URI");
      const user = JSON.parse(sessionStorage.getItem("currentUser"))
      console.log("currentUser",user)
      setUser(user);
      const uri =API_SERVER_URI+"/card/user/"+user.id;
      console.log("URI:", uri);
      const resp = await fetch(uri);
      const json = await resp.json();

      
      const carList=[];
      for (let c of json.card)
      {
        carList.push({id:c.id,year:c.year,make:c.make,model:c.model})
      }
      console.log("carList:", carList);
      setCars(carList);
      setLoading(false);
  
  }
  return (
    <>
    { !loading ? cars.map(( car ) => (
      
       <Car key={car.id} car={car} />
    )) : <p> No cars in Inventoy</p> }
    </>
  )
}