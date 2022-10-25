import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import './Main.css'

export default function Teams() {
  const [teamData, setTeamData] = useState();
  const { teams } = useSelector((state) => {
    return state?.teamsReducer;
  });
  useEffect(() => {
  setTeamData(teams);
  }, [teams]);
  return (
    <>
      <div
        style={{ marginBottom: "50px" }}
        className="shadowcard d-flex flex-wrap"
      >
        {teamData?.map((n) => {
          return (
          <div style={{display:"flex",flexWrap:"wrap"}}>
            <Card className="products"
            style={{ width: "16rem",margin:"6px" }}>
            <Card.Img varient="top"  src={n.logo} className="img1"/>  
            <Card.Body className="container1">
            <Card.Title className="cont2c" >{n.name}</Card.Title>
            </Card.Body>
           </Card>
           </div>
          );
        })}
      </div>
    </>
  );
}
