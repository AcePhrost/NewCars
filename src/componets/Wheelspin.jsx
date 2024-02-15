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
    const API_SERVER_URI=localStorage.getItem("API_SERVER_URI");
    console.log("API_SERVER_URI",API_SERVER_URI)
    useEffect(()=>{
        getData();
    },[]);
    function randomWhip(){
        if(user.tokens<1)
        {
            alert("Out of tokens");
        }
        const i = Math.floor(Math.random() * whip.length);
        setCarPicker(whip[i] )
        setWhipIndex(i);
        console.log ("Car Picker", carPicker);
        
        sendToServer(i);
    }
    const getData=async()=>{
        let u = JSON.parse(sessionStorage.getItem("currentUser"))
        console.log("u1", u);
        const ur = await fetch(API_SERVER_URI+"/user/"+u.id);
        u=await ur.json();
        setUser(u);
        console.log("currentUser",u)
        const resp = await fetch(API_SERVER_URI+"/card");
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
        if(json.status===1)
        {
            user.tokens--;
            console.log(user)
            sessionStorage.setItem("currentUser",JSON.stringify(user))
            setUser(user);
            console.log(user);
        }
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
