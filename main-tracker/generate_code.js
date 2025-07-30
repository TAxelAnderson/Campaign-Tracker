function generateNewCode() {
  let plaintextCode = [];
  plaintextCode[0] = playerCount;
  plaintextCode[1] = playerOneFaction;
  plaintextCode[2] = playerOneFactoryPlanet;
  plaintextCode[3] = playerOneCapitalPlanet;
  plaintextCode[4] = playerTwoFaction;
  plaintextCode[5] = playerTwoFactoryPlanet;
  plaintextCode[6] = playerTwoCapitalPlanet;

  if (playerCount == 3) {
    plaintextCode[7] = playerThreeFaction;
    plaintextCode[8] = playerThreeFactoryPlanet;
    plaintextCode[9] = playerThreeCapitalPlanet;
  }

  plaintextCode[10] = history;

  plaintextCode[11] = playerOneHasHolocron1;
  plaintextCode[12] = playerOneHasHolocron2;
  plaintextCode[13] = playerOneHasHolocron3;

  plaintextCode[14] = playerTwoHasHolocron1;
  plaintextCode[15] = playerTwoHasHolocron2;
  plaintextCode[16] = playerTwoHasHolocron3;

  plaintextCode[17] = playerThreeHasHolocron1;
  plaintextCode[18] = playerThreeHasHolocron2;
  plaintextCode[19] = playerThreeHasHolocron3;

  // Fill in planets + points ships
  let map = new Map(planets.map(obj => [obj.name, obj]));

  let shipDataStart = 20;
  let names = [...planets.map(p => p.name)];
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    let currentIndex = shipDataStart + i
    plaintextCode[currentIndex] = [[], 0];

    plaintextCode[currentIndex][0] = map.get(name).shipsAtLocation;
    plaintextCode[currentIndex][1] = map.get(name).occupier;

    if (name.slice(0, 5) !== "point") {
      plaintextCode[currentIndex][2] = map.get(name).holocron1;
      plaintextCode[currentIndex][3] = map.get(name).holocron2;
      plaintextCode[currentIndex][4] = map.get(name).holocron3;
    }
  }

  let encryptedCode = btoa(JSON.stringify(plaintextCode));

  return encryptedCode;
}