function addActionsToHistory(player, action) {
  history.unshift([`${player}`, action],);
}

function copyText() {
  const copyText = generateNewCode();

  // Use the Clipboard API
  navigator.clipboard.writeText(copyText)
      .then(() => {
          alert("Text copied to clipboard!");
      })
      .catch(err => {
          console.error("Failed to copy text: ", err);
      });
}

function checkForGameEnd() {
  let map = new Map(planets.map(obj => [obj.name, obj]));

  if (playerCount == 2) {
    const twoPlayerValues = [map.get(playerOneFactoryPlanet).occupier, map.get(playerOneCapitalPlanet).occupier, map.get(playerTwoFactoryPlanet).occupier, map.get(playerTwoCapitalPlanet).occupier];
    if (twoPlayerValues.every(v => v === map.get(playerOneFactoryPlanet).occupier)) {
      return "game end";
    }
  } else {
    const threePlayerValues = [map.get(playerOneFactoryPlanet).occupier, map.get(playerOneCapitalPlanet).occupier, map.get(playerTwoFactoryPlanet).occupier, map.get(playerTwoCapitalPlanet).occupier, map.get(playerThreeFactoryPlanet).occupier, map.get(playerThreeCapitalPlanet).occupier];
    if (threePlayerValues.every(v => v === map.get(playerOneFactoryPlanet).occupier)) {
      return "game end";
    }
  }

  return "game continuing";
}

function checkForFights() {
  let map = new Map(planets.map(obj => [obj.name, obj]));

  document.getElementById("planet-score-container").style.opacity = "0";
  document.getElementById("holocron-locations-container").style.display = "none";
  document.getElementById("produce-ship-container").style.display = "none";
  document.getElementById("actions-left-container").style.display = "none";
  document.getElementById("fights-to-be-resolved").style.display = "flex";

  if (checkForGameEnd() == "game end") {
    document.getElementById("fights-to-be-resolved").innerHTML = "<h1>GAME END</h1>"
  }

  map.forEach((planet) => {
    if (!planet.shipsAtLocation || planet.shipsAtLocation.length === 0) {
      console.log(`No ships at ${planet.name}.`);
      return;
    }

    let faction = planet.shipsAtLocation[0][1];
    let fight = false;

    document.getElementById("fights-to-be-resolved").innerHTML += `<button onclick='copyText()'>Copy Code</button>`;

    for (let ship of planet.shipsAtLocation) {
      if (ship[1] !== faction) {
        fight = true;
        console.log(`Fight at ${planet.name}!`);
        document.getElementById("fights-to-be-resolved").innerHTML += `
        <p>Fight at ${planet.name}!</p>`;
        break;
      }
    }

    if (!fight) {
      console.log(`No fight at ${planet.name}.`);
    }
  });

}


function checkIfActionsAreComplete() {
  if (actionsLeftThisTurn == 0) {
    addActionsToHistory(determineCurrentPlayer(), tempHistoryOfThisTurn);
    checkForFights();
  } else {
    return;
  }
}