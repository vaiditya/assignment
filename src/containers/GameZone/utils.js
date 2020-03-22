export const getWinningLogic = inputArr => {
  let grp = [];
  let found = false;
  function checkWinningCase(arr) {
    if (grp.length === 3) {
      checkWin(grp);
    } else {
      for (let i = 0; i < arr.length; i++) {
        grp.push(arr[i]);
        checkWinningCase(arr.slice(i + 1));
        grp.splice(grp.indexOf(arr[i]), 1);

        if (found) break;
      }
      return;
    }
  }

  function checkWin(res) {
    let sum = 0;
    let has3 = false;
    let has0 = false;
    res.forEach(item => {
      sum += item;
      if (item === 0) has0 = true;
      if (Math.abs(item) === 3) has3 = true;
    });
    if (Math.abs(sum) === 9) {
      found = true;
      return;
    }
    if (sum === 0 && has0) {
      found = true;
      return;
    }
    if (Math.abs(sum) === 3 && !has3 && !has0) {
      found = true;
      return;
    }
  }

  checkWinningCase(inputArr);
  return found;
};

export const actionForAI = (
  remainingSlots,
  onSelect,
  details,
  chance,
  score
) => {
  const slotForAI =
    remainingSlots[Math.floor(Math.random() * remainingSlots.length)];
  if (details.players.player1 === "AI") {
    if (score.turn) {
      if (chance) {
        onSelect(slotForAI);
      }
    } else if (!score.turn) {
      if (!chance) {
        onSelect(slotForAI);
      }
    }
  } else if (details.players.player2 === "AI") {
    if (score.turn) {
      if (!chance) {
        onSelect(slotForAI);
      }
    } else if (!score.turn) {
      if (chance) {
        onSelect(slotForAI);
      }
    }
  }
};
