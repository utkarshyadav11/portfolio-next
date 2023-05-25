

import "bootstrap/dist/css/bootstrap.min.css";
import Link  from "next/link";
import { Nav, Navbar} from 'react-bootstrap';
import "../styles/globals.css";
import { Github, Linkedin, Twitter } from "./Icons";
function BasicExample() {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto ">
          <Nav.Link eventKey="1" as={Link} className="nav-link" href="/">
            Home
          </Nav.Link>
          <Nav.Link eventKey="2" as={Link} className="nav-link" href="Know-me">
          About
       </Nav.Link>
          <Nav.Link eventKey="3" as={Link} className="nav-link" href="contact">
            Contact
          </Nav.Link>
        </Nav>
        <div className="iconbox">
          <Link className="icons" href="https://www.linkedin.com/in/utkarsh-yadav-439bb7176/" target={"_blank"}>
            <Linkedin />
          </Link>
          <Link className="icons" href="https://github.com/utkarshyadav11" target={"_blank"}>
            <Github />
          </Link>
          <Link className="icons1" href="https://twitter.com/iUtkarshyadav11" target={"_blank"}>
            <Twitter />
          </Link>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default BasicExample;
