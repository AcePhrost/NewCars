import { useState, useEffect } from "react"
import { Button } from "react-bootstrap"

import  Container  from "react-bootstrap/Container"

export default function Wheelspin() {

    const [carPicker, setCarPicker] = useState('Koenigsegg Gemera')
    const [whip, setWhip]=useState([]);
    const [cards, setCards]=useState([]);
    const [user,setUser]=useState({})
    const [whipIndex, setWhipIndex]=useState(-1);
    // function 
    useEffect(()=>{
        getData();
    },[]);
    function randomWhip(){
        const i = Math.floor(Math.random() * whip.length);
        setCarPicker(whip[i] )
        setWhipIndex(i);
        console.log ("Car Picker", carPicker);
        sendToServer(i);
    }
    const getData=async()=>{
        const u = JSON.parse(sessionStorage.getItem("currentUser"))
        console.log("currentUser",u)
        setUser(u);
        const resp = await fetch("http://localhost:5000/api/card");
        const json = await resp.json();
       
        const temp=[];// year+make+model
        const cardList=[];
        for (let c of json.card)
        {
            temp.push(c.year+" "+c.make+" "+c.model);
            cardList.push({year:c.year,make:c.make,model:c.model})
        }
        console.log("cardList:", cardList);
        setCards(cardList);
        setCarPicker(temp[0]);
        setWhip(temp);
        
    }
    const sendToServer = async(i)=>{
        
        const data ={
        
            user_id:user.id,
            year:cards[i].year,
            make:cards[i].make,
            model:cards[i].model,
        }
        console.log("sendToServer", data);
        const resp=await fetch("http://localhost:5000/api/card",
        {
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            
                 },
            body:JSON.stringify(data)
        });
        const json=await resp.json();
        console.log("RESP", json);
        alert(json.message)
    }
    return (
        <Container> 
        <h3>Win a car!!!</h3>
        <p>Car: {carPicker}</p>
        <button onClick={randomWhip}>Add to collection</button>
        {/* <button onClick={randomWhip}>Scrap it</button> */}
        </Container>
    )
}
