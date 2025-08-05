const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
const tooltip = document.getElementById("tooltip");
window.addEventListener('mousemove', (event) => {
  document.getElementById("actions-left").innerText = `${actionsLeftThisTurn} actions left`;
  updateScore();
  updateButtonText();
  actionsLeftThisTurn = parseFloat(actionsLeftThisTurn.toFixed(1));
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  raycaster.setFromCamera(mouse, camera);
  let intersects = raycaster.intersectObject(stars);
  if (intersects.length > 0 && getComputedStyle(document.getElementById("planet-details-view")).display === "none") {
    let intersect = intersects[0];
    let index = intersect.index;
    let starName = planets[index].name;
    let map = new Map(planets.map(obj => [obj.name, obj]));
    let ships = map.get(starName).shipsAtLocation.length;
    let occupier = map.get(starName).occupier;

    tooltip.style.display = 'block';
    tooltip.textContent = `${starName} • ${ships} ship(s) • occupied by ${occupier}`;
    tooltip.style.left = event.clientX + 10 + 'px';
    tooltip.style.top = event.clientY + 10 + 'px';
  } else {
    tooltip.style.display = 'none';
  }
});
