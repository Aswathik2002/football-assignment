import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { addPlayerToTeam } from "../action/footballaction";
import Dropdown from "react-bootstrap/Dropdown";
import Modal from "react-bootstrap/Modal";

export default function Players() {
 
  const [player, setPlayer] = useState([]);
  // const [teamid, setteamid] = useState();
  const [show, setShow] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState({});

  const dispatch = useDispatch();
  const handleClose = () => {
    setShow(false);
    setSelectedTeam({});
  };
  const handleShow = (player) => {
    setShow(true);
    setPlayer(player);
  };

  const playerData = useSelector((state) => {
    return state.teamsReducer.playerList;
  });

  // useEffect(() => {
  //   }, [playerData]);

  const teamdData = useSelector((state) => {
    return state.teamsReducer.teams;
  });
  console.log("teamDtata", teamdData);

  const addPlayer = (player) => {
    dispatch(addPlayerToTeam(selectedTeam, player));
    setSelectedTeam({});
    handleClose();
  };
  
  return (
    <>
      
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {playerData?.map((player) => {
          
          return (
            <>
 <div style={{display:"flex",flexWrap:"wrap"}}>
       <Card className="products"
          style={{ width: "16rem",margin:"6px" }}>
        <Card.Img varient="top"  src={player.photo} className="img1"/>  
        <Card.Body className="container1">
        <Card.Title className="cont2c" ><b>{player.name}</b></Card.Title>
        <Card.Title className="cont3">{player.position}</Card.Title>

        <Button  style={{margin:"10px",width:"200px",backgroundColor:"black"}}
           disabled={!player.available}
           variant="primary"
           onClick={() => handleShow(player)}
          // onChange={(event) => {
          // const id = Number(event.target.value);
          // setteamid(id);
          //  }}
            >
            ADD PLAYER TO TEAM 
         </Button>
      </Card.Body>
   </Card><br/>
  </div>
            </>
          );
        })}

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Player To Team</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {" "}
           <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Select Team
              </Dropdown.Toggle>
            <Dropdown.Menu>
                {teamdData?.map((team) => {
                  return (
                    <Dropdown.Item
                      href="#"
                      onClick={()=>{setSelectedTeam(team)}} >
                     <img src={team.logo} style={{margin:"5px",width:"30px",}} />
                      {team.name}
                    </Dropdown.Item>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={() => addPlayer(player)}>
             submit
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}