import React, { useEffect } from "react";
import { PlayerList } from "./playerlist";
import Card from "react-bootstrap/Card";
import { TeamList } from "./Teamlist";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {addTeam } from "../action/footballaction";
import './Main.css';

export default function Home() {
  const dispatch = useDispatch();
  
 //add team
  const onAddTeam = (teamData) => {
    console.log("teamDta", teamData);
    dispatch(addTeam(teamData));
  };

  const Players = PlayerList.map((n) => {
    return (
      <>
    <div style={{display:"flex",flexWrap:"wrap"}}>
       <Card className="products"
        style={{ width: "16rem",margin:"6px" }}>
        <Card.Img varient="top"  src={n.photo} className="img1"/>  
        <Card.Body className="container1">
        <Card.Title className="cont1t"><b>{n.id}</b></Card.Title>
       <Card.Title className="cont2c" >{n.name}</Card.Title>
       <Card.Title className="cont3">{n.position}</Card.Title>
       </Card.Body>
       </Card><br/>
     </div>
      </>
    );
  });
  const teams = TeamList.map((n) => {
    return (
      <>
        <div style={{display:"flex",flexWrap:"wrap"}}>
     <Card className="products"
      style={{ width: "16rem",margin:"6px" }}>
      <Card.Img varient="top"  src={n.logo} className="img1"/>  
      <Card.Body className="container1">
      <Card.Title className="cont1t"><b>{n.id}</b></Card.Title>
     <Card.Title className="cont2c" >{n.name}</Card.Title>
     <Card.Title className="cont3">{n.members}</Card.Title>

     <div className="addcartbtn">
               {" "}
        <Button style={{marginLeft:"55px"}}
          onClick={() => {
           onAddTeam(n);
            }}
          >
          ADD TEAM
        </Button>
      </div>

     </Card.Body>
     </Card><br/>
     </div>
      </>
    );
  });

  return (
    <>
     <div className="d-flex flex-wrap border">{teams}</div>
      <div className="d-flex flex-wrap border">{Players}</div>
    </>
  );
}