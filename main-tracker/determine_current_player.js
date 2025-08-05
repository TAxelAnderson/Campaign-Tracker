function determineCurrentPlayer() {
  if (history.length === 0) {
    return "player1";
  }

  const lastPlayer = history[0][0];

  if (lastPlayer === "player1") {
    return "player2";
  } else if (playerCount === 3 && lastPlayer === "player2") {
    return "player3";
  } else if (lastPlayer === "player2") {
    return "player1";
  } else {
    alert("determineCurrentPlayer() failed!");
    return "unknown";
  }
}