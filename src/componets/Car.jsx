
export default function Car({car}) {

  const remove = async(id)=>{
    const API_SERVER_URI=localStorage.getItem("API_SERVER_URI");
    const uri =API_SERVER_URI+"/card/"+id;
    const resp = await fetch(uri,{
      method:"DELETE",
      headers:{
        "Content-Type":"application/json",
    
         }
    })
    const json=await resp.json();
    console.log("JSON:", json)
    alert(json.message);
  }
  return (
    <div>
        <b><span><button onClick={()=>remove(car.id)}>[DEL]</button></span>{car.model} </b><br/>
        {car.make}
    </div>
  )
}
