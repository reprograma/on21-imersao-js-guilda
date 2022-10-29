function Type(name, damage_dealt, damage_taken) {
  this.name = name;
  this.damage_dealt = damage_dealt;
  this.damage_taken = damage_taken;
}

const TypeGrass = new Type(
  "Grass",
  [
    { name: "bug", value: 0.5 },
    { name: "dark", value: 1 },
  ],
  [
    { name: "bug", value: 2 },
    { name: "dark", value: 1 },
  ]
);

const TypePoison = new Type(
  "Poison",
  [
    { name: "bug", value: 1 },
    { name: "dark", value: 1 },
  ],
  [
    { name: "bug", value: 0.5 },
    { name: "dark", value: 1 },
  ]
);

// console.log(TypeGrass);

function Abilities(name, summary, effect) {
  this.name = name;
  this.summary = summary;
  this.effect = effect;
}

const AbilitiesOvergrow = new Abilities(
  "Overgrow",
  "Strengthens Grass moves to inflict 1.5× damage at 1/3 max HP or less.",
  "When this Pokémon has 1/3 or less of its HP remaining, its Grass-type moves inflict 1.5× as much regular damage."
);

// console.log(AbilitiesOvergrow);

function Move(name, type, summary, power, target, accuracy, priority) {
  this.name = name;
  this.type = type;
  this.summary = summary;
  this.power = power;
  this.target = target;
  this.accuracy = accuracy;
  this.priority = priority;
}

const MoveAromatherapy = new Move(
  "Aromatherapy",
  TypeGrass,
  "Cures the entire party of major status effects.",
  null,
  ["self", "allies"],
  null,
  0
);

// console.log(MoveAromatherapy);

const MoveVineWhip = new Move(
  "Vine Whip",
  TypeGrass,
  "Inflicts regular damage with no additional effect.",
  45,
  100,
  ["selected"],
  0
);

const MoveSynthesis = new Move(
  "Synthesis",
  TypeGrass,
  "Heals the user by half its max HP. Affected by weather.",
  null,
  null,
  ["self"],
  0
);

// console.log(MoveVineWhip);
function Pokemon(
  name,
  number,
  types,
  abilities,
  hidden_ability,
  stats,
  moves,
  evolution_stage,
  level,
  evolution_level,
  exp,
  nickname
) {
  this.name = name;
  this.number = number;
  this.types = types;
  this.abilities = abilities;
  this.hidden_ability = hidden_ability;
  this.stats = stats;
  this.moves = moves;
  this.evolution_stage = evolution_stage;
  this.level = level;
  this.evolution_level = evolution_level;
  this.exp = exp;
  this.nickname = nickname;
}
console.log(Pokemon.prototype);
const PokemonBulbasaur = new Pokemon(
  "Bulbasaur",
  1,
  [TypeGrass, TypePoison],
  [AbilitiesOvergrow],
  {
    name: "Chlorophyll",
    summary: "Doubles Speed during strong sunlight.",
    effect: "This Pokémon's Speed is doubled during strong sunlight.",
  },
  {
    hp: 45,
    attack: 49,
    defense: 49,
    "s-attack": 65,
    "s-defense": 65,
    speed: 45,
  },
  [MoveSynthesis, MoveVineWhip],
  "basic",
  1,
  16,
  0,
  "Robertinho"
);

// console.log(PokemonBulbasaur);
Pokemon.prototype.attack = function attack(move) {
  if (this.moves.indexOf(move) === -1) {
    return `${this.name} não pode usar ${move.name}`;
  } else {
    return `${this.name} usou ${move.name}`;
  }
};

Pokemon.prototype.training = function training(exp) {
  const auxExp = this.exp + exp;

  if (auxExp < 100) {
    this.exp = auxExp;
    return `
    Experiência de ${this.name}: ${this.exp}
    Level: ${this.level}`;
  } else {
    this.level = this.level + Math.floor(auxExp / 100); //quociente
    this.exp = 0;
    return `
    Experiência de ${this.name}: ${this.exp}
    Level: ${this.level}`;
  }
};

Pokemon.prototype.evolute = function evolute(
  name,
  type,
  abilities,
  hidden_ability,
  stats,
  moves,
  evolution_level
) {
  this.name = name;
  this.number = this.number + 1;
  this.type = type;
  this.abilities = abilities;
  this.hidden_ability = hidden_ability;
  this.stats = stats;
  this.moves = moves;

  const stagesEvolution = ["baby", "basic", "stage-1", "stage-2"];
  const auxStagesEvolution = stagesEvolution.indexOf(this.evolution_stage) + 1;
  this.evolution_stage = stagesEvolution[auxStagesEvolution];

  this.evolution_level = evolution_level;
  this.exp = this.exp;
  this.nickname = this.nickname;
};

console.log(PokemonBulbasaur.attack(MoveAromatherapy));
console.log(PokemonBulbasaur.attack(MoveSynthesis));

console.log(PokemonBulbasaur.training(70));
console.log(PokemonBulbasaur.training(600));

PokemonBulbasaur.evolute(
  "Ivysaur",
  [TypeGrass, TypePoison],
  [AbilitiesOvergrow],
  {
    name: "Chlorophyll",
    summary: "Doubles Speed during strong sunlight.",
    effect: "This Pokémon's Speed is doubled during strong sunlight.",
  },
  {
    hp: 45,
    attack: 49,
    defense: 49,
    "s-attack": 65,
    "s-defense": 65,
    speed: 45,
  },
  [MoveAromatherapy, MoveSynthesis, MoveVineWhip],
  45
);

console.log(PokemonBulbasaur);
console.log(PokemonBulbasaur.attack(MoveSynthesis));
