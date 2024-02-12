import { useState, useEffect } from "react"
import { Button } from "react-bootstrap"

import  Container  from "react-bootstrap/Container"

export default function Wheelspin() {

    const [carPicker, setCarPicker] = useState('Koenigsegg Gemera')
    const [whip, setWhip]=useState([]);
    // function 
    useEffect(()=>{
        getData();
    },[]);
    function randomWhip(){
        setCarPicker(whip[Math.floor(Math.random() * whip.length)] )
    }
    const getData=async()=>{
        const resp = await fetch("http://localhost:5000/card");
        const json = await resp.json();
        console.log("cards", json.card);
        const temp=[];// year+make+model
        for (let c of json.card)
        {
            temp.push(c.year+" "+c.make+" "+c.model);
        }
        console.log("WHIP:", temp);
        setCarPicker(temp[0]);
        setWhip(temp);
        
    }
    const sendToServer = async(value)=>{

    }
    return (
        <Container> 
        <h3>Win a car!!!</h3>
        <p>Car: {carPicker}</p>
        <button onClick={randomWhip}>Add to collection</button>
        <button onClick={randomWhip}>Scrap it</button>
        </Container>
    )
}
