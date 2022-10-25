import { actionTypes } from "../action/actionTypes";

const initialState = {
  teams: [
    {
      id:1,
      logo:"https://lh3.googleusercontent.com/OQZi4ckWAs7UrOlZEPefXZgJOcdJuSM5FSH9zqD5rMg6c2MOaxcKpV5IMrb1Tju98fWyNmcI33E4RGb0uC09Ej4W",
      name:"FC Barcelona",
      players:[]
      
  },
  {
      id:2,
      logo:"https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/1200px-Real_Madrid_CF.svg.png",
      name:"Real Madrid CF",
      players:[]
      
  },
  {
      id:3,
      logo:"https://lh3.googleusercontent.com/dtFuCbfBxODq263Ramrmu-7jXxjsdL2YdyXA243PtwLr2U5xOAaUi63FwSgDRKuNTXCyPEyghjW-D2EVlfjnp4HU",
      name:"Paris Saint-Germain F.C.",
      players:[]
      
  },
  {
      id:4,
      logo:"https://lh3.googleusercontent.com/KNyKMfQqqVcLYAROYJ6KPW7nqmyMMcuc7npdzuzYI9KXhnZDJ3Wkfqy_apcQTDgq2QlNp9LzqQly06N5qsNxUOLT",
      name:"Manchester United F.C.",
      players:[]
      
  },
  {
      id:5,
      logo:"https://i.pinimg.com/originals/b4/13/ce/b413cef3ee1c28826dfd36e28242fcb9.png",
      name:"Manchester City F.C.",
      players:[]
      
  },
  {
      id:6,
      logo:"https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/1200px-Liverpool_FC.svg.png",
      name:"Liverpool F.C.",
      players:[]
      
  },
  {
      id:7,
      logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/1200px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png",
      name:"FC Bayern Munich",
      players:[]
      
  },
  {
      id:8,
      logo:"https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/1200px-Chelsea_FC.svg.png",
      name:"Chelsea F.C.",
      players:[]
      
  },
  {
      id:9,
      logo:"https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Arsenal_FC.svg/1200px-Arsenal_FC.svg.png",
      name:"Arsenal F.C.",
      players:[]
      
  }, 
  ],
  playerList: [
    {
      photo:"https://th.bing.com/th/id/OIP.fXLSPS5HmL29KG-ut8fACAHaFP?pid=ImgDet&rs=1",
      id:10 , 
      name:"Messi",
      position:"midfield",
      available: true,
    },
    {
      photo:"https://th.bing.com/th/id/OIP.-swf9KH5icXFLnKPeH20oQHaFH?pid=ImgDet&rs=1",
      id:11 , 
      name:"Neymar",
      position:"offense",
      available: true,
    },
    {
      photo:"https://idsb.tmgrup.com.tr/ly/uploads/images/2020/09/08/thumbs/800x531/56936.jpg",
      id:7 , 
      name:"Ronaldo",
      position:"defense",
      available: true,
    },
    {
      photo:"https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https://everythingbarca.com/wp-content/uploads/getty-images/2017/07/1062097906.jpeg",
      id:1 , 
      name:"Munir",
      available: true,
      position:"midfield",
    },
    {
      photo:"https://sortitoutsi.net/uploads/face/67196201.png",
      id:2 , 
      name:"Jokin",
      available: true,
      position:"forward",
    },
    {
      photo:"https://e2.365dm.com/11/10/800x600/Marlon-Jackson-Northampton-now-back-at-Bristo_2667758.jpg?20111019161602",
      id:3 , 
      name:"Marlon",
      position:"offense",
      available: true,
    },
    {
      photo:"https://i.pinimg.com/736x/44/f7/3a/44f73aefca11ff971b44f49f55979261--european-soccer-football-soccer.jpg",
      id:4 , 
      name:"Pique",
      position:"goalkeeper",
      available: true,
    },
    {
      photo:"https://i.pinimg.com/originals/3a/fe/9a/3afe9a0ba045fa676b0a105fe3b235b4.jpg",
      id:1 , 
      name:"Rakitic",
      position:"goalkeeper",
      available: true,
    },
    {
      photo:"https://www.liveabout.com/thmb/F-s_YOsDO-peQfDecHz-BoONIfc=/3000x2341/filters:no_upscale():max_bytes(150000):strip_icc()/451937514-56aa3b705f9b58b7d002c375.jpg",
      id:5, 
      name:"Sergio",
      position:"midfield",
      available: true,
    },
    {
      photo:"https://i.pinimg.com/originals/df/47/e1/df47e1683688cb158de5e94aca60a15e.jpg",
      id:6 , 
      name:"Arda",
      position:"defense",
      available: true,
    },
  ],
};
export const teamReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes. ADD_TEAM:
      return {
        ...state,
        teams: [...state.teams, action.payload],
      };
     
      case actionTypes. ADD_PLAYER:
      return {
        ...state,
        playerList: [...state.playerList, action.payload],
      };
     
      case actionTypes.ADD_PLAYER_TO_TEAM:
      const stateCopy = { ...state };
      const team = stateCopy.teams.find((t) => t.id == action.payload.team.id);
      if (team) {
        let playerAlreadyAdded = false;
        stateCopy.teams.forEach((t) => {
          const existingPlayerWithSameId = t.players.find(
            (p) => p.id == action.payload.playerId
          );
          if (existingPlayerWithSameId) {
            playerAlreadyAdded = true;
          }
        });

        if (playerAlreadyAdded == false) {
          team.players.push(action.payload.player);
          const playerFromPList = stateCopy?.playerList?.find(
            (p) => p.id === action.payload.player.id
          );
          if (playerFromPList) {
            playerFromPList.available = false;
          }
          return stateCopy;
        }
      }

      return stateCopy;

    case actionTypes. REMOVE_PLAYER_FROM_TEAM:
      const stateClone = { ...state };
      const teams=[...state.teams]
      const playerList=[...state.playerList]
      const teamObj = teams.find(
        (t) => t.id == action.payload.team.id
      );
      console.log("reducr teamId:", action.payload);

      teamObj.players = teamObj?.players?.filter(
        (p) => p.id !== action.payload.player.id
      );
      
      const deletedPlayer=playerList.find((player)=>player.id==action.payload.player.id)
      deletedPlayer.available=true;
      console.log("stateClone", stateClone.playerList);
      return {
        ...state,
        teams:teams,
        playerList:playerList
      };

    default:
      return state;
      break;
  }
};
