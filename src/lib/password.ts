export const CHARACTER_SETS = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  symbols: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
} as const;

export type CharacterSetId = keyof typeof CHARACTER_SETS;

const UINT32_RANGE = 2 ** 32;

function randomIndex(limit: number) {
  const ceiling = Math.floor(UINT32_RANGE / limit) * limit;
  const buffer = new Uint32Array(1);
  let value = ceiling;
  while (value >= ceiling) {
    crypto.getRandomValues(buffer);
    value = buffer[0];
  }
  return value % limit;
}

function pick(characters: string) {
  return characters[randomIndex(characters.length)];
}

function shuffle(characters: string[]) {
  for (let i = characters.length - 1; i > 0; i--) {
    const j = randomIndex(i + 1);
    [characters[i], characters[j]] = [characters[j], characters[i]];
  }
  return characters;
}

export function generatePassword(length: number, sets: CharacterSetId[]) {
  if (length === 0 || sets.length === 0) return "";

  const guaranteed = sets
    .slice(0, length)
    .map((set) => pick(CHARACTER_SETS[set]));
  const pool = sets.map((set) => CHARACTER_SETS[set]).join("");
  const remainder = Array.from({ length: length - guaranteed.length }, () =>
    pick(pool),
  );

  return shuffle([...guaranteed, ...remainder]).join("");
}
