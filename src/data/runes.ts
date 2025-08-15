export const enum ERuneTier {
  COMMON = 1,
  SEMIRARE = 2,
  RARE = 3,
}

const runes: TRuneDef[] = [
  { name: "El", fname: "El (1)", tier: 1 },
  { name: "Eld", fname: "Eld (2)", tier: 1 },
  { name: "Tir", fname: "Tir (3)", tier: 1 },
  { name: "Nef", fname: "Nef (4)", tier: 1 },
  { name: "Eth", fname: "Eth (5)", tier: 1 },
  { name: "Ith", fname: "Ith (6)", tier: 1 },
  { name: "Tal", fname: "Tal (7)", tier: 1 },
  { name: "Ral", fname: "Ral (8)", tier: 1 },
  { name: "Ort", fname: "Ort (9)", tier: 1 },
  { name: "Thul", fname: "Thul (10)", tier: 1 },
  { name: "Amn", fname: "Amn (11)", tier: 1 },
  { name: "Sol", fname: "Sol (12)", tier: 2 },
  { name: "Shael", fname: "Shael (13)", tier: 2 },
  { name: "Dol", fname: "Dol (14)", tier: 2 },
  { name: "Hel", fname: "Hel (15)", tier: 2 },
  { name: "Io", fname: "Io (16)", tier: 2 },
  { name: "Lum", fname: "Lum (17)", tier: 2 },
  { name: "Ko", fname: "Ko (18)", tier: 2 },
  { name: "Fal", fname: "Fal (19)", tier: 2 },
  { name: "Lem", fname: "Lem (20)", tier: 2 },
  { name: "Pul", fname: "Pul (21)", tier: 2 },
  { name: "Um", fname: "Um (22)", tier: 2 },
  { name: "Mal", fname: "Mal (23)", tier: 3 },
  { name: "Ist", fname: "Ist (24)", tier: 3 },
  { name: "Gul", fname: "Gul (25)", tier: 3 },
  { name: "Vex", fname: "Vex (26)", tier: 3 },
  { name: "Ohm", fname: "Ohm (27)", tier: 3 },
  { name: "Lo", fname: "Lo (28)", tier: 3 },
  { name: "Sur", fname: "Sur (29)", tier: 3 },
  { name: "Ber", fname: "Ber (30)", tier: 3 },
  { name: "Jah", fname: "Jah (31)", tier: 3 },
  { name: "Cham", fname: "Cham (32)", tier: 3 },
  { name: "Zod", fname: "Zod (33)", tier: 3 },
];

export function runesIds() {
  return runes.map((rune) => rune.name);
}

export default runes;
