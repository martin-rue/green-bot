import { move, layMine, runRadar } from "./turns.js";
import { readRadar } from "./radar.js";
//Comment

const state = {
  gridSize: 0,
  position: null,
  opponent: null,
  opponentUsedRadar: false,
  mineRemaining: 3,
  turn: 0,
  mines: [],
};

export const start = ({ radar }) => {
  const result = readRadar(radar);
  state.gridSize = result.gridSize;
  state.position = result.position;
};

export const turn = ({ minesRemaining, opponentUsedRadar }) => {
  state.turn += 1;
  // state.minesRemaining = minesRemaining;
  // state.opponentUsedRadar = opponentUsedRadar;

  // return move(state.position.x, state.position.y);

  state.position.x = Math.floor(Math.random()*10);
  state.position.y = Math.floor(Math.random()*10);


  if(state.turn % 2 == 1 ){
    if(opponentUsedRadar){
      // if( state.mines.includes({state.position.x, })){
      //   if(state.position.x=9){
      //     state.position.x = state.position.x -2;
      //   } else if(state.position.x=0){
      //     state.position.x= state.position.x + 3;
      //   } else {
      //     state.position.x = state.position.x + 1;
      //   }

      //   if(state.position.y=9){
      //     state.position.y = state.position.y  -2;
      //   } else if(state.position.y =0){
      //     state.position.y= state.position.y + 3;
      //   } else {
      //     state.position.y= state.position.y + 1;
      //   }
      //    return move(state.position.x, state.position.y);

      // } else {
        return move(state.position.x, state.position.y);
      //}
    } else {
      if(state.mineRemaining>0){
        return layMine(state.position.x, state.position.y);
      } else {

        return move(state.position.x, state.position.y);
      }
    }
  } else {
    if(state.opponentUsedRadar){
      return move(state.position.x, state.position.y);
    } else {
      return runRadar();
    }
  }

};

export const handleRadar = ({ radar }) => {
  const result = readRadar(radar);
  state.opponent = result.opponent;
  state.mines = result.mines;
};

export const stop = ({ result, turns }) => {
  console.log(`${result} after ${turns} turns`);
};
