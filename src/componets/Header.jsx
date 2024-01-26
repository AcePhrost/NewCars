import { Navbar } from "react-bootstrap"
import Container from "react-bootstrap/Container"

export default function Header() {
  return (
    <Navbar className="bg-body-tertiary">
        <Container>
            <Navbar.Brand href="#home">Car Lot</Navbar.Brand>
        </Container>
  </Navbar>
  )
}
