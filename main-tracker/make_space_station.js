document.getElementById("place-station").addEventListener("click", () => {
  let currentPlayer = determineCurrentPlayer();
  let currentPlayerFaction;
  if (currentPlayer == "player1") {
    currentPlayerFaction = playerOneFaction;
  } else if (currentPlayer == "player2") {
    currentPlayerFaction = playerTwoFaction;
  } else if (currentPlayer == "player3") {
    currentPlayerFaction = playerThreeFaction;
  } else {
    alert("#place-station event callback error determining current player faction");
  }

  produceSpaceStation(determineCurrentPlayer(), currentPlayerFaction, document.getElementById("english-text").innerText);
})

function produceSpaceStation(player, faction, planet) {
  console.log(player, planet)
  let map = new Map(planets.map(obj => [obj.name, obj]));
  // check if station is already made
  let letFuncContinue = true;
  map.get(planet).shipsAtLocation.forEach((ship) => {
    if (ship[0] == "spaceStation") {
      letFuncContinue = false;
    }
  })

  if (!letFuncContinue) {
    alert("FAILURE - space station already at location.");
    return;
  }

  // produce new station
  if (faction == "rebel" && map.get(planet).occupier == player) {
    map.get(planet).shipsAtLocation = map.get(planet).shipsAtLocation.concat([["spaceStation", "rebel", null, null, null, null, null, 10, 4, null, multiFNV1a(Date.now())]]);
    tempHistoryOfThisTurn = tempHistoryOfThisTurn.concat(`produceSpaceStationAt${planet}`);
    actionsLeftThisTurn -= 2;
    alert(`Produced ${player} space station at ${planet}`);
  } else if (faction == "empire" && map.get(planet).occupier == player) {
    map.get(planet).shipsAtLocation = map.get(planet).shipsAtLocation.concat([["spaceStation", "empire", null, null, null, null, null, 10, 4, null, multiFNV1a(Date.now())]]);
    tempHistoryOfThisTurn = tempHistoryOfThisTurn.concat(`produceSpaceStationAt${planet}`);
    actionsLeftThisTurn -= 2;
    alert(`Produced ${player} space station at ${planet}`);
  } else if (faction == "republic" && map.get(planet).occupier == player) {
    map.get(planet).shipsAtLocation = map.get(planet).shipsAtLocation.concat([["spaceStation", "republic", null, null, null, null, null, 10, 4, null, multiFNV1a(Date.now())]]);
    tempHistoryOfThisTurn = tempHistoryOfThisTurn.concat(`produceSpaceStationAt${planet}`);
    actionsLeftThisTurn -= 2;
    alert(`Produced ${player} space station at ${planet}`);
  } else if (faction == "separatist" && map.get(planet).occupier == player) {
    map.get(planet).shipsAtLocation = map.get(planet).shipsAtLocation.concat([["spaceStation", "separatist", null, null, null, null, null, 10, 4, null, multiFNV1a(Date.now())]]);
    tempHistoryOfThisTurn = tempHistoryOfThisTurn.concat(`produceSpaceStationAt${planet}`);
    actionsLeftThisTurn -= 2;
    alert(`Produced ${player} space station at ${planet}`);
  } else if (faction == "fo" && map.get(planet).occupier == player) {
    map.get(planet).shipsAtLocation = map.get(planet).shipsAtLocation.concat([["spaceStation", "fo", null, null, null, null, null, 10, 4, null, multiFNV1a(Date.now())]]);
    tempHistoryOfThisTurn = tempHistoryOfThisTurn.concat(`produceSpaceStationAt${planet}`);
    actionsLeftThisTurn -= 2;
    alert(`Produced ${player} space station at ${planet}`);
  } else {
    alert("You must be occupying the planet to produce a space station");
  }
  checkIfActionsAreComplete();
}