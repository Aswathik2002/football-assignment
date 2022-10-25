import { actionTypes } from "./actionTypes";

export const addTeam = (team) => {
 return {
    type:actionTypes. ADD_TEAM,
    payload: team,
  };
};

export const addPlayer = (player) => {
  return {
     type:actionTypes. ADD_TEAM,
     payload: player,
   };
 };

export const addPlayerToTeam = (team, player) => {
 return {
    type: actionTypes.ADD_PLAYER_TO_TEAM,
    payload: { team, player },
  };
};

export const removePlayerFromTeam = (team, player) => {
  console.log("remove", player);
 return {
    type: actionTypes.REMOVE_PLAYER_FROM_TEAM,
    payload: { team, player },
  };
};


