// vars to be filled in
let playerCount;
let playerOneFactoryPlanet;
let playerOneCapitalPlanet;
let playerOneFaction;
let playerTwoFactoryPlanet;
let playerTwoCapitalPlanet;
let playerTwoFaction;
let playerThreeFactoryPlanet;
let playerThreeCapitalPlanet;
let playerThreeFaction;
let history = [];
let actionsLeftThisTurn = 8;
let tempHistoryOfThisTurn = [];

let holocron1Location = ""
let holocron2Location = ""
let holocron3Location = ""

let playerOneHasHolocron1 = false;
let playerOneHasHolocron2 = false;
let playerOneHasHolocron3 = false;

let playerTwoHasHolocron1 = false;
let playerTwoHasHolocron2 = false;
let playerTwoHasHolocron3 = false;

let playerThreeHasHolocron1 = false;
let playerThreeHasHolocron2 = false;
let playerThreeHasHolocron3 = false;

// Setup
document.getElementById("planet-score-container").style.display = "none";
document.getElementById("planet-details-view").style.display = "none"
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

function getFactionColor(faction) {
  if (faction == "rebel") {
    return "red"
  } else if (faction == "empire") {
    return "blue"
  } else if (faction == "separatist") {
    return "darkblue"
  } else if (faction == "republic") {
    return "darkred"
  } else if (faction == "fo") {
    return "darkred"
  } else if (faction == "scum") {
    return "yellow"
  } else if (faction == "resistance") {
    return "orange"
  } else {
    return "pink"
  }
}

const rebelGeneric1PilotName = "Blue Squadron Escort";
const rebelGeneric1ShipSize = "small";
const rebelGeneric1Ship = "xwing";
const rebelGeneric1UpgradesArray = ["R5 Astromech", "Servomotor S-Foils", "Proton Torpedos"];
const rebelGeneric1Threat = 2;
const rebelGeneric1Hull = 4;
const rebelGeneric1Shields = 2;

const rebelGeneric2PilotName = "Warden Squadron Pilot";
const rebelGeneric2ShipSize = "medium";
const rebelGeneric2Ship = "kwing";
const rebelGeneric2UpgradesArray = ["Proton Rockets", "Concussion Missiles", "Proton Bombs", "Proximity Mines"];
const rebelGeneric2Threat = 2;
const rebelGeneric2Hull = 6;
const rebelGeneric2Shields = 3;

const rebelGeneric3PilotName = "Outer Rim Smuggler";
const rebelGeneric3ShipSize = "large";
const rebelGeneric3Ship = "yt1300";
const rebelGeneric3UpgradesArray = ["GNK Droid", "Perceptive Copilot", "Shield Upgrade", "Freelance Slicer"];
const rebelGeneric3Threat = 4;
const rebelGeneric3Hull = 8;
const rebelGeneric3Shields = 6;

const rebelGeneric4PilotName = "Knave Squadron Escort";
const rebelGeneric4ShipSize = "small";
const rebelGeneric4Ship = "ewing";
const rebelGeneric4UpgradesArray = [];
const rebelGeneric4Threat = 2;
const rebelGeneric4Hull = 3;
const rebelGeneric4Shields = 3;

const rebelGeneric5PilotName = "Blue Squadron Escort";
const rebelGeneric5ShipSize = "small";
const rebelGeneric5Ship = "bwing";
const rebelGeneric5UpgradesArray = ["Advanced Sensors", "Stabilized S-Foils", "Proton Torpedos"];
const rebelGeneric5Threat = 2;
const rebelGeneric5Hull = 4;
const rebelGeneric5Shields = 4;

const rebelGeneric6PilotName = "Mandalorian Resistance Pilot";
const rebelGeneric6ShipSize = "large";
const rebelGeneric6Ship = "gauntlet";
const rebelGeneric6UpgradesArray = ["Swivel Wing", "Perceptive Copilot", "GNK Droid", "Snap Shot"];
const rebelGeneric6Threat = 3;
const rebelGeneric6Hull = 9;
const rebelGeneric6Shields = 3;

const rebelGeneric7PilotName = "Lothal Rebel";
const rebelGeneric7ShipSize = "large";
const rebelGeneric7Ship = "vcx100";
const rebelGeneric7UpgradesArray = ["Fire-Control Systems", "Proton Torpedos"];
const rebelGeneric7Threat = 3;
const rebelGeneric7Hull = 10;
const rebelGeneric7Shields = 4;

const rebelAce1PilotName = "Dash Rendar";
const rebelAce1ShipSize = "large";
const rebelAce1Ship = "yt2400";
const rebelAce1UpgradesArray = ["GNK Droid", "Contraband Cybernetics", "Trick Shot", "Snap Shot", "Outrider"];
const rebelAce1Threat = 5;
const rebelAce1Hull = 6;
const rebelAce1Shields = 4;

const rebelAce2PilotName = "Chewbacca";
const rebelAce2ShipSize = "large";
const rebelAce2Ship = "yt1300";
const rebelAce2UpgradesArray = ["GNK Droid", "Perceptive Copilot", "Leia Organa", "Supressive Gunner", "Luke Skywalker (gunner)", "Shield Upgrade", "Lone Wolf", "Millenium Falcon"];
const rebelAce2Threat = 6;
const rebelAce2Hull = 8;
const rebelAce2Shields = 6;

const rebelAce3PilotName = "Ezra Bridger";
const rebelAce3ShipSize = "large";
const rebelAce3Ship = "gauntlet";
const rebelAce3UpgradesArray = ["Swivel Wing", "GNK Droid", "Nien Numb", "Perceptive Copilot", "Predictive Shot", "Drop Seat Bay", "Magva Yarro", "Kanan Jarrus", "Nightbrother"];
const rebelAce3Threat = 4;
const rebelAce3Hull = 9;
const rebelAce3Shields = 2;

const rebelAce4PilotName = "Norra Wexley";
const rebelAce4ShipSize = "medium";
const rebelAce4Ship = "arc";
const rebelAce4UpgradesArray = ["R5-D8", "Saw Gerrera", "Supressive Gunner", "Shield Upgrade", "Hull Upgrade", "Snap Shot"];
const rebelAce4Threat = 3;
const rebelAce4Hull = 7;
const rebelAce4Shields = 4;

const rebelAce5PilotName = "Corran Horn";
const rebelAce5ShipSize = "small";
const rebelAce5Ship = "ewing";
const rebelAce5UpgradesArray = ["R2-D2", "Shield Upgrade", "Outmaneuver", "Advanced Sensors", "Outmaneuver"];
const rebelAce5Threat = 4;
const rebelAce5Hull = 3;
const rebelAce5Shields = 4;

const rebelHugePilotName = "Alderaanian Guard";
const rebelHugeShipSize = "huge";
const rebelHugeShip = "tantive";
const rebelHugeUpgradesArray = ["Command", "Crew", "Crew", "Team", "Team", "Cargo", "Hard Point", "Hard Point", "Title"];
const rebelHugeThreat = 14;
const rebelHugeHull = 18;
const rebelHugeShields = 7;

const republicGeneric1PilotName = "Gold Squadron Trooper";
const republicGeneric1ShipSize = "small";
const republicGeneric1Ship = "torrent";
const republicGeneric1UpgradesArray = ["Cluster Missiles", "Shield Upgrade"];
const republicGeneric1Threat = 2;
const republicGeneric1Hull = 5;
const republicGeneric1Shields = 1;

const republicGeneric2PilotName = "Shadow Squadron Escort";
const republicGeneric2ShipSize = "small";
const republicGeneric2Ship = "vwing";
const republicGeneric2UpgradesArray = ["Born for This", "R2 Astromech", "Alpha-3B 'Besh'", "Thermal Detonators"];
const republicGeneric2Threat = 2;
const republicGeneric2Hull = 2;
const republicGeneric2Shields = 2;

const republicGeneric3PilotName = "Reaper Squadron Scout";
const republicGeneric3ShipSize = "small";
const republicGeneric3Ship = "headhunter";
const republicGeneric3UpgradesArray = ["Born for This", "Advanced Sensors", "Cluster Missiles", "Proton Torpedos", "Shield Upgrade"];
const republicGeneric3Threat = 2;
const republicGeneric3Hull = 2;
const republicGeneric3Shields = 3;

const republicGeneric4PilotName = "212th Batallion Pilot";
const republicGeneric4ShipSize = "medium";
const republicGeneric4Ship = "laati";
const republicGeneric4UpgradesArray = ["Proton Rockets", "GNK Droid", "Cluster Missiles", "Veteran Turret Gunner", "Agile Gunner", "Shield Upgrade"];
const republicGeneric4Threat = 3;
const republicGeneric4Hull = 8;
const republicGeneric4Shields = 3;

const republicGeneric5PilotName = "104th Batallion Pilot";
const republicGeneric5ShipSize = "medium";
const republicGeneric5Ship = "arc";
const republicGeneric5UpgradesArray = ["Born for This", "R5 Astromech"];
const republicGeneric5Threat = 2;
const republicGeneric5Hull = 6;
const republicGeneric5Shields = 3;

const republicGeneric6PilotName = "Blue Squadron Protector";
const republicGeneric6ShipSize = "small";
const republicGeneric6Ship = "torrent";
const republicGeneric6UpgradesArray = ["Born for This", "Shield Upgrade"];
const republicGeneric6Threat = 2;
const republicGeneric6Hull = 5;
const republicGeneric6Shields = 1;

const republicGeneric7PilotName = "Red Squadron Bomber";
const republicGeneric7ShipSize = "small";
const republicGeneric7Ship = "ywing";
const republicGeneric7UpgradesArray = ["Ion Cannon Turret", "R5 Astromech", "Thermal Detonators", "Shield Upgrade"];
const republicGeneric7Threat = 2;
const republicGeneric7Hull = 5;
const republicGeneric7Shields = 4;

const republicAce1PilotName = "Obi-Wan Kenobi";
const republicAce1ShipSize = "small";
const republicAce1Ship = "aethersprite";
const republicAce1UpgradesArray = ["Delta-7B", "Predictive Shot", "R2-D2", "Shield Upgrade", "Fuel Injection Override"];
const republicAce1Threat = 3;
const republicAce1Hull = 3;
const republicAce1Shields = 4;

const republicAce2PilotName = "Mace Windu";
const republicAce2ShipSize = "small";
const republicAce2Ship = "aethersprite";
const republicAce2UpgradesArray = ["Delta-7B", "Predictive Shot", "R2 Astromech", "Shield Upgrade", "Fuel Injection Override"];
const republicAce2Threat = 4;
const republicAce2Hull = 3;
const republicAce2Shields = 4;

const republicAce3PilotName = "Sicko";
const republicAce3ShipSize = "medium";
const republicAce3Ship = "laati";
const republicAce3UpgradesArray = ["Saturation Rockets", "Proton Rockets", "Veteran Turret Gunner", "Suppressive Gunner", "Yoda", "Aayla Secura"];
const republicAce3Threat = 4;
const republicAce3Hull = 8;
const republicAce3Shields = 2;

const republicAce4PilotName = "Bo-Katan Kryze";
const republicAce4ShipSize = "large";
const republicAce4Ship = "gauntlet";
const republicAce4UpgradesArray = ["Clan Training", "Veteran Tail Gunner", "Drop Seat Bay", "Shield Upgrade", "Gauntlet", "Swivel Wing", "Kit Fisto", "GNK Droid", "Nite Owl Commandos", "Plo Koon"];
const republicAce4Threat = 4;
const republicAce4Hull = 9;
const republicAce4Shields = 3;

const republicAce5PilotName = "Anakin Skywalker";
const republicAce5ShipSize = "small";
const republicAce5Ship = "ywing";
const republicAce5UpgradesArray = ["Sense", "Veteran Turret Gunner", "Ion Cannon Turret", "R4 Astromech", "R5 Astromech", "Proton Torpedos", "Proximity Mines"];
const republicAce5Threat = 4;
const republicAce5Hull = 5;
const republicAce5Shields = 3;

const republicHugePilotName = "Republic Judiciary";
const republicHugeShipSize = "huge";
const republicHugeShip = "tantive";
const republicHugeUpgradesArray = ["Command", "Crew", "Crew", "Team", "Team", "Cargo", "Gunner", "Hard Point", "Hard Point"];
const republicHugeThreat = 14;
const republicHugeHull = 18;
const republicHugeShields = 7;

const foGeneric1PilotName = "Zeta Squadron Survivor";
const foGeneric1ShipSize = "small";
const foGeneric1Ship = "tiesf";
const foGeneric1UpgradesArray = ["Special Forces Gunner", "Pattern Analyzer", "Proton Rockets"];
const foGeneric1Threat = 2;
const foGeneric1Hull = 3;
const foGeneric1Shields = 3;

const foGeneric2PilotName = "Omega Squadron Ace";
const foGeneric2ShipSize = "small";
const foGeneric2Ship = "tiefo";
const foGeneric2UpgradesArray = ["Elusive", "Shield Upgrade", "Fanatical"];
const foGeneric2Threat = 2;
const foGeneric2Hull = 3;
const foGeneric2Shields = 2;

const foGeneric3PilotName = "First Order Provacateur";
const foGeneric3ShipSize = "small";
const foGeneric3Ship = "tieba";
const foGeneric3UpgradesArray = ["Elusive"];
const foGeneric3Threat = 2;
const foGeneric3Hull = 2;
const foGeneric3Shields = 2;

const foGeneric4PilotName = "First Order Courier";
const foGeneric4ShipSize = "medium";
const foGeneric4Ship = "xi";
const foGeneric4UpgradesArray = ["Tactical Officer", "Shield Upgrade", "Pattern Analyzer"];
const foGeneric4Threat = 2;
const foGeneric4Hull = 5;
const foGeneric4Shields = 3;

const foGeneric5PilotName = "First Order Test Pilot";
const foGeneric5ShipSize = "small";
const foGeneric5Ship = "tievn";
const foGeneric5UpgradesArray = ["Fanatical", "Shield Upgrade"];
const foGeneric5Threat = 3;
const foGeneric5Hull = 4;
const foGeneric5Shields = 3;

const foGeneric6PilotName = "Epsilon Squadron Cadet";
const foGeneric6ShipSize = "small";
const foGeneric6Ship = "tiefo";
const foGeneric6UpgradesArray = ["Shield Upgrade", "Pattern Analyzer"];
const foGeneric6Threat = 2;
const foGeneric6Hull = 3;
const foGeneric6Shields = 2;

const foGeneric7PilotName = "Starkiller Base Pilot";
const foGeneric7ShipSize = "large";
const foGeneric7Ship = "upsilon";
const foGeneric7UpgradesArray = [];
const foGeneric7Threat = 2;
const foGeneric7Hull = 6;
const foGeneric7Shields = 6;

const foAce1PilotName = "Kylo Ren";
const foAce1ShipSize = "small";
const foAce1Ship = "silencer";
const foAce1UpgradesArray = ["Hate", "Malice", "Advanced Optics", "Proton Torpedos"];
const foAce1Threat = 4;
const foAce1Hull = 4;
const foAce1Shields = 2;

const foAce2PilotName = "Quickdraw";
const foAce2ShipSize = "small";
const foAce2Ship = "tiesf";
const foAce2UpgradesArray = ["Fanatical", "Advanced Sensors", "Special Forces Gunner", "Shield Upgrade", "Hull Upgrade"];
const foAce2Threat = 3;
const foAce2Hull = 3;
const foAce2Shields = 3;

const foAce3PilotName = "Lieutenant Tavson";
const foAce3ShipSize = "large";
const foAce3Ship = "upsilon";
const foAce3UpgradesArray = ["Heavy Laser Cannon", "Advanced Sensors", "GNK", "Captain Phasma", "Commander Pyre", "Shield Upgrade"];
const foAce3Threat = 4;
const foAce3Hull = 6;
const foAce3Shields = 6;

const foAce4PilotName = "Backdraft";
const foAce4ShipSize = "small";
const foAce4Ship = "tiesf";
const foAce4UpgradesArray = ["Pattern Analyzer", "Advanced Sensors", "Special Forces Gunner", "Shield Upgrade", "Proton Rockets"];
const foAce4Threat = 3;
const foAce4Hull = 3;
const foAce4Shields = 3;

const foAce5PilotName = "Holo";
const foAce5ShipSize = "small";
const foAce5Ship = "tieba";
const foAce5UpgradesArray = ["Fanatical", "Proton Rockets", "Shield Upgrade", "Hull Upgrade"];
const foAce5Threat = 3;
const foAce5Hull = 3;
const foAce5Shields = 3;

const foHugePilotName = "UNKNOWN";
const foHugeShipSize = "huge";
const foHugeShip = "raider";
const foHugeUpgradesArray = ["UNKNOWN"];
const foHugeThreat = 0;
const foHugeHull = 0;
const foHugeShields = 0;

const empireGeneric1PilotName = "UNKNOWN";
const empireGeneric1ShipSize = "small";
const empireGeneric1Ship = "UNKNOWN";
const empireGeneric1UpgradesArray = ["UNKNOWN"];
const empireGeneric1Threat = 0;
const empireGeneric1Hull = 0;
const empireGeneric1Shields = 0;

const empireGeneric2PilotName = "Warden Squadron Pilot";
const empireGeneric2ShipSize = "medium";
const empireGeneric2Ship = "kwing";
const empireGeneric2UpgradesArray = ["Proton Rockets", "Concussion Missiles", "Proton Bombs", "Proximity Mines"];
const empireGeneric2Threat = 2;
const empireGeneric2Hull = 6;
const empireGeneric2Shields = 3;

const empireGeneric3PilotName = "Outer Rim Smuggler";
const empireGeneric3ShipSize = "large";
const empireGeneric3Ship = "yt1300";
const empireGeneric3UpgradesArray = ["GNK Droid", "Perceptive Copilot", "Shield Upgrade", "Freelance Slicer"];
const empireGeneric3Threat = 4;
const empireGeneric3Hull = 8;
const empireGeneric3Shields = 6;

const empireGeneric4PilotName = "Knave Squadron Escort";
const empireGeneric4ShipSize = "small";
const empireGeneric4Ship = "ewing";
const empireGeneric4UpgradesArray = [];
const empireGeneric4Threat = 2;
const empireGeneric4Hull = 3;
const empireGeneric4Shields = 3;

const empireGeneric5PilotName = "UNKNOWN";
const empireGeneric5ShipSize = "small";
const empireGeneric5Ship = "UNKNOWN";
const empireGeneric5UpgradesArray = ["UNKNOWN"];
const empireGeneric5Threat = 0;
const empireGeneric5Hull = 0;
const empireGeneric5Shields = 0;

const empireGeneric6PilotName = "Mandalorian Resistance Pilot";
const empireGeneric6ShipSize = "large";
const empireGeneric6Ship = "gauntlet";
const empireGeneric6UpgradesArray = ["Swivel Wing", "Perceptive Copilot", "GNK Droid", "Snap Shot"];
const empireGeneric6Threat = 3;
const empireGeneric6Hull = 9;
const empireGeneric6Shields = 2;

const empireGeneric7PilotName = "Blue Squadron Escort";
const empireGeneric7ShipSize = "small";
const empireGeneric7Ship = "xwing";
const empireGeneric7UpgradesArray = ["R5 Astromech", "Servomotor S-Foils", "Proton Torpedos"];
const empireGeneric7Threat = 2;
const empireGeneric7Hull = 4;
const empireGeneric7Shields = 2;

const empireAce1PilotName = "UNKNOWN";
const empireAce1ShipSize = "small";
const empireAce1Ship = "xwing";
const empireAce1UpgradesArray = ["R5 Astromech", "Servomotor S-Foils", "Proton Torpedos"];
const empireAce1Threat = 2;
const empireAce1Hull = 4;
const empireAce1Shields = 2;

const empireAce2PilotName = "UNKNOWN";
const empireAce2ShipSize = "small";
const empireAce2Ship = "xwing";
const empireAce2UpgradesArray = ["R5 Astromech", "Servomotor S-Foils", "Proton Torpedos"];
const empireAce2Threat = 2;
const empireAce2Hull = 4;
const empireAce2Shields = 2;

const empireAce3PilotName = "UNKNOWN";
const empireAce3ShipSize = "small";
const empireAce3Ship = "xwing";
const empireAce3UpgradesArray = ["R5 Astromech", "Servomotor S-Foils", "Proton Torpedos"];
const empireAce3Threat = 2;
const empireAce3Hull = 4;
const empireAce3Shields = 2;

const empireAce4PilotName = "UNKNOWN";
const empireAce4ShipSize = "small";
const empireAce4Ship = "xwing";
const empireAce4UpgradesArray = ["R5 Astromech", "Servomotor S-Foils", "Proton Torpedos"];
const empireAce4Threat = 2;
const empireAce4Hull = 4;
const empireAce4Shields = 2;

const empireAce5PilotName = "UNKNOWN";
const empireAce5ShipSize = "small";
const empireAce5Ship = "xwing";
const empireAce5UpgradesArray = ["R5 Astromech", "Servomotor S-Foils", "Proton Torpedos"];
const empireAce5Threat = 2;
const empireAce5Hull = 4;
const empireAce5Shields = 2;

const empireHugePilotName = "Outer Rim Patrol";
const empireHugeShipSize = "huge";
const empireHugeShip = "raider";
const empireHugeUpgradesArray = ["Command", "Crew", "Torpedo", "Missile", "Team", "Team", "Cargo", "Hard Point", "Hard Point", "Title"];
const empireHugeThreat = 14;
const empireHugeHull = 20;
const empireHugeShields = 8;

const separatistGeneric1PilotName = "Trade Federation Drone";
const separatistGeneric1ShipSize = "small";
const separatistGeneric1Ship = "vulture";
const separatistGeneric1UpgradesArray = ["Energy Shell Charges", "Grappling Struts"];
const separatistGeneric1Threat = 1;
const separatistGeneric1Hull = 3;
const separatistGeneric1Shields = 0;

const separatistGeneric2PilotName = "Techno-Union Bomber";
const separatistGeneric2ShipSize = "small";
const separatistGeneric2Ship = "hyena";
const separatistGeneric2UpgradesArray = ["Proton Torpedos", "Proton Bombs", "Shield Upgrade", "Munitions Failsafe", "Landing Struts"];
const separatistGeneric2Threat = 2;
const separatistGeneric2Hull = 5;
const separatistGeneric2Shields = 1;

const separatistGeneric3PilotName = "Separatist Predator";
const separatistGeneric3ShipSize = "small";
const separatistGeneric3Ship = "hmp";
const separatistGeneric3UpgradesArray = ["Multi-Missile Pods", "Munitions Failsafe", "Proton Bombs", "Repulsorlift Stabilizers"];
const separatistGeneric3Threat = 2;
const separatistGeneric3Hull = 5;
const separatistGeneric3Shields = 3;

const separatistGeneric4PilotName = "Colicoid Interceptor";
const separatistGeneric4ShipSize = "small";
const separatistGeneric4Ship = "trifighter";
const separatistGeneric4UpgradesArray = ["Fire-Control System", "Shield Upgrade", "Hull Upgrade", "Intercept Booster"];
const separatistGeneric4Threat = 2;
const separatistGeneric4Hull = 4;
const separatistGeneric4Shields = 1;

const separatistGeneric5PilotName = "Petranaki Arena Ace";
const separatistGeneric5ShipSize = "small";
const separatistGeneric5Ship = "nantex";
const separatistGeneric5UpgradesArray = ["Ensnare", "Outmaneuver", "Shield Upgrade"];
const separatistGeneric5Threat = 2;
const separatistGeneric5Hull = 4;
const separatistGeneric5Shields = 1;

const separatistGeneric6PilotName = "Magna Guard Executioner";
const separatistGeneric6ShipSize = "small";
const separatistGeneric6Ship = "rogue";
const separatistGeneric6UpgradesArray = ["Synced Laser Cannons", "Predator"];
const separatistGeneric6Threat = 2;
const separatistGeneric6Hull = 5;
const separatistGeneric6Shields = 2;

const separatistGeneric7PilotName = "Separatist Rackateer";
const separatistGeneric7ShipSize = "medium";
const separatistGeneric7Ship = "firespray";
const separatistGeneric7UpgradesArray = ["Autoblasters", "Supressive Gunner", "Proximity Mines", "Shield Upgrade"];
const separatistGeneric7Threat = 3;
const separatistGeneric7Hull = 6;
const separatistGeneric7Shields = 5;

const separatistAce1PilotName = "Sun Fac";
const separatistAce1ShipSize = "small";
const separatistAce1Ship = "nantex";
const separatistAce1UpgradesArray = ["Ensnare", "Outmaneuver", "Hull Upgrade", "Shield Upgrade"];
const separatistAce1Threat = 3;
const separatistAce1Hull = 5;
const separatistAce1Shields = 2;

const separatistAce2PilotName = "General Grievous";
const separatistAce2ShipSize = "small";
const separatistAce2Ship = "belbullab";
const separatistAce2UpgradesArray = ["Impervium Plating", "Outmaneuver", "Soulless One", "Kraken"];
const separatistAce2Threat = 3;
const separatistAce2Hull = 5;
const separatistAce2Shields = 2;

const separatistAce3PilotName = "Jango Fett";
const separatistAce3ShipSize = "medium";
const separatistAce3Ship = "firespray";
const separatistAce3UpgradesArray = ["Zam Wessel", "Suppressive Gunner", "Boba Fett", "Slave One", "Tracking Fob"];
const separatistAce3Threat = 3;
const separatistAce3Hull = 5;
const separatistAce3Shields = 2;

const separatistAce4PilotName = "Pre Visla";
const separatistAce4ShipSize = "large";
const separatistAce4Ship = "gauntlet";
const separatistAce4UpgradesArray = ["Trick Shot", "Death Watch Commandos", "Chancellor Palpatine", "GNK Droid", "Proximity Mines", "Drop Seat Bay", "Swivel Wing"];
const separatistAce4Threat = 4;
const separatistAce4Hull = 9;
const separatistAce4Shields = 2;

const separatistAce5PilotName = "Cad Bane";
const separatistAce5ShipSize = "small";
const separatistAce5Ship = "rogue";
const separatistAce5UpgradesArray = ["Predator", "Synced Laser Cannons", "Perceptive Copilot", "GNK Droid", "Proximity Mines", "Shield Upgrade"];
const separatistAce5Threat = 3;
const separatistAce5Hull = 5;
const separatistAce5Shields = 3;

const separatistHugePilotName = "Blue Squadron Escort";
const separatistHugeShipSize = "huge";
const separatistHugeShip = "trident";
const separatistHugeUpgradesArray = ["Riff Tamson", "Perceptive Copilot", "Damage Control Team", "Tractor Technicians", "Tracking Torpedos", "Proton Cannon Batteries", "Tractor Tentacles", "Tibanna Reserves", "Suppressive Gunner", "Trident"];
const separatistHugeThreat = 12;
const separatistHugeHull = 4;
const separatistHugeShields = 2;
