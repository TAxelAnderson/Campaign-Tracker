function produceAce(faction, index, planet) {
  let map = new Map(planets.map(obj => [obj.name, obj]));

  if (map.get(planet).occupier !== determineCurrentPlayer()) {
    alert(`You must occupy ${planet.name} to produce a ship there.`);
    return;
  }

  if (faction == "rebel") {
    if (index == 1) {
      if (actionsLeftThisTurn >= Math.ceil(rebelAce1Threat / 2)) {
        map.get(planet).shipsAtLocation = map.get(planet).shipsAtLocation.concat([["ship", "rebel", rebelAce1Ship, rebelAce1ShipSize, true, rebelAce1PilotName, rebelAce1Threat, rebelAce1Hull, rebelAce1Shields, rebelAce1UpgradesArray, multiFNV1a(Date.now().toString()), rebelAce1Hull, rebelAce1Shields]]);
        tempHistoryOfThisTurn = tempHistoryOfThisTurn.concat(`produceRebelAce1At${planet}`);
        actionsLeftThisTurn -= Math.ceil(rebelAce1Threat / 2);
        alert(`Produced YT-2400 Ace at ${planet}`);
      } else {
        alert("Not enough actions");
        return;
      }
    } else if (index == 2) {
      if (actionsLeftThisTurn >= Math.ceil(rebelAce2Threat / 2)) {
        map.get(planet).shipsAtLocation = map.get(planet).shipsAtLocation.concat([["ship", "rebel", rebelAce2Ship, rebelAce2ShipSize, true, rebelAce2PilotName, rebelAce2Threat, rebelAce2Hull, rebelAce2Shields, rebelAce2UpgradesArray, multiFNV1a(Date.now().toString()), rebelAce2Hull, rebelAce2Shields]]);
        tempHistoryOfThisTurn = tempHistoryOfThisTurn.concat(`produceRebelAce2At${planet}`);
        actionsLeftThisTurn -= Math.ceil(rebelAce2Threat / 2);
        alert(`Produced YT-1300 Ace at ${planet}`);
      } else {
        alert("Not enough actions");
        return;
      }
    } else if (index == 3) {
      if (actionsLeftThisTurn >= Math.ceil(rebelAce3Threat / 2)) {
        map.get(planet).shipsAtLocation = map.get(planet).shipsAtLocation.concat([["ship", "rebel", rebelAce3Ship, rebelAce3ShipSize, true, rebelAce3PilotName, rebelAce3Threat, rebelAce3Hull, rebelAce3Shields, rebelAce3UpgradesArray, multiFNV1a(Date.now().toString()), rebelAce3Hull, rebelAce3Shields]]);
        tempHistoryOfThisTurn = tempHistoryOfThisTurn.concat(`produceRebelAce3At${planet}`);
        actionsLeftThisTurn -= Math.ceil(rebelAce3Threat / 2);
        alert(`Produced Gauntlet Ace at ${planet}`);
      } else {
        alert("Not enough actions")
        return;
      }
    } else if (index == 4) {
      if (actionsLeftThisTurn >= Math.ceil(rebelAce4Threat / 2)) {
        map.get(planet).shipsAtLocation = map.get(planet).shipsAtLocation.concat([["ship", "rebel", rebelAce4Ship, rebelAce4ShipSize, true, rebelAce4PilotName, rebelAce3Threat, rebelAce3Hull, rebelAce3Shields, rebelAce4UpgradesArray, multiFNV1a(Date.now().toString()), rebelAce4Hull, rebelAce4Shields]]);
        tempHistoryOfThisTurn = tempHistoryOfThisTurn.concat(`produceRebelAce4At${planet}`);
        actionsLeftThisTurn -= Math.ceil(rebelAce4Threat / 2);
        alert(`Produced ARC Ace at ${planet}`);
      } else {
        alert("Not enough actions");
        return;
      }
    } else if (index == 5) {
      if (actionsLeftThisTurn >= Math.ceil(rebelAce5Threat / 2)) {
        map.get(planet).shipsAtLocation = map.get(planet).shipsAtLocation.concat([["ship", "rebel", rebelAce5Ship, rebelAce5ShipSize, true, rebelAce5PilotName, rebelAce5Threat, rebelAce5Hull, rebelAce5Shields, rebelAce5UpgradesArray, multiFNV1a(Date.now().toString()), rebelAce5Hull, rebelAce5Shields]]);
        tempHistoryOfThisTurn = tempHistoryOfThisTurn.concat(`produceRebelAce5At${planet}`);
        actionsLeftThisTurn -= Math.ceil(rebelAce5Threat / 2);
        alert(`Produced E-Wing Ace at ${planet}`);
      } else {
        alert("Not enough actions");
        return;
      }
    }
  } else if (faction == "empire") {
    if (index == 1) {
      if (actionsLeftThisTurn >= Math.ceil(empireAce1Threat / 2)) {
        map.get(planet).shipsAtLocation = map.get(planet).shipsAtLocation.concat([["ship", "empire", empireAce1Ship, empireAce1ShipSize, true, empireAce1PilotName, empireAce1Threat, empireAce1Hull, empireAce1Shields, empireAce1UpgradesArray, multiFNV1a(Date.now().toString()), empireAce1Hull, empireAce1Shields]]);
        tempHistoryOfThisTurn = tempHistoryOfThisTurn.concat(`produceEmpireAce1At${planet}`);
        actionsLeftThisTurn -= Math.ceil(empireAce1Threat / 2);
        alert(`Produced unknown Ace at ${planet}`);
      } else {
        alert("Not enough actions");
        return;
      }
    } else if (index == 2) {
      if (actionsLeftThisTurn >= Math.ceil(empireAce2Threat / 2)) {
        map.get(planet).shipsAtLocation = map.get(planet).shipsAtLocation.concat([["ship", "empire", empireAce2Ship, empireAce2ShipSize, true, empireAce2PilotName, empireAce2Threat, empireAce2Hull, empireAce2Shields, empireAce2UpgradesArray, multiFNV1a(Date.now().toString()), empireAce2Hull, empireAce2Shields]]);
        tempHistoryOfThisTurn = tempHistoryOfThisTurn.concat(`produceEmpireAce2At${planet}`);
        actionsLeftThisTurn -= Math.ceil(empireAce2Threat / 2);
        alert(`Produced unknown Ace at ${planet}`);
      } else {
        alert("Not enough actions");
        return;
      }
    } else if (index == 3) {
      if (actionsLeftThisTurn >= Math.ceil(empireAce3Threat / 2)) {
        map.get(planet).shipsAtLocation = map.get(planet).shipsAtLocation.concat([["ship", "empire", empireAce3Ship, empireAce3ShipSize, true, empireAce3PilotName, empireAce3Threat, empireAce3Hull, empireAce3Shields, empireAce3UpgradesArray, multiFNV1a(Date.now().toString()), empireAce3Hull, empireAce3Shields]]);
        tempHistoryOfThisTurn = tempHistoryOfThisTurn.concat(`produceEmpireAce3At${planet}`);
        actionsLeftThisTurn -= Math.ceil(empireAce3Threat / 2);
        alert(`Produced unknown Ace at ${planet}`);
      } else {
        alert("Not enough actions");
        return;
      }
    } else if (index == 4) {
      if (actionsLeftThisTurn >= Math.ceil(empireAce4Threat / 2)) {
        map.get(planet).shipsAtLocation = map.get(planet).shipsAtLocation.concat([["ship", "empire", empireAce4Ship, empireAce4ShipSize, true, empireAce4PilotName, empireAce4Threat, empireAce4Hull, empireAce4Shields, empireAce4UpgradesArray, multiFNV1a(Date.now().toString()), empireAce4Hull, empireAce4Shields]]);
        tempHistoryOfThisTurn = tempHistoryOfThisTurn.concat(`produceEmpireAce4At${planet}`);
        actionsLeftThisTurn -= Math.ceil(empireAce4Threat / 2);
        alert(`Produced unknown Ace at ${planet}`);
      } else {
        alert("Not enough actions");
        return;
      }
    } else if (index == 5) {
      if (actionsLeftThisTurn >= Math.ceil(empireAce5Threat / 2)) {
        map.get(planet).shipsAtLocation = map.get(planet).shipsAtLocation.concat([["ship", "empire", empireAce5Ship, empireAce5ShipSize, true, empireAce5PilotName, empireAce5Threat, empireAce5Hull, empireAce5Shields, empireAce5UpgradesArray, multiFNV1a(Date.now().toString()), empireAce5Hull, empireAce5Shields]]);
        tempHistoryOfThisTurn = tempHistoryOfThisTurn.concat(`produceEmpireAce5At${planet}`);
        actionsLeftThisTurn -= Math.ceil(empireAce5Threat / 2);
        alert(`Produced unknown Ace at ${planet}`);
      } else {
        alert("Not enough actions");
        return;
      }
    }
  } else if (faction == "republic") {
    if (index == 1) {
      if (actionsLeftThisTurn >= Math.ceil(republicAce1Threat / 2)) {
        map.get(planet).shipsAtLocation = map.get(planet).shipsAtLocation.concat([["ship", "republic", republicAce1Ship, republicAce1ShipSize, true, republicAce1PilotName, republicAce1Threat, republicAce1Hull, republicAce1Shields, republicAce1UpgradesArray, multiFNV1a(Date.now().toString()), republicAce1Hull, republicAce1Shields]]);
        tempHistoryOfThisTurn = tempHistoryOfThisTurn.concat(`produceRepublicAce1At${planet}`);
        actionsLeftThisTurn -= Math.ceil(republicAce1Threat / 2);
        alert(`Produced Aethersprite Ace at ${planet}`);
      } else {
        alert("Not enough actions");
        return;
      }
    } else if (index == 2) {
      if (actionsLeftThisTurn >= Math.ceil(republicAce2Threat / 2)) {
        map.get(planet).shipsAtLocation = map.get(planet).shipsAtLocation.concat([["ship", "republic", republicAce2Ship, republicAce2ShipSize, true, republicAce2PilotName, republicAce2Threat, republicAce2Hull, republicAce2Shields, republicAce2UpgradesArray, multiFNV1a(Date.now().toString()), republicAce2Hull, republicAce2Shields]]);
        tempHistoryOfThisTurn = tempHistoryOfThisTurn.concat(`produceRepublicAce2At${planet}`);
        actionsLeftThisTurn -= Math.ceil(republicAce2Threat / 2);
        alert(`Produced Aethersprite Ace at ${planet}`);
      } else {
        alert("Not enough actions");
        return;
      }
    } else if (index == 3) {
      if (actionsLeftThisTurn >= Math.ceil(republicAce3Threat / 2)) {
        map.get(planet).shipsAtLocation = map.get(planet).shipsAtLocation.concat([["ship", "republic", republicAce3Ship, republicAce3ShipSize, true, republicAce3PilotName, republicAce3Threat, republicAce3Hull, republicAce3Shields, republicAce3UpgradesArray, multiFNV1a(Date.now().toString()), republicAce3Hull, republicAce3Shields]]);
        tempHistoryOfThisTurn = tempHistoryOfThisTurn.concat(`produceRepublicAce3At${planet}`);
        actionsLeftThisTurn -= Math.ceil(republicAce3Threat / 2);
        alert(`Produced LAAT/i Ace at ${planet}`);
      } else {
        alert("Not enough actions");
        return;
      }
    } else if (index == 4) {
      if (actionsLeftThisTurn >= Math.ceil(republicAce4Threat / 2)) {
        map.get(planet).shipsAtLocation = map.get(planet).shipsAtLocation.concat([["ship", "republic", republicAce4Ship, republicAce4ShipSize, true, republicAce4PilotName, republicAce4Threat, republicAce4Hull, republicAce4Shields, republicAce4UpgradesArray, multiFNV1a(Date.now().toString()), republicAce4Hull, republicAce4Shields]]);
        tempHistoryOfThisTurn = tempHistoryOfThisTurn.concat(`produceRepublicAce4At${planet}`);
        actionsLeftThisTurn -= Math.ceil(republicAce4Threat / 2);
        alert(`Produced Gauntlet Ace at ${planet}`);
      } else {
        alert("Not enough actions");
        return;
      }
    } else if (index == 5) {
      if (actionsLeftThisTurn >= Math.ceil(republicAce5Threat / 2)) {
        map.get(planet).shipsAtLocation = map.get(planet).shipsAtLocation.concat([["ship", "republic", republicAce5Ship, republicAce5ShipSize, true, republicAce5PilotName, republicAce5Threat, republicAce5Hull, republicAce5Shields, republicAce5UpgradesArray, multiFNV1a(Date.now().toString()), republicAce5Hull, republicAce5Shields]]);
        tempHistoryOfThisTurn = tempHistoryOfThisTurn.concat(`produceRepublicAce5At${planet}`);
        actionsLeftThisTurn -= Math.ceil(republicAce5Threat / 2);
        alert(`Produced Y-Wing Ace at ${planet}`);
      } else {
        alert("Not enough actions");
        return;
      }
    }
  } else if (faction == "separatist") {
    if (index == 1) {
      if (actionsLeftThisTurn >= Math.ceil(separatistAce1Threat / 2)) {
        map.get(planet).shipsAtLocation = map.get(planet).shipsAtLocation.concat([["ship", "separatist", separatistAce1Ship, separatistAce1ShipSize, true, separatistAce1PilotName, separatistAce1Threat, separatistAce1Hull, separatistAce1Shields, separatistAce1UpgradesArray, multiFNV1a(Date.now().toString()), separatistAce1Hull, separatistAce1Shields]]);
        tempHistoryOfThisTurn = tempHistoryOfThisTurn.concat(`produceSeparatistAce1At${planet}`);
        actionsLeftThisTurn -= Math.ceil(separatistAce1Threat / 2);
        alert(`Produced Nantex Ace at ${planet}`);
      } else {
        alert("Not enough actions");
        return;
      }
    } else if (index == 2) {
      if (actionsLeftThisTurn >= Math.ceil(separatistAce2Threat / 2)) {
        map.get(planet).shipsAtLocation = map.get(planet).shipsAtLocation.concat([["ship", "separatist", separatistAce2Ship, separatistAce2ShipSize, true, separatistAce2PilotName, separatistAce2Threat, separatistAce2Hull, separatistAce2Shields, separatistAce2UpgradesArray, multiFNV1a(Date.now().toString()), separatistAce2Hull, separatistAce2Shields]]);
        tempHistoryOfThisTurn = tempHistoryOfThisTurn.concat(`produceSeparatistAce2At${planet}`);
        actionsLeftThisTurn -= Math.ceil(separatistAce2Threat / 2);
        alert(`Produced Belbullab Ace at ${planet}`);
      } else {
        alert("Not enough actions");
        return;
      }
    } else if (index == 3) {
      if (actionsLeftThisTurn >= Math.ceil(separatistAce3Threat / 2)) {
        map.get(`${planet}`).shipsAtLocation = map.get(`${planet}`).shipsAtLocation.concat([["ship", "separatist", separatistAce3Ship, separatistAce3ShipSize, true, separatistAce3PilotName, separatistAce3Threat, separatistAce3Hull, separatistAce3Shields, separatistAce3UpgradesArray, multiFNV1a(Date.now().toString()), separatistAce3Hull, separatistAce3Shields]]);
        tempHistoryOfThisTurn = tempHistoryOfThisTurn.concat(`produceSeparatistAce3At${planet}`);
        actionsLeftThisTurn -= Math.ceil(separatistAce3Threat / 2);
        alert(`Produced Firespray Ace at ${planet}`);
      } else {
        alert("Not enough actions");
        return;
      }
    } else if (index == 4) {
      if (actionsLeftThisTurn >= Math.ceil(separatistAce4Threat / 2)) {
        map.get(`${planet}`).shipsAtLocation = map.get(`${planet}`).shipsAtLocation.concat([["ship", "separatist", separatistAce4Ship, separatistAce4ShipSize, true, separatistAce4PilotName, separatistAce4Threat, separatistAce4Hull, separatistAce4Shields, separatistAce4UpgradesArray, multiFNV1a(Date.now().toString()), separatistAce4Hull, separatistAce4Shields]]);
        tempHistoryOfThisTurn = tempHistoryOfThisTurn.concat(`produceSeparatistAce4At${planet}`);
        actionsLeftThisTurn -= Math.ceil(separatistAce4Threat / 2);
        alert(`Produced Gauntlet Ace at ${planet}`);
      } else {
        alert("Not enough actions");
        return;
      }
    } else if (index == 5) {
      if (actionsLeftThisTurn >= Math.ceil(separatistAce5Threat / 2)) {
        map.get(`${planet}`).shipsAtLocation = map.get(`${planet}`).shipsAtLocation.concat([["ship", "separatist", separatistAce5Ship, separatistAce5ShipSize, true, separatistAce5PilotName, separatistAce5Threat, separatistAce5Hull, separatistAce5Shields, separatistAce5UpgradesArray, multiFNV1a(Date.now().toString()), separatistAce5Hull, separatistAce5Shields]]);
        tempHistoryOfThisTurn = tempHistoryOfThisTurn.concat(`produceSeparatistAce5At${planet}`);
        actionsLeftThisTurn -= Math.ceil(separatistAce5Threat / 2);
        alert(`Produced Rogue Ace at ${planet}`);
      } else {
        alert("Not enough actions");
        return;
      }
    }
  } else if (faction == "fo") {
    if (index == 1) {
      if (actionsLeftThisTurn >= Math.ceil(foAce1Threat / 2)) {
        map.get(`${planet}`).shipsAtLocation = map.get(`${planet}`).shipsAtLocation.concat([["ship", "fo", foAce1Ship, foAce1ShipSize, true, foAce1PilotName, foAce1Threat, foAce1Hull, foAce1Shields, foAce1UpgradesArray, multiFNV1a(Date.now().toString()), foAce1Hull, foAce1Shields]]);
        tempHistoryOfThisTurn = tempHistoryOfThisTurn.concat(`produceFOAce1At${planet}`);
        actionsLeftThisTurn -= Math.ceil(foAce1Threat / 2);
      } else {
        alert("Not enough actions");
        return;
      }
    } else if (index == 2) {
      if (actionsLeftThisTurn >= Math.ceil(foAce2Threat / 2)) {
        map.get(`${planet}`).shipsAtLocation = map.get(`${planet}`).shipsAtLocation.concat([["ship", "fo", foAce2Ship, foAce2ShipSize, true, foAce2PilotName, foAce2Threat, foAce2Hull, foAce2Shields, foAce2UpgradesArray, multiFNV1a(Date.now().toString()), foAce2Hull, foAce2Shields]]);
        tempHistoryOfThisTurn = tempHistoryOfThisTurn.concat(`produceFOAce2At${planet}`);
        actionsLeftThisTurn -= Math.ceil(foAce2Threat / 2);
      } else {
        alert("Not enough actions");
        return;
      }
    } else if (index == 3) {
      if (actionsLeftThisTurn >= Math.ceil(foAce3Threat / 2)) {
        map.get(`${planet}`).shipsAtLocation = map.get(`${planet}`).shipsAtLocation.concat([["ship", "fo", foAce3Ship, foAce3ShipSize, true, foAce3PilotName, foAce3Threat, foAce3Hull, foAce3Shields, foAce3UpgradesArray, multiFNV1a(Date.now().toString()), foAce3Hull, foAce3Shields]]);
        tempHistoryOfThisTurn = tempHistoryOfThisTurn.concat(`produceFOAce3At${planet}`);
        actionsLeftThisTurn -= Math.ceil(foAce3Threat / 2);
      } else {
        alert("Not enough actions");
        return;
      }
    } else if (index == 4) {
      if (actionsLeftThisTurn >= Math.ceil(foAce4Threat / 2)) {
        map.get(`${planet}`).shipsAtLocation = map.get(`${planet}`).shipsAtLocation.concat([["ship", "fo", foAce4Ship, foAce4ShipSize, true, foAce4PilotName, foAce4Threat, foAce4Hull, foAce4Shields, multiFNV1a(Date.now().toString()), foAce4Hull, foAce4Shields]]);
        tempHistoryOfThisTurn = tempHistoryOfThisTurn.concat(`produceFOAce4At${planet}`);
        actionsLeftThisTurn -= Math.ceil(foAce4Threat / 2);
      } else {
        alert("Not enough actions");
        return;
      }
    } else if (index == 5) {
      if (actionsLeftThisTurn >= 2) {
        map.get(`${planet}`).shipsAtLocation = map.get(`${planet}`).shipsAtLocation.concat([["ship", "fo", "tieba", "small", true, "COMPLETE THIS", 3, 3, 3, ["Fanatical", "Advanced Sensors", "Special Forces Gunner", "Shield Upgrade", "Hull Upgrade"], multiFNV1a(Date.now().toString()), foAce5Hull, foAce5Shields]]);
        tempHistoryOfThisTurn = tempHistoryOfThisTurn.concat(`produceFOAce5At${planet}`);
        actionsLeftThisTurn -= 2;
      } else {
        alert("Not enough actions");
        return;
      }
    }
  } else {
    alert("ERROR -- produceAce() faction not found")
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
