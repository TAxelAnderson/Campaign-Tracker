document.getElementById("claim-planet").addEventListener("click", claimPlanet);

    function claimPlanet() {
      let currentPlayer = determineCurrentPlayer();
      let currentPlayerFaction;
      if (currentPlayer == "player1") {
        currentPlayerFaction = playerOneFaction;
      } else if (currentPlayer == "player2") {
        currentPlayerFaction = playerTwoFaction;
      } else if (currentPlayer == "player3") {
        currentPlayerFaction = playerThreeFaction;
      } else {
        alert("claimPlanet() error determining current player faction");
      }

      let currentPlanet = document.getElementById("english-text").innerText;
      let map = new Map(planets.map(obj => [obj.name, obj]));
      let planetData = map.get(`${currentPlanet}`);

      if (!planetData) {
        alert("Planet not found in map.");
        return;
      }

      let shipsAtPlanet = planetData.shipsAtLocation;

      if (map.get(`${currentPlanet}`).occupier == currentPlayer) {
        alert("Planet already claimed");
        return;
      }

      let flag1 = false;
      for (let i = 0; i < shipsAtPlanet.length; i++) {
        if (shipsAtPlanet[i][1] == currentPlayerFaction) {
          flag1 = true;
        }
      }

      let flag2 = false;
      for (let i = 0; i < shipsAtPlanet.length; i++) {
        if (shipsAtPlanet[i][1] !== currentPlayerFaction) {
          flag2 = true;
        }
      }

      // claim planet
      if (flag1 && flag2) {
        if (actionsLeftThisTurn >= 1) {
          actionsLeftThisTurn -= 1;
          map.get(`${currentPlanet}`).occupier = currentPlayer;
          alert(`${currentPlanet} claimed.`);
        } else {
          alert("Not enough actions");
        }
      } else if (flag1) {
        alert(`You need a ship at ${currentPlanet} to claim it.`);
        return;
      } else if (flag2) {
        alert(`You must be the only one with ships at ${planetName} to claim it`);
        return;
      }
      updateScore()
      console.log(planets)
    }

    function updateScore() {
      if (playerCount == 0) {
        document.getElementById("planet-score-container").style.display = "none";
      } else {
        document.getElementById("planet-score-container").style.display = "flex";
      }

      if (playerCount == 2) {
        document.getElementById("dot-two").style.display = "none";
        document.getElementById("player-three-score").style.display = "none";
      } else if (playerCount == 3) {
        document.getElementById("dot-two").style.display = "block";
        document.getElementById("player-three-score").style.display = "block";
      }

      let playerOnePlanets = 0;
      let playerTwoPlanets = 0;
      let playerThreePlanets = 0;
      let unclaimedPlanets = 0;

      planets.forEach(item => {
        if (item.occupier == "player1") {
          playerOnePlanets += 1;
        } else if (item.occupier == "player2") {
          playerTwoPlanets += 1;
        } else if (item.occupier == "player3") {
          playerThreePlanets += 1;
        } else {
          unclaimedPlanets += 1;
        }
      })

      document.getElementById("player-one-score").innerText = `${playerOnePlanets} planets`;
      document.getElementById("player-two-score").innerText = `${playerTwoPlanets} planets`;
      document.getElementById("player-three-score").innerText = playerThreePlanets;
      document.getElementById("player-one-score").style.color = getFactionColor(playerOneFaction);
      document.getElementById("player-two-score").style.color = getFactionColor(playerTwoFaction);
      document.getElementById("player-three-score").style.color = getFactionColor(playerThreeFaction);
    }