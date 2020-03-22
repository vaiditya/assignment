import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import GameZoneComponent from "../../components/GameZone";
import positions from "./config";
import { getWinningLogic, actionForAI } from "./utils";
// Static initialization for UNDO functionality
let pushedStack = [];
/**
 * @param {*} { history }
 * @returns Gamezone component
 */
const GameZone = ({ history }) => {
  const {
    location: { state }
  } = history;

  //Initialization of state variables
  const details = state;
  const [grid, setGrid] = useState(positions);
  const [chance, setChance] = useState(true);
  const [score, setScore] = useState({ p1Score: 0, p2Score: 0, turn: true });
  const [timer, setTimer] = useState(0);

  // Check for details availability
  useEffect(() => {
    if (!details) {
      history.push("/");
    }
  }, []);

  // Timer functionality between the games
  useEffect(() => {
    if (timer > 0) {
      setTimeout(() => {
        setTimer(timer - 1);
        if (timer === 1) {
          setGrid(positions);
          setChance(false);
          setTimeout(() => setChance(true), 1000);
        }
      }, 1000);
    }
  }, [timer]);

  // Changes made on "chance" transition between "X" and "O"
  useEffect(() => {
    //Slots initialization for "AI" mode
    let remainingSlots = [-4, -3, -2, -1, 0, 1, 2, 3, 4];

    // Gatering "X" written cells
    const xArray = grid
      .filter(item => {
        if (item.selected && item.type === "X") {
          // removing "X" occupied slots for "AI" mode
          remainingSlots.splice(remainingSlots.indexOf(item.key), 1);
          return true;
        }
      })
      .map(item => item.key);

    // Gatering "O" written cells
    const oArray = grid
      .filter(item => {
        if (item.selected && item.type === "O") {
          // removing "O" occupied slots for "AI" mode
          remainingSlots.splice(remainingSlots.indexOf(item.key), 1);
          return true;
        }
      })
      .map(item => item.key);

    let win = "";

    // Check for winning condition
    if (xArray.length > 2 && getWinningLogic(xArray)) win = "X";
    else if (oArray.length > 2 && getWinningLogic(oArray)) win = "O";
    else if (xArray.length + oArray.length > 8) win = "draw";

    // Score management
    if (win.length > 0) {
      const { p1Score, p2Score, turn } = score;
      let updateScore = {};

      /*  turn = "true"   => reprents player 1's "X" first
          turn = "false"  => reprents player 2's "X" first
          p1Score         => reprents player 1's total score
          p2Score         => reprents player 2's total score
      */
      if (win === "X")
        updateScore = {
          ...score,
          p1Score: turn ? p1Score + 1 : p1Score,
          p2Score: !turn ? p2Score + 1 : p2Score
        };
      else if (win === "O")
        updateScore = {
          ...score,
          p2Score: turn ? p2Score + 1 : p2Score,
          p1Score: !turn ? p1Score + 1 : p1Score
        };
      else
        updateScore = {
          ...score
        };
      //start timer for next game
      setTimer(3);
      //update score card
      setScore({ ...updateScore, turn: !turn });
    }
    // setting action for AI
    if (
      details.type === "singles" &&
      win.length === 0 &&
      (details.players.player1 !== "AI" ||
        xArray.length + oArray.length !== 0 ||
        chance)
    ) {
      actionForAI(remainingSlots, onSelect, details, chance, score);
    }
  }, [chance]);

  //on selecting an item
  const onSelect = position => {
    let valueChanged = false;
    setGrid(
      grid.map(item => {
        if (item.key === position && !item.selected) {
          pushedStack.push(item.key);
          valueChanged = true;
          return { ...item, selected: true, type: chance ? "X" : "O" };
        } else return item;
      })
    );

    if (valueChanged) setChance(!chance);
  };
  //on reverting an action
  const onRevert = () => {
    const revertElement = pushedStack.pop();
    let valueChanged = false;
    setGrid(
      grid.map(item => {
        if (item.key === revertElement) {
          valueChanged = true;
          return { ...item, selected: false, type: "" };
        } else return item;
      })
    );
    if (valueChanged) setChance(!chance);
  };

  return (
    <>
      {details && (
        <GameZoneComponent
          details={details}
          score={score}
          positions={grid}
          onSelect={onSelect}
          onRevert={onRevert}
          timer={timer}
        />
      )}
    </>
  );
};

export default withRouter(GameZone);
