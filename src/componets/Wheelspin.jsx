import { useState } from "react"
import { Button } from "react-bootstrap"

import  Container  from "react-bootstrap/Container"

export default function Wheelspin() {

    const [carPicker, setCarPicker] = useState('Koenigsegg Gemera')

    const Whip = [
        'Porche 911',
        'Ford Shelby',
        'Ford Raptor',
        'Dodge Demon',
        'Dodge TRX',
        'Dodge Viper',
        'Chevy ZL1'
    ]

    function randomWhip(){
        setCarPicker(Whip[Math.floor(Math.random() * Whip.length)] )
    }
    
    return (
        <Container> 
        <h3>Win a car!!!</h3>
        <p>Car: {carPicker}</p>
        <button onClick={randomWhip}>Add to collection</button>
        </Container>
    )
}
