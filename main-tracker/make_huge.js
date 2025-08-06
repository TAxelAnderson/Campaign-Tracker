function produceHuge(faction, planet) {
  let map = new Map(planets.map(obj => [obj.name, obj]));

  if (map.get(planet).occupier !== determineCurrentPlayer()) {
    alert(`You must occupy ${planet.name} to produce a ship there.`);
    return;
  }

  if (faction == "rebel") {
    if (actionsLeftThisTurn >= Math.ceil(rebelHugeThreat / 2)) {
      map.get(`${planet}`).shipsAtLocation = map.get(`${planet}`).shipsAtLocation.concat([["ship", "rebel", rebelHugeShip, rebelHugeShipSize, false, rebelHugePilotName, rebelHugeThreat, rebelHugeHull, rebelHugeShields, ["Command", "Crew", "Crew", "Team", "Team", "Cargo", "Hard Point", "Hard Point", "Title"], multiFNV1a(Date.now().toString()), rebelHugeHull, rebelHugeShields]]);
      tempHistoryOfThisTurn = tempHistoryOfThisTurn.concat(`produceRebelHuge1At${planet}`);
      actionsLeftThisTurn -= Math.ceil(rebelHugeThreat / 2);
      alert(`Produced ${faction} huge at ${planet}`);
    } else {
      alert("Not enough actions");
      return;
    }
  } else if (faction == "empire") {
    if (actionsLeftThisTurn >= Math.ceil(empireHugeThreat / 2)) {
      map.get(`${planet}`).shipsAtLocation = map.get(`${planet}`).shipsAtLocation.concat([["ship", "empire", empireHugeShip, empireHugeShipSize, false, empireHugePilotName, empireHugeThreat, empireHugeThreat, empireHugeShields, empireHugeUpgradesArray, multiFNV1a(Date.now().toString()), empireHugeHull, empireHugeShields]]);
      tempHistoryOfThisTurn = tempHistoryOfThisTurn.concat(`produceEmpireHuge1At${planet}`);
      actionsLeftThisTurn -= Math.ceil(empireHugeThreat / 2);
      alert(`Produced ${faction} huge at ${planet}`);
    } else {
      alert("Not enough actions");
      return;
    }
  } else if (faction == "republic") {
    if (actionsLeftThisTurn >= Math.ceil(republicHugeThreat / 2)) {
      map.get(`${planet}`).shipsAtLocation = map.get(`${planet}`).shipsAtLocation.concat([["ship", "republic", republicHugeShip, republicHugeShipSize, false, republicHugePilotName, republicHugeThreat, republicHugeHull, republicHugeShields, republicHugeUpgradesArray, multiFNV1a(Date.now().toString()), republicHugeHull, republicHugeShields]]);
      tempHistoryOfThisTurn = tempHistoryOfThisTurn.concat(`produceRepublicHuge1At${planet}`);
      actionsLeftThisTurn -= Math.ceil(republicHugeThreat / 2);
      alert(`Produced ${faction} huge at ${planet}`);
    } else {
      alert("Not enough actions");
      return;
    }
  } else if (faction == "separatist") {
    if (actionsLeftThisTurn >= Math.ceil(separatistHugeThreat / 2)) {
      map.get(`${planet}`).shipsAtLocation = map.get(`${planet}`).shipsAtLocation.concat([["ship", "separatist", separatistHugeShip, separatistHugeShipSize, false, separatistHugePilotName, separatistHugeThreat, separatistHugeHull, separatistHugeShields, separatistHugeUpgradesArray, multiFNV1a(Date.now().toString()), separatistHugeHull, separatistHugeShields]]);
      tempHistoryOfThisTurn = tempHistoryOfThisTurn.concat(`produceRepublicHuge1At${planet}`);
      actionsLeftThisTurn -= Math.ceil(separatistHugeThreat / 2);
      alert(`Produced ${faction} huge at ${planet}`);
    } else {
      alert("Not enough actions");
      return;
    }
  } else if (faction == "fo") {
    if (actionsLeftThisTurn >= Math.ceil(foHugeThreat / 2)) {
      map.get(`${planet}`).shipsAtLocation = map.get(`${planet}`).shipsAtLocation.concat([["ship", "fo", foHugeShip, foHugeShipSize, false, foHugePilotName, foHugeThreat, foHugeHull, foHugeShields, foHugeUpgradesArray, multiFNV1a(Date.now().toString()), foHugeHull, foHugeShields]]);
      tempHistoryOfThisTurn = tempHistoryOfThisTurn.concat(`produceRepublicHuge1At${planet}`);
      actionsLeftThisTurn -= Math.ceil(foHugeThreat / 2);
      alert(`Produced ${faction} huge at ${planet}`);
    } else {
      alert("Not enough actions");
      return;
    }
  } else {
    alert("ERROR -- produceHuge() faction not found");
  }

  checkIfActionsAreComplete();
}

    // Ship array types

    // type - "ship" / "station"
    // alignment - "faction"
    // specificShip - "kwing"
    // shipSize = "small"
    // isAce = false
    // pilot - "pilotName"
    // threatValue - 2
    // hull - int
    // shield - int
    // upgrades - ["shieldUpgrade", "loneWolf"]
    // UUID - hash string of Date.now().toString() -- milliseconds since the epoch
    // full hull
    // full shields
