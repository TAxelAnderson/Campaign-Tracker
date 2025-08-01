function produceGeneric(faction, index, planet) {
  let map = new Map(planets.map(obj => [obj.name, obj]));

  if (map.get(planet).occupier !== determineCurrentPlayer()) {
    alert(`You must occupy ${planet.name} to produce a ship there.`);
  }

  if (faction == "rebel") {
    if (index == 1) {
      if (actionsLeftThisTurn >= Math.ceil(rebelGeneric1Threat / 2)) {
        map.get(planet).shipsAtLocation = map.get(planet).shipsAtLocation.concat([["ship", "rebel", rebelGeneric1Ship, rebelGeneric1ShipSize, false, rebelGeneric1PilotName, rebelGeneric1Threat, rebelGeneric1Hull, rebelGeneric1Shields, rebelGeneric1UpgradesArray, multiFNV1a(Date.now().toString()), rebelGeneric1Hull, rebelGeneric1Shields]]);
        tempHistoryOfThisTurn = tempHistoryOfThisTurn.concat(`produceRebelGeneric1At${planet}`);
        actionsLeftThisTurn -= Math.ceil(rebelGeneric1Threat / 2);
        alert(`Produced generic x-wing at ${planet}`);
      } else {
        alert("Not enough actions");
        return;
      }
    } else if (index == 2) {
      if (actionsLeftThisTurn >= Math.ceil(rebelGeneric2Threat / 2)) {
        map.get(planet).shipsAtLocation = map.get(planet).shipsAtLocation.concat([["ship", "rebel", rebelGeneric2Ship, rebelGeneric2ShipSize, false, rebelGeneric2PilotName, rebelGeneric2Threat, rebelGeneric2Hull, rebelGeneric2Shields, rebelGeneric2UpgradesArray, multiFNV1a(Date.now().toString()), rebelGeneric2Hull, rebelGeneric2Shields]]);
        tempHistoryOfThisTurn = tempHistoryOfThisTurn.concat(`produceRebelGeneric2At${planet}`);
        actionsLeftThisTurn -= Math.ceil(rebelGeneric2Threat / 2);
        alert(`Produced generic k-wing at ${planet}`);
      } else {
        alert("Not enough actions");
        return;
      }
    } else if (index == 3) {
      if (actionsLeftThisTurn >= Math.ceil(rebelGeneric3Threat / 2)) {
        map.get(planet).shipsAtLocation = map.get(planet).shipsAtLocation.concat([["ship", "rebel", rebelGeneric3Ship, rebelGeneric3ShipSize, false, rebelGeneric3PilotName, rebelGeneric3Threat, rebelGeneric3Hull, rebelGeneric3Shields, rebelGeneric3UpgradesArray, multiFNV1a(Date.now().toString()), rebelGeneric3Hull, rebelGeneric3Shields]]);
        tempHistoryOfThisTurn = tempHistoryOfThisTurn.concat(`produceRebelGeneric3At${planet}`);
        actionsLeftThisTurn -= Math.ceil(rebelGeneric3Threat / 2);
        alert(`Produced generic yt-1300 at ${planet}`);
      } else {
        alert("Not enough actions");
        return;
      }
    } else if (index == 4) {
      if (actionsLeftThisTurn >= Math.ceil(rebelGeneric4Threat / 2)) {
        map.get(planet).shipsAtLocation = map.get(planet).shipsAtLocation.concat([["ship", "rebel", rebelGeneric4Ship, rebelGeneric4ShipSize, false, rebelGeneric4PilotName, rebelGeneric4Threat, rebelGeneric4Hull, rebelGeneric4Shields, rebelGeneric4UpgradesArray, multiFNV1a(Date.now().toString()), rebelGeneric4Hull, rebelGeneric4Shields]]);
        tempHistoryOfThisTurn = tempHistoryOfThisTurn.concat(`produceRebelGeneric4At${planet}`);
        actionsLeftThisTurn -= Math.ceil(rebelGeneric4Threat / 2);
        alert(`Produced generic e-wing at ${planet}`);
      } else {
        alert("Not enough actions");
        return;
      }
    } else if (index == 5) {
      if (actionsLeftThisTurn >= Math.ceil(rebelGeneric5Threat / 2)) {
        map.get(planet).shipsAtLocation = map.get(planet).shipsAtLocation.concat([["ship", "rebel", rebelGeneric5Ship, rebelGeneric5ShipSize, false, rebelGeneric5PilotName, rebelGeneric5Threat, rebelGeneric5Hull, rebelGeneric5Shields, rebelGeneric5UpgradesArray, multiFNV1a(Date.now().toString()), rebelGeneric5Hull, rebelGeneric5Shields]]);
        tempHistoryOfThisTurn = tempHistoryOfThisTurn.concat(`produceRebelGeneric5At${planet}`);
        actionsLeftThisTurn -= Math.ceil(rebelGeneric5Threat / 2);
        alert(`Produced generic b-wing at ${planet}`);
      } else {
        alert("Not enough actions");
        return;
      }
    } else if (index == 6) {
      if (actionsLeftThisTurn >= Math.ceil(rebelGeneric6Threat / 2)) {
        map.get(planet).shipsAtLocation = map.get(planet).shipsAtLocation.concat([["ship", "rebel", rebelGeneric6Ship, rebelGeneric6ShipSize, false, rebelGeneric6PilotName, rebelGeneric6Threat, rebelGeneric6Hull, rebelGeneric6Shields, rebelGeneric6UpgradesArray, multiFNV1a(Date.now().toString()), rebelGeneric6Hull, rebelGeneric6Shields]]);
        tempHistoryOfThisTurn = tempHistoryOfThisTurn.concat(`produceRebelGeneric6At${planet}`);
        actionsLeftThisTurn -= Math.ceil(rebelGeneric6Threat / 2);
        alert(`Produced generic gauntlet at ${planet}`);
      } else {
        alert("Not enough actions")
        return;
      }
    } else if (index == 7) {
      if (actionsLeftThisTurn >= Math.ceil(rebelGeneric7Threat / 2)) {
        map.get(planet).shipsAtLocation = map.get(planet).shipsAtLocation.concat([["ship", "rebel", rebelGeneric7Ship, rebelGeneric7ShipSize, false, rebelGeneric7PilotName, rebelGeneric7Threat, rebelGeneric7Hull, rebelGeneric7Shields, rebelGeneric7UpgradesArray, multiFNV1a(Date.now().toString()), rebelGeneric7Hull, rebelGeneric7Shields]]);
        tempHistoryOfThisTurn = tempHistoryOfThisTurn.concat(`produceRebelGeneric7At${planet}`);
        actionsLeftThisTurn -= Math.ceil(rebelGeneric7Threat / 2);
        alert(`Produced generic vcx-100 at ${planet}`);
      } else {
        alert("Not enough actions")
        return;
      }
    }
  } else if (faction == "empire") {
    if (index == 1) {
      if (actionsLeftThisTurn >= Math.ceil(empireGeneric1Threat / 2)) {
        map.get(planet).shipsAtLocation = map.get(planet).shipsAtLocation.concat([["ship", "empire", empireGeneric1Ship, empireGeneric1ShipSize, false, empireGeneric1PilotName, empireGeneric1Threat, empireGeneric1Hull, empireGeneric1Shields, empireGeneric1UpgradesArray, multiFNV1a(Date.now().toString()), empireGeneric1Hull, empireGeneric1Shields]]);
        tempHistoryOfThisTurn = tempHistoryOfThisTurn.concat(`produceEmpireGeneric1At${planet}`);
        actionsLeftThisTurn -= Math.ceil(empireGeneric1Threat / 2);
        alert(`Produced generic UNKNOWN at ${planet}`);
      } else {
        alert("Not enough actions");
        return;
      }
    } else if (index == 2) {
      if (actionsLeftThisTurn >= Math.ceil(empireGeneric2Threat / 2)) {
        map.get(planet).shipsAtLocation = map.get(planet).shipsAtLocation.concat([["ship", "empire", empireGeneric2Ship, empireGeneric2ShipSize, false, empireGeneric2PilotName, empireGeneric2Threat, empireGeneric2Hull, empireGeneric2Shields, empireGeneric2UpgradesArray, multiFNV1a(Date.now().toString()), empireGeneric2Hull, empireGeneric2Shields]]);
        tempHistoryOfThisTurn = tempHistoryOfThisTurn.concat(`produceEmpireGeneric2At${planet}`);
        actionsLeftThisTurn -= Math.ceil(empireGeneric2Threat / 2);
        alert(`Produced generic UNKNOWN at ${planet}`);
      } else {
        alert("Not enough actions");
        return;
      }
    } else if (index == 3) {
      if (actionsLeftThisTurn >= Math.ceil(empireGeneric3Threat / 2)) {
        map.get(planet).shipsAtLocation = map.get(planet).shipsAtLocation.concat([["ship", "empire", empireGeneric3Ship, empireGeneric3ShipSize, false, empireGeneric3PilotName, empireGeneric3Threat, empireGeneric3Hull, empireGeneric3Shields, empireGeneric3UpgradesArray, multiFNV1a(Date.now().toString()), empireGeneric3Hull, empireGeneric3Shields]]);
        tempHistoryOfThisTurn = tempHistoryOfThisTurn.concat(`produceEmpireGeneric3At${planet}`);
        actionsLeftThisTurn -= Math.ceil(empireGeneric3Threat / 2);
        alert(`Produced generic UNKNOWN at ${planet}`);
      } else {
        alert("Not enough actions");
        return;
      }
    } else if (index == 4) {
      if (actionsLeftThisTurn >= Math.ceil(empireGeneric4Threat / 2)) {
        map.get(planet).shipsAtLocation = map.get(planet).shipsAtLocation.concat([["ship", "empire", empireGeneric4Ship, empireGeneric4ShipSize, false, empireGeneric4PilotName, empireGeneric4Threat, empireGeneric4Hull, empireGeneric4Shields, empireGeneric4UpgradesArray, multiFNV1a(Date.now().toString()), empireGeneric4Hull, empireGeneric4Shields]]);
        tempHistoryOfThisTurn = tempHistoryOfThisTurn.concat(`produceEmpireGeneric4At${planet}`);
        actionsLeftThisTurn -= Math.ceil(empireGeneric4Threat / 2);
        alert(`Produced generic UNKNOWN at ${planet}`);
      } else {
        alert("Not enough actions");
        return;
      }
    } else if (index == 5) {
      if (actionsLeftThisTurn >= Math.ceil(empireGeneric5Threat / 2)) {
        map.get(planet).shipsAtLocation = map.get(planet).shipsAtLocation.concat([["ship", "empire", empireGeneric5Ship, empireGeneric5ShipSize, false, empireGeneric5PilotName, empireGeneric5Threat, empireGeneric5Hull, empireGeneric5Shields, empireGeneric5UpgradesArray, multiFNV1a(Date.now().toString()), empireGeneric5Hull, empireGeneric5Shields]]);
        tempHistoryOfThisTurn = tempHistoryOfThisTurn.concat(`produceEmpireGeneric5At${planet}`);
        actionsLeftThisTurn -= Math.ceil(empireGeneric5Threat / 2);
        alert(`Produced generic UNKNOWN at ${planet}`);
      } else {
        alert("Not enough actions");
        return;
      }
    } else if (index == 6) {
      if (actionsLeftThisTurn >= Math.ceil(empireGeneric6Threat / 2)) {
        map.get(planet).shipsAtLocation = map.get(planet).shipsAtLocation.concat([["ship", "empire", empireGeneric6Ship, empireGeneric6ShipSize, false, empireGeneric6PilotName, empireGeneric6Threat, empireGeneric6Hull, empireGeneric6Shields, empireGeneric6UpgradesArray, multiFNV1a(Date.now().toString()), empireGeneric6Hull, empireGeneric6Shields]]);
        tempHistoryOfThisTurn = tempHistoryOfThisTurn.concat(`produceEmpireGeneric6At${planet}`);
        actionsLeftThisTurn -= Math.ceil(empireGeneric6Threat / 2);
        alert(`Produced generic UNKNOWN at ${planet}`);
      } else {
        alert("Not enough actions");
        return;
      }
    } else if (index == 7) {
      if (actionsLeftThisTurn >= Math.ceil(empireGeneric7Threat / 2)) {
        map.get(planet).shipsAtLocation = map.get(planet).shipsAtLocation.concat([["ship", "empire", empireGeneric7Ship, empireGeneric7ShipSize, false, empireGeneric7PilotName, empireGeneric7Threat, empireGeneric7Hull, empireGeneric7Shields, empireGeneric7UpgradesArray, multiFNV1a(Date.now().toString()), empireGeneric7Hull, empireGeneric7Shields]]);
        tempHistoryOfThisTurn = tempHistoryOfThisTurn.concat(`produceEmpireGeneric7At${planet}`);
        actionsLeftThisTurn -= Math.ceil(empireGeneric7Threat / 2);
        alert(`Produced generic UNKNOWN at ${planet}`);
      } else {
        alert("Not enough actions");
        return;
      }
    }
  } else if (faction == "republic") {
    if (index == 1) {
      if (actionsLeftThisTurn >= Math.ceil(republicGeneric1Threat / 2)) {
        map.get(planet).shipsAtLocation = map.get(planet).shipsAtLocation.concat([["ship", "republic", republicGeneric1Ship, republicGeneric1ShipSize, false, republicGeneric1PilotName, republicGeneric1Threat, republicGeneric1Hull, republicGeneric1Shields, republicGeneric1UpgradesArray, multiFNV1a(Date.now().toString()), republicGeneric1Hull, republicGeneric1Shields]]);
        tempHistoryOfThisTurn = tempHistoryOfThisTurn.concat(`produceRepublicGeneric1At${planet}`);
        actionsLeftThisTurn -= Math.ceil(republicGeneric1Threat / 2);
        alert(`Produced generic torrent at ${planet}`);
      } else {
        alert("Not enough actions");
        return;
      }
    } else if (index == 2) {
      if (actionsLeftThisTurn >= Math.ceil(republicGeneric2Threat / 2)) {
        map.get(planet).shipsAtLocation = map.get(planet).shipsAtLocation.concat([["ship", "republic", republicGeneric2Ship, republicGeneric2ShipSize, false, republicGeneric2PilotName, republicGeneric2Threat, republicGeneric2Hull, republicGeneric2Shields, republicGeneric2UpgradesArray, multiFNV1a(Date.now().toString()), republicGeneric2Hull, republicGeneric2Shields]]);
        tempHistoryOfThisTurn = tempHistoryOfThisTurn.concat(`produceRepublicGeneric2At${planet}`);
        actionsLeftThisTurn -= Math.ceil(republicGeneric2Threat / 2);
        alert(`Produced generic v-wing at ${planet}`);
      } else {
        alert("Not enough actions");
        return;
      }
    } else if (index == 3) {
      if (actionsLeftThisTurn >= Math.ceil(republicGeneric3Threat / 2)) {
        map.get(planet).shipsAtLocation = map.get(planet).shipsAtLocation.concat([["ship", "republic", republicGeneric3Ship, republicGeneric3ShipSize, false, republicGeneric3PilotName, republicGeneric3Threat, republicGeneric3Hull, republicGeneric3Shields, republicGeneric3UpgradesArray, multiFNV1a(Date.now().toString()), republicGeneric3Hull, republicGeneric3Shields]]);
        tempHistoryOfThisTurn = tempHistoryOfThisTurn.concat(`produceRepublicGeneric3At${planet}`);
        actionsLeftThisTurn -= Math.ceil(republicGeneric3Threat / 2);
        alert(`Produced generic headhunter at ${planet}`);
      } else {
        alert("Not enough actions");
        return;
      }
    } else if (index == 4) {
      if (actionsLeftThisTurn >= Math.ceil(republicGeneric4Threat / 2)) {
        map.get(planet).shipsAtLocation = map.get(planet).shipsAtLocation.concat([["ship", "republic", republicGeneric4Ship, republicGeneric4ShipSize, false, republicGeneric4PilotName, republicGeneric4Threat, republicGeneric4Hull, republicGeneric4Shields, republicGeneric4UpgradesArray, multiFNV1a(Date.now().toString()), republicGeneric4Hull, republicGeneric4Shields]]);
        tempHistoryOfThisTurn = tempHistoryOfThisTurn.concat(`produceRepublicGeneric4At${planet}`);
        actionsLeftThisTurn -= Math.ceil(republicGeneric4Threat / 2);
        alert(`Produced generic laat/i at ${planet}`);
      } else {
        alert("Not enough actions");
        return;
      }
    } else if (index == 5) {
      if (actionsLeftThisTurn >= Math.ceil(republicGeneric5Threat / 2)) {
        map.get(planet).shipsAtLocation = map.get(planet).shipsAtLocation.concat([["ship", "republic", republicGeneric5Ship, republicGeneric5ShipSize, false, republicGeneric5PilotName, republicGeneric5Threat, republicGeneric5Hull, republicGeneric5Shields, republicGeneric5UpgradesArray, multiFNV1a(Date.now().toString()), republicGeneric5Hull, republicGeneric5Shields]]);
        tempHistoryOfThisTurn = tempHistoryOfThisTurn.concat(`produceRepublicGeneric5At${planet}`);
        actionsLeftThisTurn -= Math.ceil(republicGeneric5Threat / 2);
        alert(`Produced generic arc at ${planet}`);
      } else {
        alert("Not enough actions");
        return;
      }
    } else if (index == 6) {
      if (actionsLeftThisTurn >= Math.ceil(republicGeneric6Threat / 2)) {
        map.get(planet).shipsAtLocation = map.get(planet).shipsAtLocation.concat([["ship", "republic", republicGeneric6Ship, republicGeneric6ShipSize, false, republicGeneric6PilotName, republicGeneric6Threat, republicGeneric6Hull, republicGeneric6Shields, republicGeneric6UpgradesArray, multiFNV1a(Date.now().toString()), republicGeneric6Hull, republicGeneric6Shields]]);
        tempHistoryOfThisTurn = tempHistoryOfThisTurn.concat(`produceRepublicGeneric6At${planet}`);
        actionsLeftThisTurn -= Math.ceil(republicGeneric6Threat / 2);
        alert(`Produced generic torrent at ${planet}`);
      } else {
        alert("Not enough actions");
        return;
      }
    } else if (index == 7) {
      if (actionsLeftThisTurn >= Math.ceil(republicGeneric7Threat / 2)) {
        map.get(planet).shipsAtLocation = map.get(planet).shipsAtLocation.concat([["ship", "republic", republicGeneric7Ship, republicGeneric7ShipSize, false, republicGeneric7PilotName, republicGeneric7Threat, republicGeneric7Hull, republicGeneric7Shields, republicGeneric7UpgradesArray, multiFNV1a(Date.now().toString()), republicGeneric7Hull, republicGeneric7Shields]]);
        tempHistoryOfThisTurn = tempHistoryOfThisTurn.concat(`produceRepublicGeneric7At${planet}`);
        actionsLeftThisTurn -= Math.ceil(republicGeneric7Threat / 2);
        alert(`Produced generic ywing at ${planet}`);
      } else {
        alert("Not enough actions");
        return;
      }
    }
  } else if (faction == "separatist") {
    if (index == 1) {
      // not / 2 because 2 ships are added
      if (actionsLeftThisTurn >= Math.ceil(separatistGeneric1Threat)) {
        map.get(planet).shipsAtLocation = map.get(planet).shipsAtLocation.concat([["ship", "separatist", separatistGeneric1Ship, separatistGeneric1ShipSize, false, separatistGeneric1PilotName, separatistGeneric1Threat, separatistGeneric1Hull, separatistGeneric1Shields, separatistGeneric1UpgradesArray, multiFNV1a(Date.now().toString()), separatistGeneric1Hull, separatistGeneric1Shields]]);
        map.get(planet).shipsAtLocation = map.get(planet).shipsAtLocation.concat([["ship", "separatist", separatistGeneric1Ship, separatistGeneric1ShipSize, false, separatistGeneric1PilotName, separatistGeneric1Threat, separatistGeneric1Hull, separatistGeneric1Shields, separatistGeneric1UpgradesArray, multiFNV1a(Date.now().toString()), separatistGeneric1Hull, separatistGeneric1Shields]]);
        tempHistoryOfThisTurn = tempHistoryOfThisTurn.concat(`produceSeparatistGeneric1At${planet}`);
        actionsLeftThisTurn -= Math.ceil(separatistGeneric1Threat);
        alert(`Produced 2x Vulture Generics at ${planet}`);
      } else {
        alert("Not enough actions");
        return;
      }
    } else if (index == 2) {
      if (actionsLeftThisTurn >= Math.ceil(separatistGeneric2Threat / 2)) {
        map.get(planet).shipsAtLocation = map.get(planet).shipsAtLocation.concat([["ship", "separatist", separatistGeneric2Ship, separatistGeneric2ShipSize, false, separatistGeneric2PilotName, separatistGeneric2Threat, separatistGeneric2Hull, separatistGeneric2Shields, separatistGeneric2UpgradesArray, multiFNV1a(Date.now().toString()), separatistGeneric2Hull, separatistGeneric2Shields]]);
        tempHistoryOfThisTurn = tempHistoryOfThisTurn.concat(`produceSeparatistGeneric2At${planet}`);
        actionsLeftThisTurn -= Math.ceil(separatistGeneric2Threat / 2);
      } else {
        alert("Not enough actions");
        return;
      }
    } else if (index == 3) {
      if (actionsLeftThisTurn >= Math.ceil(separatistGeneric3Threat / 2)) {
        map.get(planet).shipsAtLocation = map.get(planet).shipsAtLocation.concat([["ship", "separatist", separatistGeneric3Ship, separatistGeneric3ShipSize, false, separatistGeneric3PilotName, separatistGeneric3Threat, separatistGeneric3Hull, separatistGeneric3Shields, separatistGeneric3UpgradesArray, multiFNV1a(Date.now().toString()), separatistGeneric3Hull, separatistGeneric3Shields]]);
        tempHistoryOfThisTurn = tempHistoryOfThisTurn.concat(`produceSeparatistGeneric3At${planet}`);
        actionsLeftThisTurn -= Math.ceil(separatistGeneric3Threat / 2);
        alert(`Produced HMP Generic at ${planet}`);
      } else {
        alert("Not enough actions");
        return;
      }
    } else if (index == 4) {
      if (actionsLeftThisTurn >= Math.ceil(separatistGeneric4Threat / 2)) {
        map.get(planet).shipsAtLocation = map.get(planet).shipsAtLocation.concat([["ship", "separatist", separatistGeneric4Ship, separatistGeneric4ShipSize, false, separatistGeneric4PilotName, separatistGeneric4Threat, separatistGeneric4Hull, separatistGeneric4Shields, separatistGeneric4UpgradesArray, multiFNV1a(Date.now().toString()), separatistGeneric4Hull, separatistGeneric4Shields]]);
        tempHistoryOfThisTurn = tempHistoryOfThisTurn.concat(`produceSeparatistGeneric4At${planet}`);
        actionsLeftThisTurn -= Math.ceil(separatistGeneric4Threat / 2);
        alert(`Produced Trifighter Generic at ${planet}`);
      } else {
        alert("Not enough actions");
        return;
      }
    } else if (index == 5) {
      if (actionsLeftThisTurn >= Math,ceil(separatistGeneric5Threat / 2)) {
        map.get(planet).shipsAtLocation = map.get(planet).shipsAtLocation.concat([["ship", "separatist", separatistGeneric5Ship, separatistGeneric5ShipSize, false, separatistGeneric5PilotName, separatistGeneric5Threat, separatistGeneric5Hull, separatistGeneric5Shields, separatistGeneric5UpgradesArray, multiFNV1a(Date.now().toString()), separatistGeneric5Hull, separatistGeneric5Shields]]);
        tempHistoryOfThisTurn = tempHistoryOfThisTurn.concat(`produceSeparatistGeneric5At${planet}`);
        actionsLeftThisTurn -= Math,ceil(separatistGeneric5Threat / 2);
        alert(`Produced Nantex Generic at ${planet}`);
      } else {
        alert("Not enough actions");
        return;
      }
    } else if (index == 6) {
      if (actionsLeftThisTurn >= Math.ceil(separatistGeneric6Threat / 2)) {
        map.get(planet).shipsAtLocation = map.get(planet).shipsAtLocation.concat([["ship", "separatist", separatistGeneric6Ship, separatistGeneric6ShipSize, false, separatistGeneric6PilotName, separatistGeneric6Threat, separatistGeneric6Hull, separatistGeneric6Shields, separatistGeneric6UpgradesArray, multiFNV1a(Date.now().toString()), separatistGeneric6Hull, separatistGeneric6Shields]]);
        tempHistoryOfThisTurn = tempHistoryOfThisTurn.concat(`produceSeparatistGeneric6At${planet}`);
        actionsLeftThisTurn -= Math.ceil(separatistGeneric6Threat / 2);
        alert(`Produced Rogue Generic at ${planet}`);
      } else {
        alert("Not enough actions");
        return;
      }
    } else if (index == 7) {
      if (actionsLeftThisTurn >= Math.ceil(separatistGeneric7Threat / 2)) {
        map.get(planet).shipsAtLocation = map.get(planet).shipsAtLocation.concat([["ship", "separatist", separatistGeneric7Ship, separatistGeneric7ShipSize, false, separatistGeneric7PilotName, separatistGeneric7Threat, separatistGeneric7Hull, separatistGeneric7Shields, separatistGeneric7UpgradesArray, multiFNV1a(Date.now().toString()), separatistGeneric7Hull, separatistGeneric7Shields]]);
        tempHistoryOfThisTurn = tempHistoryOfThisTurn.concat(`produceSeparatistGeneric7At${planet}`);
        actionsLeftThisTurn -= Math.ceil(separatistGeneric7Threat / 2);
        alert(`Produced Firespray Generic at ${planet}`);
      } else {
        alert("Not enough actions");
        return;
      }
    }
  } else if (faction == "fo") {
    if (index == 1) {
      if (actionsLeftThisTurn >= Math.ceil(foGeneric1Threat / 2)) {
        map.get(planet).shipsAtLocation = map.get(planet).shipsAtLocation.concat([["ship", "fo", foGeneric1Ship, foGeneric1ShipSize, false, foGeneric1PilotName, foGeneric1Threat, foGeneric1Hull, foGeneric1Shields, foGeneric1UpgradesArray, multiFNV1a(Date.now().toString()), foGeneric1Hull, foGeneric1Shields]]);
        tempHistoryOfThisTurn = tempHistoryOfThisTurn.concat(`produceFOGeneric1At${planet}`);
        actionsLeftThisTurn -= Math.ceil(foGeneric1Threat / 2);
      } else {
        alert("Not enough actions");
        return;
      }
    } else if (index == 2) {
      if (actionsLeftThisTurn >= Math.ceil(foGeneric2Threat / 2)) {
        map.get(planet).shipsAtLocation = map.get(planet).shipsAtLocation.concat([["ship", "fo", foGeneric2Ship, foGeneric2ShipSize, false, foGeneric2PilotName, foGeneric2Threat, foGeneric2Hull, foGeneric2Shields, foGeneric2UpgradesArray, multiFNV1a(Date.now().toString()), foGeneric2Hull, foGeneric2Shields]]);
        tempHistoryOfThisTurn = tempHistoryOfThisTurn.concat(`produceFOGeneric2At${planet}`);
        actionsLeftThisTurn -= Math.ceil(foGeneric2Threat / 2);
      } else {
        alert("Not enough actions");
        return;
      }
    } else if (index == 3) {
      if (actionsLeftThisTurn >= Math.ceil(foGeneric3Threat / 2)) {
        map.get(planet).shipsAtLocation = map.get(planet).shipsAtLocation.concat([["ship", "fo", foGeneric3Ship, foGeneric3ShipSize, false, foGeneric3PilotName, foGeneric3Threat, foGeneric3Hull, foGeneric3Shields, foGeneric3UpgradesArray, multiFNV1a(Date.now().toString()), foGeneric3Hull, foGeneric3Shields]]);
        tempHistoryOfThisTurn = tempHistoryOfThisTurn.concat(`produceFOGeneric3At${planet}`);
        actionsLeftThisTurn -= Math.ceil(foGeneric3Threat / 2);
      } else {
        alert("Not enough actions");
        return;
      }
    } else if (index == 4) {
      if (actionsLeftThisTurn >= Math.ceil(foGeneric4Threat / 2)) {
        map.get(planet).shipsAtLocation = map.get(planet).shipsAtLocation.concat([["ship", "fo", foGeneric4Ship, foGeneric4ShipSize, false, foGeneric4PilotName, foGeneric4Hull, foGeneric4Hull, foGeneric4Shields, foGeneric4UpgradesArray, multiFNV1a(Date.now().toString()), foGeneric4Hull, foGeneric4Shields]]);
        tempHistoryOfThisTurn = tempHistoryOfThisTurn.concat(`produceFOGeneric4At${planet}`);
        actionsLeftThisTurn -= Math.ceil(foGeneric4Threat / 2);
      } else {
        alert("Not enough actions");
        return;
      }
    } else if (index == 5) {
      if (actionsLeftThisTurn >= Math.ceil(foGeneric5Threat / 2)) {
        map.get(planet).shipsAtLocation = map.get(planet).shipsAtLocation.concat([["ship", "fo", foGeneric5Ship, foGeneric5ShipSize, false, foGeneric5PilotName, foGeneric5Threat, foGeneric5Hull, foGeneric5Shields, foGeneric5UpgradesArray, multiFNV1a(Date.now().toString()), foGeneric5Hull, foGeneric5Shields]]);
        tempHistoryOfThisTurn = tempHistoryOfThisTurn.concat(`produceFOGeneric5At${planet}`);
        actionsLeftThisTurn -= Math.ceil(foGeneric5Threat / 2);
      } else {
        alert("Not enough actions");
        return;
      }
    } else if (index == 6) {
      if (actionsLeftThisTurn >= Math.ceil(foGeneric6Threat / 2)) {
        map.get(planet).shipsAtLocation = map.get(planet).shipsAtLocation.concat([["ship", "fo", foGeneric6Ship, foGeneric6ShipSize, false, foGeneric6PilotName, foGeneric6Threat, foGeneric6Hull, foGeneric6Shields, foGeneric6UpgradesArray, multiFNV1a(Date.now().toString()), foGeneric6Hull, foGeneric6Shields]]);
        tempHistoryOfThisTurn = tempHistoryOfThisTurn.concat(`produceFOGeneric6At${planet}`);
        actionsLeftThisTurn -= Math.ceil(foGeneric6Threat / 2);
      } else {
        alert("Not enough actions");
        return;
      }
    } else if (index == 7) {
      if (actionsLeftThisTurn >= Math.ceil(foGeneric7Threat / 2)) {
        map.get(planet).shipsAtLocation = map.get(planet).shipsAtLocation.concat([["ship", "fo", foGeneric7Ship, foGeneric7ShipSize, false, foGeneric7PilotName, foGeneric7Threat, foGeneric7Hull, foGeneric7Shields, [], multiFNV1a(Date.now().toString()), foGeneric7Hull, foGeneric7Shields]]);
        tempHistoryOfThisTurn = tempHistoryOfThisTurn.concat(`produceFOGeneric7At${planet}`);
        actionsLeftThisTurn -= Math.ceil(foGeneric7Threat / 2);
      } else {
        alert("Not enough actions");
        return;
      }
    }
  } else {
    alert("ERROR -- produceGeneric() faction not found");
    return;
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
    // UUID - hash string of Date.now() -- milliseconds since the epoch
