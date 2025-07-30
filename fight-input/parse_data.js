let input = document.getElementById("code-input");
let nameInput = document.getElementById("name-input");
let submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", parseData);

let planetNamesWithFights = []

function checkForFights() {
  let map = new Map(planets.map(obj => [obj.name, obj]));

  map.forEach((planet) => {
    if (!planet.shipsAtLocation || planet.shipsAtLocation.length === 0) {
      // console.log(`No ships at ${planet.name}.`);
      return;
    }

    let faction = planet.shipsAtLocation[0][1];
    let fight = false;

    for (let ship of planet.shipsAtLocation) {
      if (ship[1] !== faction) {
        fight = true;
        planetNamesWithFights.unshift(planet.name);
        console.log(`Fight at ${planet.name}!`);
        break;
      }
    }
  });
}

function parseData() {
  document.getElementById("ships-container").innerHTML = "";

  let name = nameInput.value;
  let code = input.value;

  code = JSON.parse(atob(code));

  for (let i = 20; i < 326; i++) {
    checkForFights(code[i][0]);
  }

  planetNamesWithFights.forEach((planet) => {
    planet.shipsAtLocation.forEach((ship) => {
      const [type, faction, name, shipSize, isAce, pilotName, threatValue, hull, shield, upgradesArray, id, fullHull, fullShield] = ship;

      document.getElementById("ships-container").innerHTML += `
        <div class="ship">
          <p class="faction">${faction}</p>
          <p class="pilot-name">${pilotName}</p>
          <p class="hull-count">${hull} <span>v</span></p>
          <p class="shield-count">${shield} <span>v</span></p>
        </div>`;
    });
  });
}