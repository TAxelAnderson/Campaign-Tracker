function getHolocronLocations() {
  let holocron1Text = document.getElementById("holocron1");
  let holocron2Text = document.getElementById("holocron2");
  let holocron3Text = document.getElementById("holocron3");

  planets.forEach((point) => {
    if (point.holocron1) {
      holocron1Text.innerText = `H1 (Mygeeto) - ${point.name}`;
    }

    if (point.holocron2) {
      holocron2Text.innerText = `H2 (Endor) - ${point.name}`;
    }

    if (point.holocron3) {
      holocron3Text.innerText = `H3 (Jakku) - ${point.name}`;
    }
  })
}

function checkIfLocationHasHolocron(name) {
  let nameStr = String(name);

  for (let point of planets) {
    if (nameStr === point.name) {
      // console.log(`Checking: - ${nameStr}, ${point.name}`, point.holocron1, point.holocron2, point.holocron3, point.x);
      if (point.holocron1) return "holocron1";
      if (point.holocron2) return "holocron2";
      if (point.holocron3) return "holocron3";
    }    
  }

  return "none";
}

