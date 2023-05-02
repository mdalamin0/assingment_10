
import { useContext } from "react";
import ActiveLink from "../../../Components/ActiveLink/ActiveLink";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import './NavigationBar.css'
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {
    const { user } = useContext(AuthContext);
    return (
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home"><h3 className="fw-bold text-warning">Chef Savvy</h3></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <ActiveLink to = '/'>Home</ActiveLink>
              <ActiveLink to = '/blog'>Blog</ActiveLink>
              <ActiveLink to = '/login'>Login</ActiveLink>
              <ActiveLink to = '/register'>Sign Up</ActiveLink>
            </Nav>
            <div>
                {
                    user ? <><button className="btn btn-outline-primary fw-semibold">Log Out</button> <span className="h6">{user?.displayName}</span> </> : <Link to = '/login'><button className="btn btn-outline-primary">Login</button></Link>
                }
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default NavigationBar;