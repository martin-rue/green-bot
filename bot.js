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


  if(turn % 2 == 1 ){
    if(opponentUsedRadar){
      if( mines.includes({position})){
        if(x=9){
          x = x -2;
        } else if(x=0){
          x = x + 3;
        } else {
          x = x + 1;
        }

        if(y=9){
          y = y  -2;
        } else if(y =0){
          y = y + 3;
        } else {
          y = y + 1;
        }


      } else {
        return move(state.position.x, state.position.y);
      }
    } else {
      if(state.mineRemaining>0){
        return layMine(state.position.x, state.position.y);
      } else {

      }
    }
  } else {
    if(opponentUsedRadar){
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
