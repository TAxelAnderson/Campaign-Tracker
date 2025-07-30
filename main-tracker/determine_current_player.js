function determineCurrentPlayer() {
  if (history.length === 0) {
    return "player1"
  } else {
    if (history[0][0] == "player1") {
      return "player2";
    } else if (playerCount == 3 && history[0][0] == "player2") {
      return "player3";
    } else if (history[0][0] == "player2") {
      return "player1";
    }
  }
}