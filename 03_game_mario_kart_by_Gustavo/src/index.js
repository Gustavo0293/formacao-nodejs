const player1 = {
  name: "Mario",
  speed: 4,
  maneuverability: 3,
  power: 3,
  score: 0,
};

const player2 = {
  name: "Peach",
  speed: 3,
  maneuverability: 4,
  power: 2,
  score: 0,
};

const player3 = {
  name: "Yoshi",
  speed: 2,
  maneuverability: 4,
  power: 3,
  score: 0,
};

const player4 = {
  name: "Bowser",
  speed: 5,
  maneuverability: 2,
  power: 5,
  score: 0,
};

const player5 = {
  name: "Luigi",
  speed: 3,
  maneuverability: 4,
  power: 4,
  score: 0,
};

const player6 = {
  name: "Donkey Kong",
  speed: 2,
  maneuverability: 2,
  power: 5,
  score: 0,
};

const player7 = {
  name: "Toad",
  speed: 4,
  maneuverability: 4,
  power: 2,
  score: 0,
};

async function logRollResult(characterName, block, diceResult, atribute) {
    console.log(`${characterName} rolou um dado de valor de ${block} ${diceResult} + ${atribute} = ${diceResult + atribute}`);

}

//jogador aleratório
async function getRandomPlayer() {
  const players = [player1, player2, player3, player4, player5, player6, player7];
  const player8 = players[Math.floor(Math.random() * players.length)];
    return player8;
}

async function chooseCharacter(characterName) {
  switch (characterName.toLowerCase()) {
    case "mario":
      return player1;
    case "peach":
      return player2;
    case "yoshi":
      return player3;
    case "bowser":
      return player4;
    case "luigi":
      return player5;
    case "donkey kong":
      return player6;
    case "toad":
      return player7;
    case "aleatório":
      return await getRandomPlayer();
    default:
      console.log("Personagem inválido. Escolhendo Mario por padrão.");
      return player1;
  }
  
}
async function rollDice() { 
    return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
  const blocks = ["Reta", "Curva", "Combate"];
    return blocks[Math.floor(Math.random() * blocks.length)];
}

async function playRaceEngine(character1, character2) {
  for (let round = 1; round <= 6; round++) {
    console.log(`\nRodada ${round}`);

    let block = await getRandomBlock(); // <-- add await here
    console.log(`Bloco de corrida: ${block}`);
  
  // Rolando os dados para cada personagem
  let diceResult1 = await rollDice();
  let diceResult2 = await rollDice();

  let totalTestSkill1 = 0;
  let totalTestSkill2 = 0;

  if (block === "Reta") {
    totalTestSkill1 = diceResult1 + character1.speed;
    totalTestSkill2 = diceResult2 + character2.speed;
      await logRollResult(character1.name, "Reta", diceResult1, character1.speed);
      await logRollResult(character2.name, "Reta", diceResult2, character2.speed);

  } else if (block === "Curva") {
    totalTestSkill1 = diceResult1 + character1.maneuverability;
    totalTestSkill2 = diceResult2 + character2.maneuverability;
    await logRollResult(character1.name, "Curva", diceResult1, character1.maneuverability);
    await logRollResult(character2.name, "Curva", diceResult2, character2.maneuverability);

  } else if (block === "Combate") {
    let powerResult1 = diceResult1 + character1.power;
    let powerResult2 = diceResult2 + character2.power;
    await logRollResult(character1.name, "Combate", diceResult1, character1.power);
    await logRollResult(character2.name, "Combate", diceResult2, character2.power);
    
      //if ternário: se powerResult1 for menor que powerResult2, character1 perde 1 ponto
      console.log(powerResult1 < powerResult2 ? `${character1.name} perdeu 1 ponto. \n ${character2.name} venceu a rodada!` : "");
      character1.score -= powerResult1 < powerResult2 && character1.score > 0 ? 1 : 0;

      //if ternário: se powerResult2 for menor que powerResult1, character2 perde 1 ponto
      console.log(powerResult2 < powerResult1 ? `${character2.name} perdeu 1 ponto. \n ${character1.name} venceu a rodada!` : "");
      character2.score -= powerResult2 < powerResult1 && character2.score > 0 ? 1 : 0;

  }
  if (totalTestSkill1 > totalTestSkill2) {
      console.log(`${character1.name} venceu a rodada!`);
      character1.score++;
    } else if (totalTestSkill2 > totalTestSkill1) {
      console.log(`${character2.name} venceu a rodada!`);
      character2.score++;
    } else if (totalTestSkill1 === totalTestSkill2 && block != "Combate") {
      console.log("Empate na rodada!");
    }
    console.log('-----------------------------------');
  }
}

async function declareWinner(character1, character2) {
  console.log(`\nResultado Final:`);
  console.log(`${character1.name} - Pontos: ${character1.score}`);
  console.log(`${character2.name} - Pontos: ${character2.score}`);
  console.log('-----------------------------------');

  // Verifica quem é o vencedor
  if (character1.score > character2.score) {
    console.log(`${character1.name} é o grande vencedor com ${character1.score} pontos!`);
    console.log(`${character2.name} ficou com ${character2.score} pontos.`);
  } else if (character2.score > character1.score) {
    console.log(`${character2.name} é o grande vencedor com ${character2.score} pontos!`);
    console.log(`${character1.name} ficou com ${character1.score} pontos.`);
  } else {
    console.log("A corrida terminou em empate!");
  }

}

(async function main() {
  console.log("Bem-Vindo ao Mario Kart");
  console.log(`Corrida entre ${player1.name} e ${player2.name} irá começar!`);
  await playRaceEngine(player1, player2);
  await declareWinner(player1, player2);
})();