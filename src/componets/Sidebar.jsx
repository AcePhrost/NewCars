import  Navbar  from "react-bootstrap/Navbar"
import  Nav  from "react-bootstrap/Nav"

export default function Sidebar() {
  return (
    <Navbar sticky='top' className="flex-column sidebar">
        <Nav.Item>
          <Nav.Link href='/'>Feed</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/Cars'>My Collection</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/Wheelspin'>The Wheel</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link href='/register'>Register</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link href='/Login'>Login</Nav.Link>
        </Nav.Item>
    </Navbar>
  )
}
