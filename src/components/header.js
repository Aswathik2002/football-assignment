import React from "react";
import { IoFootballOutline } from "react-icons/io5";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import './Main.css'

export default function Header() {
  const navLinks = [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "Teams",
      link: "/teams",
    },
    {
      text: "Players",
      link: "/players",
    },
    {
      text: "Team Details",
      link: "/teamDetails",
    },
  ];
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home" >
        <div style={{display:"flex",marginRight:"50px",border:"2px solid dark"}}>
        <img src="https://i.pinimg.com/736x/9f/df/e2/9fdfe2aca59e620a99d2dfa31d0e0966.jpg" style={{width:"70px",height:"70px",marginRight:"30px"}}/>
        <h3 style={{ color: "violet",marginTop:"20px" ,fontStyle:"italic"}}> Football - Tournaments</h3>
        </div>
          {/* <IoFootballOutline className="icon" /> */}
        </Navbar.Brand>

         <Nav className="me-auto">
          {navLinks.map((nav) => {
            return (
              <span style={{ marginRight: "2rem" }}>
                <Link to={nav.link} className="link" >
                  {nav.text}
                </Link>
              </span>
            );
          })}
        </Nav> 
     </Container>
    </Navbar>
);
}
