// Switch to planet view on click
window.addEventListener('click', (event) => {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObject(stars);
  if (intersects.length > 0 && document.getElementById("planet-details-view").style.display == "none" && document.getElementById("enter-code-container").style.display == "none") {
    const intersect = intersects[0];
    const index = intersect.index;
    const starName = planets[index].name;
    switchToPlanetView(starName)
  }
  updateScore();
});

document.getElementById("planet-details-back").addEventListener("click", () => {
  document.getElementById('planet-details-view').style.display = 'none';
  document.getElementById("planet-details-back").style.display = 'none';
  document.getElementById("move-locations").style.display = "none";
  document.getElementById("planet-score-container").style.display = 'flex';
  document.getElementById("player-one-score").style.display = 'block';
  document.getElementById("player-two-score").style.display = 'block';
  if (playerCount == 3) {
    document.getElementById("player-three-score").style.display = 'block';
  }
})

function moveShip(shipUUID, currentLocation, locationToMoveTo) {
  let map = new Map(planets.map(obj => [obj.name, obj]));

  let currentPlayerFaction;
  if (determineCurrentPlayer() == "player1") {
    currentPlayerFaction = playerOneFaction;
  } else if (determineCurrentPlayer() == "player2") {
    currentPlayerFaction == playerTwoFaction;
  } else {
    currentPlayerFaction = playerThreeFaction;
  }

  let letMovementHappen = true;

  map.get(currentLocation).shipsAtLocation.forEach((ship) => {
    if (ship[1] !== currentPlayerFaction) {
      letMovementHappen = false
    }
  })

  if (!letMovementHappen) {
    alert("A ship with enemy ships in the same location cannot move.")
    return;
  }

  // lock movement if holocron needed
  if (determineCurrentPlayer() == "player1") {
    if (locationToMoveTo == "point213" && currentLocation == "Mygeeto") {
      if (!playerOneHasHolocron1) {
        alert("You do not have holocron 1.");
        return;
      }
    }

    if (locationToMoveTo == "point114" && currentLocation == "Endor") {
      if (!playerOneHasHolocron2) {
        alert("You do not have holocron 2.");
        return;
      }
    }

    if (locationToMoveTo == "point218" && currentLocation == "Jakku") {
      if (!playerOneHasHolocron3) {
        alert("You do not have holocron 3.");
        return;
      }
    }
  } else if (determineCurrentPlayer() == "player2") {
    if (locationToMoveTo == "point213" && currentLocation == "Mygeeto") {
      if (!playerTwoHasHolocron1) {
        alert("You do not have holocron 1.");
        return;
      }
    }

    if (locationToMoveTo == "point114" && currentLocation == "Endor") {
      if (!playerTwoHasHolocron2) {
        alert("You do not have holocron 2.");
        return;
      }
    }

    if (locationToMoveTo == "point218" && currentLocation == "Jakku") {
      if (!playerTwoHasHolocron3) {
        alert("You do not have holocron 3.");
        return;
      }
    }
  } else if (determineCurrentPlayer() == "player3") {
    if (locationToMoveTo == "point213" && currentLocation == "Mygeeto") {
      if (!playerThreeHasHolocron1) {
        alert("You do not have holocron 1.");
        return;
      }
    }

    if (locationToMoveTo == "point114" && currentLocation == "Endor") {
      if (!playerThreeHasHolocron2) {
        alert("You do not have holocron 2.");
        return;
      }
    }

    if (locationToMoveTo == "point218" && currentLocation == "Jakku") {
      if (!playerThreeHasHolocron3) {
        alert("You do not have holocron 3.");
        return;
      }
    }
  }

  console.log(`moving ${shipUUID} to ${locationToMoveTo}`);

  let shipsAtCurrent = map.get(currentLocation).shipsAtLocation;

  // Find index of the ship with matching UUID
  let index = shipsAtCurrent.findIndex(child => String(child[10]) === String(shipUUID));

  if (index !== -1) {
    if (actionsLeftThisTurn >= 0.2) {
      // Get the ship object before removing it
      const ship = shipsAtCurrent[index];

      // Remove ship from current location
      shipsAtCurrent.splice(index, 1);

      // Add ship to new location
      map.get(locationToMoveTo).shipsAtLocation.push(ship);

      actionsLeftThisTurn -= 0.20;
    } else {
      alert("Not enough actions");
      return;
    }
  } else {
    alert("ERROR -- planetview.js moveShip() can't find ship to move");
    return;
  }

  // refresh view
  switchToPlanetView(currentLocation);

  tempHistoryOfThisTurn = tempHistoryOfThisTurn.concat(`movedUUID${shipUUID}From${currentLocation}To${locationToMoveTo}`);
  document.getElementById("move-locations").style.display = "none";

  alert(`Sucessfully moved ${shipUUID} from ${currentLocation} to ${locationToMoveTo}`);

  checkIfActionsAreComplete();
}

function claimHolocron(planet) {
  if (actionsLeftThisTurn >= 1) {
    
  } else {
    alert("Not enough actions");
    return;
  }

  let map = new Map(planets.map(obj => [obj.name, obj]));
  let currentPlayer = determineCurrentPlayer();

  if (currentPlayer == "player1") {
    if (map.get(planet).holocron1) {
      actionsLeftThisTurn -= 1;
      playerOneHasHolocron1 = true;
      return;
    } else if (map.get(planet).holocron2) {
      actionsLeftThisTurn -= 1;
      playerOneHasHolocron2 = true;
      return;
    } else if (map.get(planet).holocron3) {
      actionsLeftThisTurn -= 1;
      playerOneHasHolocron3 = true;
      return;
    }
  } else if (currentPlayer == "player2") {
    if (map.get(planet).holocron1) {
      actionsLeftThisTurn -= 1;
      playerTwoHasHolocron1 = true;
      return;
    } else if (map.get(planet).holocron2) {
      actionsLeftThisTurn -= 1;
      playerTwoHasHolocron2 = true;
      return;
    } else if (map.get(planet).holocron3) {
      actionsLeftThisTurn -= 1;
      playerTwoHasHolocron3 = true;
      return;
    }
  } else if (currentPlayer == "player3") {
    if (map.get(planet).holocron1) {
      actionsLeftThisTurn -= 1;
      playerThreeHasHolocron1 = true;
      return;
    } else if (map.get(planet).holocron2) {
      actionsLeftThisTurn -= 1;
      playerThreeHasHolocron2 = true;
      return;
    } else if (map.get(planet).holocron3) {
      actionsLeftThisTurn -= 1;
      playerThreeHasHolocron3 = true;
      return;
    }

    checkIfActionsAreComplete();
  }

  // if function reaches this point something went wrong
  alert(`No holocron at ${planet}`);
  return;
}

function fixShip(ship) {
  console.log("Reached pt 1")
  if (actionsLeftThisTurn >= 1) {
    
  } else {
    alert("Not enough actions");
    return;
  }

  let map = new Map(planets.map(obj => [obj.name, obj]));
  let uuid = ship[10];

  let arrayOfPlanetNames = [];

  planets.forEach((item) => {
    arrayOfPlanetNames.unshift(item.name);
  });

  arrayOfPlanetNames.forEach((planetName) => {
    map.get(planetName).shipsAtLocation.forEach((ship) => {
      if (ship[10] == uuid) {
        // only need to check shields
        if (ship[8] !== ship[12]) {
          ship[7] = ship[11];
          ship[8] = ship[12];
          actionsLeftThisTurn -= 1;
          alert(`Ship ${uuid} repaired.`);
        } else {
          alert("Repair failed - ship at full health");
        }
      }
    });
  });

  checkIfActionsAreComplete();
}

function closeMoveContainers() {
  document.getElementById("move-locations").style.innerHTML = "";
  document.getElementById("move-locations").style.display = "none";
}

function showValidMoves(planetName, ship) {
  let map = new Map(planets.map(obj => [obj.name, obj]));
  document.getElementById("move-locations").style.display = "flex";
  document.getElementById("move-locations").innerHTML = "";
  document.getElementById("move-locations").innerHTML += "<button onclick='closeMoveContainers()' id='move-locations-close'>X</button>";

  map.get(planetName).movesFromLocation.forEach((location) => {
    document.getElementById("move-locations").innerHTML += `
      <button onclick="moveShip('${ship}', '${planetName}', '${location}')">${location}</button>
    `;
  });
}

function shipNameToIcon(name) {
  switch(name) {
    case "tieadvancedx1":
      return "A";
    case "tiebomber":
      return "B";
    case "miningguildtie":
      return "C";
    case "tiedefender":
      return "D";
    case "awing":
      return "E";
    case "tie":
      return "F";
    case "vcx100":
      return "G";
    case "scurrg":
      return "H";
    case "tieinterceptor":
      return "I";
    case "tieheavy":
      return "J";
    case "kimogilia":
      return "K";
    case "lancer":
      return "L";
    case "fangfighter":
      return "M";
    case "tiepunisher":
      return "N";
    case "tiewhisper":
      return "P";
    case "xi":
      return "Q";
    case "tieadvancedv1":
      return "R";
    case "tiestriker":
      return "T";
    case "upsilon":
      return "U";
    case "tiereaper":
      return "V";
    case "yt1300":
      return "X";
    default:
      return "?";
  }
}

let refresh = true;

function switchToPlanetView(planetName) {
  // Show/hide relevant UI elements
  document.getElementById("planet-details-view").style.display = 'flex';
  document.getElementById("planet-details-back").style.display = 'block';
  document.getElementById("planet-score-container").style.display = 'none';
  document.getElementById("player-one-score").style.display = 'none';
  document.getElementById("player-two-score").style.display = 'none';
  document.getElementById("player-three-score").style.display = 'none';

  // Determine if it's a planet
  const isPlanet = !planetName.startsWith("point");

  // Set background and labels
  document.getElementById("planet-details-bg-image").src = "resources/galaxies.jpg";
  document.getElementById("aurebesh-text").innerText = planetName;
  document.getElementById("english-text").innerText = planetName;

  // Clear UI containers
  document.getElementById("ships-at-location").style.display = "flex";
  document.getElementById("ships-at-location").innerHTML = "";
  document.getElementById("enemy-ships-at-location").innerHTML = "";
  document.getElementById("station-at-location").innerHTML = "";

  // Show or hide the "Claim Planet" button
  document.getElementById("claim-planet").style.display = isPlanet ? "block" : "none";

  // Planet map and player data
  const map = new Map(planets.map(obj => [obj.name, obj]));
  const currentPlayer = determineCurrentPlayer();
  const currentPlayerFaction = currentPlayer === "player1"
    ? playerOneFaction
    : currentPlayer === "player2"
      ? playerTwoFaction
      : playerThreeFaction;

  const locationData = map.get(planetName).shipsAtLocation;

  // Pre-check if the location has a space station
  const hasStation = locationData.some(item => item[0] === "spaceStation");

  // Render objects at the location
  locationData.forEach((item) => {
    const [type, faction, name, shipSize, isAce, pilotName, threatValue, hull, shield, upgradesArray, id, fullHull, fullShield] = item;

    if (type === "ship" && faction === currentPlayerFaction) {
      // Player-owned ship
      let shipHTML = `
        <div class="ship">
          <p class="icon">${shipNameToIcon(name)}</p>
          <p class="pilot-name">${pilotName}</p>
          <p class="hull-count">${hull} <span>v</span></p>
          <p class="shield-count">${shield} <span>v</span></p>
          <button class="move-ship" onclick='showValidMoves("${planetName}", "${id}")'>Move ship (1 action)</button>
      `;

      // Add holocron claim button if applicable
      if (isPlanet && checkIfLocationHasHolocron(planetName) !== "none") {
        shipHTML += `<button class="claim-holocron" onclick='claimHolocron("${planetName}")'>Claim ${planetName} holocron (3 actions)</button>`;
      }

      // Add fix button if station is present
      if (hasStation) {
        shipHTML += `<button onclick='fixShip(${JSON.stringify(item)})' class="fix-ship">Fix ship (0.2 actions)</button>`;
      }

      shipHTML += `</div>`;
      document.getElementById("ships-at-location").innerHTML += shipHTML;

    } else if (type === "ship" && faction !== currentPlayerFaction) {
      // Enemy ship
      document.getElementById("enemy-ships-at-location").innerHTML += `
        <div class="ship">
          <p class="icon">${shipNameToIcon(name)}</p>
          <p class="pilot-name">${pilotName}</p>
          <p class="hull-count">${hull} <span>v</span></p>
          <p class="shield-count">${shield} <span>v</span></p>
        </div>
      `;

    } else if (type === "spaceStation") {
      // Space station
      document.getElementById("station-at-location").innerHTML += `
        <div class="ship">
          <p class="icon">${shipNameToIcon(name)}</p>
          <p class="pilot-name">Space Station</p>
          <p class="hull-count">${hull} <span>v</span></p>
          <p class="shield-count">${shield} <span>v</span></p>
        </div>
      `;
    }
  });
}

// function switchToPlanetView(planetName) {
//   document.getElementById("planet-details-view").style.display = 'flex';
//   document.getElementById("planet-details-back").style.display = 'block';
//   document.getElementById("planet-score-container").style.display = 'none';
//   document.getElementById("player-one-score").style.display = 'none';
//   document.getElementById("player-two-score").style.display = 'none';
//   document.getElementById("player-three-score").style.display = 'none';

//   const isPlanet = !planetName.startsWith("point");

//   document.getElementById("planet-details-bg-image").src = "resources/galaxies.jpg";

//   document.getElementById("aurebesh-text").innerText = planetName;
//   document.getElementById("english-text").innerText = planetName;
//   document.getElementById("ships-at-location").style.display = "flex";
//   document.getElementById("ships-at-location").innerHTML = "";
//   document.getElementById("enemy-ships-at-location").innerHTML = "";
//   document.getElementById("station-at-location").innerHTML = "";

//   if (!isPlanet) {
//     document.getElementById("claim-planet").style.display = "none";
//   } else {
//     document.getElementById("claim-planet").style.display = "block";
//   }

//   const currentPlayer = determineCurrentPlayer();
//   const currentPlayerFaction = currentPlayer === "player1"
//     ? playerOneFaction
//     : currentPlayer === "player2"
//       ? playerTwoFaction
//       : playerThreeFaction;

//   let map = new Map(planets.map(obj => [obj.name, obj]));

//   map.get(planetName).shipsAtLocation.forEach((item) => {
//     if (item[1] == currentPlayerFaction && item[0] == "ship") {
//       if (isPlanet) {
//         if (checkIfLocationHasHolocron(planetName) !== "none") {
//           document.getElementById("ships-at-location").innerHTML += `
//             <div class="ship">
//               <p class="icon">${shipNameToIcon(item[2])}</p>
//               <p class="pilot-name">${item[5]}</p>
//               <p class="hull-count">${item[7]} <span>v</span></p>
//               <p class="shield-count">${item[8]} <span>v</span></p>
//              <button class="move-ship" onclick='showValidMoves("${planetName}", "${item[10]}")'>Move ship (1 action)</button>
//              <button class="claim-holocron" onclick='claimHolocron("${planetName}")'>Claim ${planetName} holocron (3 actions)</button>
//             </div>`;
//         } else if (checkIfLocationHasHolocron(planetName) !== "none") {
//           document.getElementById("ships-at-location").innerHTML += `
//             <div class="ship">
//               <p class="icon">${shipNameToIcon(item[2])}</p>
//               <p class="pilot-name">${item[5]}</p>
//               <p class="hull-count">${item[7]} <span>v</span></p>
//               <p class="shield-count">${item[8]} <span>v</span></p>
//              <button class="move-ship" onclick='showValidMoves("${planetName}", "${item[10]}")'>Move ship (1 action)</button>
//              <button class="claim-holocron" onclick='claimHolocron("${planetName}")'>Claim ${planetName} holocron (3 actions)</button>
//             </div>`;
//         } else if (document.getElementById("station-at-location").getElementsByClassName('ship').length > 0) {
//           document.getElementById("ships-at-location").innerHTML += `
//             <div class="ship">
//               <p class="icon">${shipNameToIcon(item[2])}</p>
//               <p class="pilot-name">${item[5]}</p>
//               <p class="hull-count">${item[7]} <span>v</span></p>
//               <p class="shield-count">${item[8]} <span>v</span></p>
//              <button class="move-ship" onclick='showValidMoves("${planetName}", "${item[10]}")'>Move ship (1 action)</button>
//              <button onclick='console.log(${item}); fixShip(${item})' class="fix-ship">Fix ship (1 action)</button>
//             </div>`;
//         } else {
//           document.getElementById("ships-at-location").innerHTML += `
//             <div class="ship">
//               <p class="icon">${shipNameToIcon(item[2])}</p>
//               <p class="pilot-name">${item[5]}</p>
//               <p class="hull-count">${item[7]} <span>v</span></p>
//               <p class="shield-count">${item[8]} <span>v</span></p>
//              <button class="move-ship" onclick='showValidMoves("${planetName}", "${item[10]}")'>Move ship (1 action)</button>
//             </div>`;
//         }
//       } else {
//         document.getElementById("ships-at-location").innerHTML += `
//           <div class="ship">
//             <p class="icon">${shipNameToIcon(item[2])}</p>
//             <p class="pilot-name">${item[5]}</p>
//             <p class="hull-count">${item[7]} <span>v</span></p>
//             <p class="shield-count">${item[8]} <span>v</span></p>
//            <button class="move-ship" onclick='showValidMoves("${planetName}", "${item[10]}")'>Move ship (1 action)</button>
//           </div>`;
//       }
//     } else if (item[0] == "ship" && item[1] !== currentPlayerFaction) {
//       document.getElementById("enemy-ships-at-location").innerHTML += `
//             <div class="ship">
//               <p class="icon">${shipNameToIcon(item[2])}</p>
//               <p class="pilot-name">${item[5]}</p>
//               <p class="hull-count">${item[7]} <span>v</span></p>
//               <p class="shield-count">${item[8]} <span>v</span></p>
//             </div>`;
//     } else if (item[0] == "spaceStation") {
//       document.getElementById("station-at-location").innerHTML += `
//       <div class="ship">
//           <p class="icon">${shipNameToIcon(item[2])}</p>
//           <p class="pilot-name">Space Station</p>
//           <p class="hull-count">${item[7]} <span>v</span></p>
//           <p class="shield-count">${item[8]} <span>v</span></p>
//         </div>
//       `;
//     }
//   })
// }


    // Ship array

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
