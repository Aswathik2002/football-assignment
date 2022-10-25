import React, { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Card } from "react-bootstrap";
import { removePlayerFromTeam } from "../action/footballaction";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import { AiFillDelete } from "react-icons/ai";
import './Main.css';

export default function Teams() {
  const updatedTeam = useSelector((state) => {
    return state?.teamsReducer?.teams;
  });
  const dispatch = useDispatch();
  const removePlayer = (teamId, playerId) => {
    console.log("teamId:", teamId, "playerId:", playerId);
    dispatch(removePlayerFromTeam(teamId, playerId));
  };
  useEffect(() => {
    console.log("Upated team", updatedTeam);
  }, [updatedTeam]);

  return (
    <>
      <div
        style={{ marginBottom: "50px" }}
        className="shadowcard d-flex flex-wrap"
      >
        {updatedTeam.map((team) => {
          return (
            <>
                 <div style={{display:"flex",flexWrap:"wrap"}}>
     <Card className="products"
      style={{ width: "16rem",margin:"6px" }}>
      <Card.Img varient="top"  src={team.logo} className="img1"/>  
      <Card.Body className="container1">
      <Card.Title className="cont1t" style={{}}><b>{team.name}</b></Card.Title>
                
                <div>
                    <Dropdown>
                      <Dropdown.Toggle variant="success" id="dropdown-basic" style={{marginLeft:"70px",marginTop:"20px",backgroundColor:"black"}}>
                        Players
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        {team?.players?.map((player) => {
                          return (
                            <Dropdown.Item>
                              <img
                                src={player.photo}
                                style={{ width: "50px",height:"50px" }} 
                              />
                              <h5 style={{fontStyle:"italic"}}>{player.name} </h5>
                              {/* <AiFillDelete style={{width:"20px",height:"20px"}}
                                onClick={() => {
                                  removePlayer(team,player);
                                }}
                              /> */}
                              <Button  style={{ width: "75px",height:"40px" }} 
                               variant="dark" 
                               onClick={() => {
                                  removePlayer(team,player);
                                }}>
                               remove
                                </Button>
                            </Dropdown.Item>
                          );
                        })}
                      </Dropdown.Menu>
                    </Dropdown>
             </div>
                </Card.Body>
              </Card>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
