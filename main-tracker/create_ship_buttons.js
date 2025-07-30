function updateButtonText() {
  let generic1 = document.getElementById("generic1");
  let generic2 = document.getElementById("generic2");
  let generic3 = document.getElementById("generic3");
  let generic4 = document.getElementById("generic4");
  let generic5 = document.getElementById("generic5");
  let generic6 = document.getElementById("generic6");
  let generic7 = document.getElementById("generic7");

  let ace1 = document.getElementById("ace1");
  let ace2 = document.getElementById("ace2");
  let ace3 = document.getElementById("ace3");
  let ace4 = document.getElementById("ace4");
  let ace5 = document.getElementById("ace5");

  let huge1 = document.getElementById("huge1");

  let currentPlayerFaction;
  if (determineCurrentPlayer() == "player1") {
    currentPlayerFaction = playerOneFaction;
  } else if (determineCurrentPlayer() == "player2") {
    currentPlayerFaction = playerTwoFaction;
  } else if (determineCurrentPlayer() == "player3") {
    currentPlayerFaction = playerThreeFaction;
  }

  if (currentPlayerFaction == "rebel") {
    generic1.innerText = `${rebelGeneric1PilotName} (${Math.ceil(rebelGeneric1Threat / 2)} action${Math.ceil(rebelGeneric1Threat / 2) == 1 ? '' : 's'})`;
    generic2.innerText = `${rebelGeneric2PilotName} (${Math.ceil(rebelGeneric2Threat / 2)} action${Math.ceil(rebelGeneric2Threat / 2) == 1 ? '' : 's'})`;
    generic3.innerText = `${rebelGeneric3PilotName} (${Math.ceil(rebelGeneric3Threat / 2)} action${Math.ceil(rebelGeneric3Threat / 2) == 1 ? '' : 's'})`;
    generic4.innerText = `${rebelGeneric4PilotName} (${Math.ceil(rebelGeneric4Threat / 2)} action${Math.ceil(rebelGeneric4Threat / 2) == 1 ? '' : 's'})`;
    generic5.innerText = `${rebelGeneric5PilotName} (${Math.ceil(rebelGeneric5Threat / 2)} action${Math.ceil(rebelGeneric5Threat / 2) == 1 ? '' : 's'})`;
    generic6.innerText = `${rebelGeneric6PilotName} (${Math.ceil(rebelGeneric6Threat / 2)} action${Math.ceil(rebelGeneric6Threat / 2) == 1 ? '' : 's'})`;
    generic7.innerText = `${rebelGeneric7PilotName} (${Math.ceil(rebelGeneric7Threat / 2)} action${Math.ceil(rebelGeneric7Threat / 2) == 1 ? '' : 's'})`;
    ace1.innerText = `${rebelAce1PilotName} (${Math.ceil(rebelAce1Threat / 2)} action${Math.ceil(rebelAce1Threat / 2) == 1 ? '' : 's'})`;
    ace2.innerText = `${rebelAce2PilotName} (${Math.ceil(rebelAce2Threat / 2)} action${Math.ceil(rebelAce2Threat / 2) == 1 ? '' : 's'})`;
    ace3.innerText = `${rebelAce3PilotName} (${Math.ceil(rebelAce3Threat / 2)} action${Math.ceil(rebelAce3Threat / 2) == 1 ? '' : 's'})`;
    ace4.innerText = `${rebelAce4PilotName} (${Math.ceil(rebelAce4Threat / 2)} action${Math.ceil(rebelAce4Threat / 2) == 1 ? '' : 's'})`;
    ace5.innerText = `${rebelAce5PilotName} (${Math.ceil(rebelAce5Threat / 2)} action${Math.ceil(rebelAce5Threat / 2) == 1 ? '' : 's'})`;
    huge1.innerText = `${rebelHugePilotName} (${Math.ceil(rebelHugeThreat / 2)} action${Math.ceil(rebelHugeThreat / 2) == 1 ? '' : 's'})`;
  } else if (currentPlayerFaction == "empire") {
    generic1.innerText = `${empireGeneric1PilotName} (${Math.ceil(empireGeneric1Threat / 2)} action${Math.ceil(empireGeneric1Threat / 2) == 1 ? '' : 's'})`;
    generic2.innerText = `${empireGeneric2PilotName} (${Math.ceil(empireGeneric2Threat / 2)} action${Math.ceil(empireGeneric2Threat / 2) == 1 ? '' : 's'})`;
    generic3.innerText = `${empireGeneric3PilotName} (${Math.ceil(empireGeneric3Threat / 2)} action${Math.ceil(empireGeneric3Threat / 2) == 1 ? '' : 's'})`;
    generic4.innerText = `${empireGeneric4PilotName} (${Math.ceil(empireGeneric4Threat / 2)} action${Math.ceil(empireGeneric4Threat / 2) == 1 ? '' : 's'})`;
    generic5.innerText = `${empireGeneric5PilotName} (${Math.ceil(empireGeneric5Threat / 2)} action${Math.ceil(empireGeneric5Threat / 2) == 1 ? '' : 's'})`;
    generic6.innerText = `${empireGeneric6PilotName} (${Math.ceil(empireGeneric6Threat / 2)} action${Math.ceil(empireGeneric6Threat / 2) == 1 ? '' : 's'})`;
    generic7.innerText = `${empireGeneric7PilotName} (${Math.ceil(empireGeneric7Threat / 2)} action${Math.ceil(empireGeneric7Threat / 2) == 1 ? '' : 's'})`;
    ace1.innerText = `${empireAce1PilotName} (${Math.ceil(empireAce1Threat / 2)} action${Math.ceil(empireAce1Threat / 2) == 1 ? '' : 's'})`;
    ace2.innerText = `${empireAce2PilotName} (${Math.ceil(empireAce2Threat / 2)} action${Math.ceil(empireAce2Threat / 2) == 1 ? '' : 's'})`;
    ace3.innerText = `${empireAce3PilotName} (${Math.ceil(empireAce3Threat / 2)} action${Math.ceil(empireAce3Threat / 2) == 1 ? '' : 's'})`;
    ace4.innerText = `${empireAce4PilotName} (${Math.ceil(empireAce4Threat / 2)} action${Math.ceil(empireAce4Threat / 2) == 1 ? '' : 's'})`;
    ace5.innerText = `${empireAce5PilotName} (${Math.ceil(empireAce5Threat / 2)} action${Math.ceil(empireAce5Threat / 2) == 1 ? '' : 's'})`;
    huge1.innerText = `${empireHugePilotName} (${Math.ceil(empireHugeThreat / 2)} action${Math.ceil(empireHugeThreat / 2) == 1 ? '' : 's'})`;
  } else if (currentPlayerFaction == "republic") {
    generic1.innerText = `${republicGeneric1PilotName} (${Math.ceil(republicGeneric1Threat / 2)} action${Math.ceil(republicGeneric1Threat / 2) == 1 ? '' : 's'})`;
    generic2.innerText = `${republicGeneric2PilotName} (${Math.ceil(republicGeneric2Threat / 2)} action${Math.ceil(republicGeneric2Threat / 2) == 1 ? '' : 's'})`;
    generic3.innerText = `${republicGeneric3PilotName} (${Math.ceil(republicGeneric3Threat / 2)} action${Math.ceil(republicGeneric3Threat / 2) == 1 ? '' : 's'})`;
    generic4.innerText = `${republicGeneric4PilotName} (${Math.ceil(republicGeneric4Threat / 2)} action${Math.ceil(republicGeneric4Threat / 2) == 1 ? '' : 's'})`;
    generic5.innerText = `${republicGeneric5PilotName} (${Math.ceil(republicGeneric5Threat / 2)} action${Math.ceil(republicGeneric5Threat / 2) == 1 ? '' : 's'})`;
    generic6.innerText = `${republicGeneric6PilotName} (${Math.ceil(republicGeneric6Threat / 2)} action${Math.ceil(republicGeneric6Threat / 2) == 1 ? '' : 's'})`;
    generic7.innerText = `${republicGeneric7PilotName} (${Math.ceil(republicGeneric7Threat / 2)} action${Math.ceil(republicGeneric7Threat / 2) == 1 ? '' : 's'})`;
    ace1.innerText = `${republicAce1PilotName} (${Math.ceil(republicAce1Threat / 2)} action${Math.ceil(republicAce1Threat / 2) == 1 ? '' : 's'})`;
    ace2.innerText = `${republicAce2PilotName} (${Math.ceil(republicAce2Threat / 2)} action${Math.ceil(republicAce2Threat / 2) == 1 ? '' : 's'})`;
    ace3.innerText = `${republicAce3PilotName} (${Math.ceil(republicAce3Threat / 2)} action${Math.ceil(republicAce3Threat / 2) == 1 ? '' : 's'})`;
    ace4.innerText = `${republicAce4PilotName} (${Math.ceil(republicAce4Threat / 2)} action${Math.ceil(republicAce4Threat / 2) == 1 ? '' : 's'})`;
    ace5.innerText = `${republicAce5PilotName} (${Math.ceil(republicAce5Threat / 2)} action${Math.ceil(republicAce5Threat / 2) == 1 ? '' : 's'})`;
    huge1.innerText = `${republicHugePilotName} (${Math.ceil(republicHugeThreat / 2)} action${Math.ceil(republicHugeThreat / 2) == 1 ? '' : 's'})`;
  } else if (currentPlayerFaction == "separatist") {
    generic1.innerText = `${separatistGeneric1PilotName} (${Math.ceil(separatistGeneric1Threat / 2)} action${Math.ceil(separatistGeneric1Threat / 2) == 1 ? '' : 's'})`;
    generic2.innerText = `${separatistGeneric2PilotName} (${Math.ceil(separatistGeneric2Threat / 2)} action${Math.ceil(separatistGeneric2Threat / 2) == 1 ? '' : 's'})`;
    generic3.innerText = `${separatistGeneric3PilotName} (${Math.ceil(separatistGeneric3Threat / 2)} action${Math.ceil(separatistGeneric3Threat / 2) == 1 ? '' : 's'})`;
    generic4.innerText = `${separatistGeneric4PilotName} (${Math.ceil(separatistGeneric4Threat / 2)} action${Math.ceil(separatistGeneric4Threat / 2) == 1 ? '' : 's'})`;
    generic5.innerText = `${separatistGeneric5PilotName} (${Math.ceil(separatistGeneric5Threat / 2)} action${Math.ceil(separatistGeneric5Threat / 2) == 1 ? '' : 's'})`;
    generic6.innerText = `${separatistGeneric6PilotName} (${Math.ceil(separatistGeneric6Threat / 2)} action${Math.ceil(separatistGeneric6Threat / 2) == 1 ? '' : 's'})`;
    generic7.innerText = `${separatistGeneric7PilotName} (${Math.ceil(separatistGeneric7Threat / 2)} action${Math.ceil(separatistGeneric7Threat / 2) == 1 ? '' : 's'})`;
    ace1.innerText = `${separatistAce1PilotName} (${Math.ceil(separatistAce1Threat / 2)} action${Math.ceil(separatistAce1Threat / 2) == 1 ? '' : 's'})`;
    ace2.innerText = `${separatistAce2PilotName} (${Math.ceil(separatistAce2Threat / 2)} action${Math.ceil(separatistAce2Threat / 2) == 1 ? '' : 's'})`;
    ace3.innerText = `${separatistAce3PilotName} (${Math.ceil(separatistAce3Threat / 2)} action${Math.ceil(separatistAce3Threat / 2) == 1 ? '' : 's'})`;
    ace4.innerText = `${separatistAce4PilotName} (${Math.ceil(separatistAce4Threat / 2)} action${Math.ceil(separatistAce4Threat / 2) == 1 ? '' : 's'})`;
    ace5.innerText = `${separatistAce5PilotName} (${Math.ceil(separatistAce5Threat / 2)} action${Math.ceil(separatistAce5Threat / 2) == 1 ? '' : 's'})`;
    huge1.innerText = `${separatistHugePilotName} (${Math.ceil(separatistHugeThreat / 2)} action${Math.ceil(separatistHugeThreat / 2) == 1 ? '' : 's'})`;
  } else if (currentPlayerFaction == "fo") {
    generic1.innerText = `${foGeneric1PilotName} (${Math.ceil(foGeneric1Threat / 2)} action${Math.ceil(foGeneric1Threat / 2) == 1 ? '' : 's'})`;
    generic2.innerText = `${foGeneric2PilotName} (${Math.ceil(foGeneric2Threat / 2)} action${Math.ceil(foGeneric2Threat / 2) == 1 ? '' : 's'})`;
    generic3.innerText = `${foGeneric3PilotName} (${Math.ceil(foGeneric3Threat / 2)} action${Math.ceil(foGeneric3Threat / 2) == 1 ? '' : 's'})`;
    generic4.innerText = `${foGeneric4PilotName} (${Math.ceil(foGeneric4Threat / 2)} action${Math.ceil(foGeneric4Threat / 2) == 1 ? '' : 's'})`;
    generic5.innerText = `${foGeneric5PilotName} (${Math.ceil(foGeneric5Threat / 2)} action${Math.ceil(foGeneric5Threat / 2) == 1 ? '' : 's'})`;
    generic6.innerText = `${foGeneric6PilotName} (${Math.ceil(foGeneric6Threat / 2)} action${Math.ceil(foGeneric6Threat / 2) == 1 ? '' : 's'})`;
    generic7.innerText = `${foGeneric7PilotName} (${Math.ceil(foGeneric7Threat / 2)} action${Math.ceil(foGeneric7Threat / 2) == 1 ? '' : 's'})`;
    ace1.innerText = `${foAce1PilotName} (${Math.ceil(foAce1Threat / 2)} action${Math.ceil(foAce1Threat / 2) == 1 ? '' : 's'})`;
    ace2.innerText = `${foAce2PilotName} (${Math.ceil(foAce2Threat / 2)} action${Math.ceil(foAce2Threat / 2) == 1 ? '' : 's'})`;
    ace3.innerText = `${foAce3PilotName} (${Math.ceil(foAce3Threat / 2)} action${Math.ceil(foAce3Threat / 2) == 1 ? '' : 's'})`;
    ace4.innerText = `${foAce4PilotName} (${Math.ceil(foAce4Threat / 2)} action${Math.ceil(foAce4Threat / 2) == 1 ? '' : 's'})`;
    ace5.innerText = `${foAce5PilotName} (${Math.ceil(foAce5Threat / 2)} action${Math.ceil(foAce5Threat / 2) == 1 ? '' : 's'})`;
    huge1.innerText = `${foGeneric1PilotName} (${Math.ceil(foGeneric1Threat / 2)} action${Math.ceil(foGeneric1Threat / 2) == 1 ? '' : 's'})`;
  }
}

document.getElementById("generic1").addEventListener("click", () => {
  let currentPlayerFaction;
  let currentPlayerFactory;
  if (determineCurrentPlayer() == "player1") {
    currentPlayerFaction = playerOneFaction;
    currentPlayerFactory = playerOneFactoryPlanet;
  } else if (determineCurrentPlayer() == "player2") {
    currentPlayerFaction = playerTwoFaction;
    currentPlayerFactory = playerTwoFactoryPlanet;
  } else if (determineCurrentPlayer() == "player3") {
    currentPlayerFaction = playerThreeFaction;
    currentPlayerFactory = playerThreeFactoryPlanet;
  }
  produceGeneric(currentPlayerFaction, 1, currentPlayerFactory);
});

document.getElementById("generic2").addEventListener("click", () => {
  let currentPlayerFaction;
  let currentPlayerFactory;
  if (determineCurrentPlayer() == "player1") {
    currentPlayerFaction = playerOneFaction;
    currentPlayerFactory = playerOneFactoryPlanet;
  } else if (determineCurrentPlayer() == "player2") {
    currentPlayerFaction = playerTwoFaction;
    currentPlayerFactory = playerTwoFactoryPlanet;
  } else if (determineCurrentPlayer() == "player3") {
    currentPlayerFaction = playerThreeFaction;
    currentPlayerFactory = playerThreeFactoryPlanet;
  }
  produceGeneric(currentPlayerFaction, 2, currentPlayerFactory);
});

document.getElementById("generic3").addEventListener("click", () => {
  let currentPlayerFaction;
  let currentPlayerFactory;
  if (determineCurrentPlayer() == "player1") {
    currentPlayerFaction = playerOneFaction;
    currentPlayerFactory = playerOneFactoryPlanet;
  } else if (determineCurrentPlayer() == "player2") {
    currentPlayerFaction = playerTwoFaction;
    currentPlayerFactory = playerTwoFactoryPlanet;
  } else if (determineCurrentPlayer() == "player3") {
    currentPlayerFaction = playerThreeFaction;
    currentPlayerFactory = playerThreeFactoryPlanet;
  }
  produceGeneric(currentPlayerFaction, 3, currentPlayerFactory);
});

document.getElementById("generic4").addEventListener("click", () => {
  let currentPlayerFaction;
  let currentPlayerFactory;
  if (determineCurrentPlayer() == "player1") {
    currentPlayerFaction = playerOneFaction;
    currentPlayerFactory = playerOneFactoryPlanet;
  } else if (determineCurrentPlayer() == "player2") {
    currentPlayerFaction = playerTwoFaction;
    currentPlayerFactory = playerTwoFactoryPlanet;
  } else if (determineCurrentPlayer() == "player3") {
    currentPlayerFaction = playerThreeFaction;
    currentPlayerFactory = playerThreeFactoryPlanet;
  }
  produceGeneric(currentPlayerFaction, 4, currentPlayerFactory);
});

document.getElementById("generic5").addEventListener("click", () => {
  let currentPlayerFaction;
  let currentPlayerFactory;
  if (determineCurrentPlayer() == "player1") {
    currentPlayerFaction = playerOneFaction;
    currentPlayerFactory = playerOneFactoryPlanet;
  } else if (determineCurrentPlayer() == "player2") {
    currentPlayerFaction = playerTwoFaction;
    currentPlayerFactory = playerTwoFactoryPlanet;
  } else if (determineCurrentPlayer() == "player3") {
    currentPlayerFaction = playerThreeFaction;
    currentPlayerFactory = playerThreeFactoryPlanet;
  }
  produceGeneric(currentPlayerFaction, 5, currentPlayerFactory);
});

document.getElementById("generic6").addEventListener("click", () => {
  let currentPlayerFaction;
  let currentPlayerFactory;
  if (determineCurrentPlayer() == "player1") {
    currentPlayerFaction = playerOneFaction;
    currentPlayerFactory = playerOneFactoryPlanet;
  } else if (determineCurrentPlayer() == "player2") {
    currentPlayerFaction = playerTwoFaction;
    currentPlayerFactory = playerTwoFactoryPlanet;
  } else if (determineCurrentPlayer() == "player3") {
    currentPlayerFaction = playerThreeFaction;
    currentPlayerFactory = playerThreeFactoryPlanet;
  }
  produceGeneric(currentPlayerFaction, 6, currentPlayerFactory);
});

document.getElementById("generic7").addEventListener("click", () => {
  let currentPlayerFaction;
  let currentPlayerFactory;
  if (determineCurrentPlayer() == "player1") {
    currentPlayerFaction = playerOneFaction;
    currentPlayerFactory = playerOneFactoryPlanet;
  } else if (determineCurrentPlayer() == "player2") {
    currentPlayerFaction = playerTwoFaction;
    currentPlayerFactory = playerTwoFactoryPlanet;
  } else if (determineCurrentPlayer() == "player3") {
    currentPlayerFaction = playerThreeFaction;
    currentPlayerFactory = playerThreeFactoryPlanet;
  }
  produceGeneric(currentPlayerFaction, 7, currentPlayerFactory);
});


    document.getElementById("ace1").addEventListener("click", () => {
      let currentPlayerFaction;
      let currentPlayerCapital;
      if (determineCurrentPlayer() == "player1") {
        currentPlayerFaction = playerOneFaction;
        currentPlayerCapital = playerOneCapitalPlanet;
      } else if (determineCurrentPlayer() == "player2") {
        currentPlayerFaction = playerTwoFaction;
        currentPlayerCapital = playerTwoCapitalPlanet;
      } else if (determineCurrentPlayer() == "player3") {
        currentPlayerFaction = playerThreeFaction;
        currentPlayerCapital = playerThreeCapitalPlanet;
      }
      produceAce(currentPlayerFaction, 1, currentPlayerCapital);
    });
    
    document.getElementById("ace2").addEventListener("click", () => {
      let currentPlayerFaction;
      let currentPlayerCapital;
      if (determineCurrentPlayer() == "player1") {
        currentPlayerFaction = playerOneFaction;
        currentPlayerCapital = playerOneCapitalPlanet;
      } else if (determineCurrentPlayer() == "player2") {
        currentPlayerFaction = playerTwoFaction;
        currentPlayerCapital = playerTwoCapitalPlanet;
      } else if (determineCurrentPlayer() == "player3") {
        currentPlayerFaction = playerThreeFaction;
        currentPlayerCapital = playerThreeCapitalPlanet;
      }
      produceAce(currentPlayerFaction, 2, currentPlayerCapital);
    });
    
    document.getElementById("ace3").addEventListener("click", () => {
      let currentPlayerFaction;
      let currentPlayerCapital;
      if (determineCurrentPlayer() == "player1") {
        currentPlayerFaction = playerOneFaction;
        currentPlayerCapital = playerOneCapitalPlanet;
      } else if (determineCurrentPlayer() == "player2") {
        currentPlayerFaction = playerTwoFaction;
        currentPlayerCapital = playerTwoCapitalPlanet;
      } else if (determineCurrentPlayer() == "player3") {
        currentPlayerFaction = playerThreeFaction;
        currentPlayerCapital = playerThreeCapitalPlanet;
      }
      produceAce(currentPlayerFaction, 3, currentPlayerCapital);
    });
    
    document.getElementById("ace4").addEventListener("click", () => {
      let currentPlayerFaction;
      let currentPlayerCapital;
      if (determineCurrentPlayer() == "player1") {
        currentPlayerFaction = playerOneFaction;
        currentPlayerCapital = playerOneCapitalPlanet;
      } else if (determineCurrentPlayer() == "player2") {
        currentPlayerFaction = playerTwoFaction;
        currentPlayerCapital = playerTwoCapitalPlanet;
      } else if (determineCurrentPlayer() == "player3") {
        currentPlayerFaction = playerThreeFaction;
        currentPlayerCapital = playerThreeCapitalPlanet;
      }
      produceAce(currentPlayerFaction, 4, currentPlayerCapital);
    });
    
    document.getElementById("ace5").addEventListener("click", () => {
      let currentPlayerFaction;
      let currentPlayerCapital;
      if (determineCurrentPlayer() == "player1") {
        currentPlayerFaction = playerOneFaction;
        currentPlayerCapital = playerOneCapitalPlanet;
      } else if (determineCurrentPlayer() == "player2") {
        currentPlayerFaction = playerTwoFaction;
        currentPlayerCapital = playerTwoCapitalPlanet;
      } else if (determineCurrentPlayer() == "player3") {
        currentPlayerFaction = playerThreeFaction;
        currentPlayerCapital = playerThreeCapitalPlanet;
      }
      produceAce(currentPlayerFaction, 5, currentPlayerCapital);
    });
    
    document.getElementById("huge1").addEventListener("click", () => {
      let currentPlayerFaction;
      let currentPlayerFactory;
      if (determineCurrentPlayer() == "player1") {
        currentPlayerFaction = playerOneFaction;
        currentPlayerFactory = playerOneFactoryPlanet;
      } else if (determineCurrentPlayer() == "player2") {
        currentPlayerFaction = playerTwoFaction;
        currentPlayerFactory = playerTwoFactoryPlanet;
      } else if (determineCurrentPlayer() == "player3") {
        currentPlayerFaction = playerThreeFaction;
        currentPlayerFactory = playerThreeFactoryPlanet;
      }
      produceHuge(currentPlayerFaction, currentPlayerFactory);
    });