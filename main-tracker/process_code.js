document.getElementById("enter-code-submit").addEventListener("click", processCode);

let failedAttempts = 0;

function processCode() {
  let input = document.getElementById("enter-code-input").value;

  if (input === "") {
    if (failedAttempts === 0) {
      alert("Nice try. I thought of that.");
    } else if (failedAttempts === 1) {
      alert("It won't work this time either.");
    } else {
      alert("Or this time.");
    }
    failedAttempts++;
    return;
  }

  let decoded;
  try {
    decoded = JSON.parse(atob(input));
  } catch (e) {
    alert("Invalid code format.");
    return;
  }

  // Set player & map state
  playerCount = decoded[0];
  playerOneFaction = decoded[1];
  playerOneFactoryPlanet = decoded[2];
  playerOneCapitalPlanet = decoded[3];
  playerTwoFaction = decoded[4];
  playerTwoFactoryPlanet = decoded[5];
  playerTwoCapitalPlanet = decoded[6];

  if (playerCount == 3) {
    playerThreeFaction = decoded[7];
    playerThreeFactoryPlanet = decoded[8];
    playerThreeCapitalPlanet = decoded[9];
  }

  if (decoded[10].length !== 0) {
    history = history.concat(decoded[10]);
  }

  playerOneHasHolocron1 = decoded[11];
  playerOneHasHolocron2 = decoded[12];
  playerOneHasHolocron3 = decoded[13];

  playerTwoHasHolocron1 = decoded[14];
  playerTwoHasHolocron2 = decoded[15];
  playerTwoHasHolocron3 = decoded[16];

  playerThreeHasHolocron1 = decoded[17];
  playerThreeHasHolocron2 = decoded[18];
  playerThreeHasHolocron3 = decoded[19];

  let map = new Map(planets.map(obj => [obj.name, obj]));

  // Start from index shipDataStart for ship / planet data
  let shipDataStart = 20;
  let names = [...planets.map(p => p.name)];
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const shipsAtLocationEntry = decoded[shipDataStart + i][0];
    const occupier = decoded[shipDataStart + i][1];
    const hasHolocron1 = decoded[shipDataStart + i][2];
    const hasHolocron2 = decoded[shipDataStart + i][3];
    const hasHolocron3 = decoded[shipDataStart + i][4];
    if (!map.has(name)) {
      console.warn(`No planet '${name}' in map.`);
      continue;
    }
    // Fallback to empty array if value is not an array
    map.get(name).shipsAtLocation = Array.isArray(shipsAtLocationEntry) ? shipsAtLocationEntry : [];
    map.get(name).occupier = occupier;
    if (map.get(name).name.slice(0, 5) !== "point") {
      map.get(name).holocron1 = hasHolocron1;
      map.get(name).holocron2 = hasHolocron2;
      map.get(name).holocron3 = hasHolocron3;
    }
  }

  // Make sure not to overwrite if a player has captured a factory / capital
  // This does not overwrite the opponent capturing a factory / planet
  if (map.get(playerOneFactoryPlanet).occupier == "neutral") {
    map.get(playerOneFactoryPlanet).occupier = "player1";
  }
  if (map.get(playerOneCapitalPlanet).occupier == "neutral") {
    map.get(playerOneCapitalPlanet).occupier = "player1";
  }
  if (map.get(playerTwoFactoryPlanet).occupier == "neutral") {
    map.get(playerTwoFactoryPlanet).occupier = "player2";
  }
  if (map.get(playerTwoCapitalPlanet).occupier == "neutral") {
    map.get(playerTwoCapitalPlanet).occupier = "player2";
  }
  if (playerCount == 3) {
    if (map.get(playerThreeFactoryPlanet).occupier == "neutral") {
      map.get(playerThreeFactoryPlanet).occupier = "player3";
    }
    if (map.get(playerThreeCapitalPlanet).occupier == "neutral") {
      map.get(playerThreeCapitalPlanet).occupier = "player3";
    }
  }

      // checking for existing holocrons is done inside the function
      generateHolocronLocations(map, planets);

      // Give FO knowledge of H1
      if (playerOneFaction == "FO") {
        playerOneHasHolocron1 = true
      } else if (playerTwoFaction == "FO") {
        playerTwoHasHolocron1 = true
      } else if (playerCount === 3 && playerThreeFaction == "FO") {
        playerThreeHasHolocron1 = true
      }

      // update the HTML box with all of the holocron locations
      getHolocronLocations();
    
      // Done
      document.getElementById("enter-code-container").style.display = "none";
      document.getElementById("planet-details-view").style.display = "none";
      document.getElementById("fights-to-be-resolved").style.display = "none";

      updateButtonText();
    }

    let failedHolocronGenAttempts = 0;

    function generateHolocronLocations(map, planets) {
      // preserve holocron locations if already assigned
      let holocron1Assigned = false;
      let holocron2Assigned = false;
      let holocron3Assigned = false;

      planets.forEach((planet) => {
        if (planet.holocron1) {
          holocron1Assigned = true;
        }

        if (planet.holocron2) {
          holocron2Assigned = true;
        }

        if (planet.holocron3) {
          holocron3Assigned = true;
        }
      })

      console.log(`H1 assigned - ${holocron1Assigned}`)
      console.log(`H2 assigned - ${holocron2Assigned}`)
      console.log(`H3 assigned - ${holocron3Assigned}`)

      if (holocron1Assigned && holocron2Assigned && holocron3Assigned) {
        console.log("Holocrons detected")
        return;
      }

      const MAX_ATTEMPTS = 100;
      const MIN_DISTANCE = 6;
    
      let holocronPlanets = [];
    
      function isValidPlanet(name) {
        if (holocronPlanets.includes(name)) return false;
    
        const importantPlanets = [
          playerOneFactoryPlanet,
          playerOneCapitalPlanet,
          playerTwoFactoryPlanet,
          playerTwoCapitalPlanet
        ];
    
        if (playerCount === 3) {
          importantPlanets.push(playerThreeFactoryPlanet, playerThreeCapitalPlanet);
        }
    
        return importantPlanets.every(p =>
          checkHowManyPointsAway(name, p, planets) >= MIN_DISTANCE
        );
      }
    
      while (holocronPlanets.length < 3 && failedHolocronGenAttempts < MAX_ATTEMPTS) {
        const randPlanet = planets[Math.floor(Math.random() * planets.length)];
    
        if (isValidPlanet(randPlanet.name)) {
          holocronPlanets.push(randPlanet.name);
          console.log(`Holocron ${holocronPlanets.length} set at ${randPlanet.name}`);
        } else {
          failedHolocronGenAttempts++;
        }
      }
    
      if (holocronPlanets.length < 3) {
        alert(`ERROR: Only generated ${holocronPlanets.length} holocrons after ${failedHolocronGenAttempts} attempts.`);
        return;
      }
    
      planets.forEach(planet => {
        if (planet.name === holocronPlanets[0]) {
          // holocron1Location = planet.name;
          planet.holocron1 = true;
        }
        if (planet.name === holocronPlanets[1]) {
          // holocron2Location = planet.name;
          planet.holocron2 = true;
        }
        if (planet.name === holocronPlanets[2]) {
          // holocron3Location = planet.name;
          planet.holocron3 = true;
        }
      });
    }