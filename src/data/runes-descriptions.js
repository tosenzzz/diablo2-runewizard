/** @type {RuneMeta} */
const runesDesc = {
  El: `
  #### Bonus
  Weapon: +50 AR, +1 Light Radius
  Armor/Helm/Shield: +1 Light Radius, +15 Defense
  Clvl Required: 11
  `,

  Eld: `
  3 x El
  #### Bonus
  Weapon: +75% Damage vs. Undead, +50 AR vs. Undead
  Armor/Helm: -15% Stamina Drain
  Shield: +7% Blocking
  Clvl Required: 11
  `,

  Tir: `
  3 x Eld
  #### Bonus
  Weapon: +2 Mana Per Kill
  Armor/Helm/Shield: +2 Mana Per Kill
  Clvl Required: 13
  `,

  Nef: `
  3 x Tir
  #### Bonus
  Weapon: Knockback
  Armor/Helm/Shield: +30 Defense vs. Missile
  Clvl Required: 13
  `,

  Eth: `
  3 x Nef
  #### Bonus
  Weapon: -25% Target Defense
  Armor/Helm/Shield: Regenerate Mana 15%
  Clvl Required: 15
  `,

  Ith: `
  3 x Eth
  #### Bonus
  Weapon: +9 to Maximum Damage
  Armor/Helm/Shield: 15% Damage Taken Goes to Mana
  Clvl Required: 15
  `,

  Tal: `
  3 x Ith
  #### Bonus
  Weapon: 75 Poison Damage over 5 seconds
  Armor/Helm: +30% Poison Resist
  Shield: +35% Poison Resist
  Clvl Required: 17
  `,

  Ral: `
  3 x Tal
  #### Bonus
  Weapon: +5-30 Fire Damage
  Armor/Helm: +30% Fire Resist
  Shield: +35% Fire Resist
  Clvl Required: 19
  `,

  Ort: `
  3 x Ral
  #### Bonus
  Weapon: +1-50 Lightning Damage
  Armor/Helm: +30% Lightning Resist
  Shield: +35% Lightning Resist
  Clvl Required: 21
  `,

  Thul: `
  3 x Ort
  #### Bonus
  Weapon: +3-14 Cold Damage (3 sec)
  Armor/Helm: +30% Cold Resist
  Shield: +35% Cold Resist
  Clvl Required: 23
  `,

  Amn: `
  3 x Thul
  1 Chipped Topaz
  #### Bonus
  Weapon: 7% Life Stolen Per Hit
  Armor/Helm/Shield: Attacker Takes Damage of 14
  Clvl Required: 25
  `,

  Sol: `
  3 x Amn
  1 Chipped Amethyst
  #### Bonus
  Weapon: +9 to Minimum Damage
  Armor/Helm/Shield: -7 Damage Taken
  Clvl Required: 27
  `,

  Shael: `
  3 x Sol
  1 Chipped Sapphire
  #### Bonus
  Weapon: +20% Increased Attack Speed
  Armor/Helm: +20% Faster Hit Recovery
  Shield: +20% Faster Block Rate
  Clvl Required: 29
  `,

  Dol: `
  3 x Shael
  1 Chipped Ruby
  #### Bonus
  Weapon: 25% Chance Hit Causes Monster to Flee
  Armor/Helm/Shield: +7 Replenish Life
  Clvl Required: 31
  `,

  Hel: `
  3 x Dol
  1 Chipped Emerald
  #### Bonus
  Weapon: -20% Requirements
  Armor/Helm/Shield: -15% Requirements
  Clvl Required: None
  `,

  Io: `
  3 x Hel
  1 Chipped Diamond
  #### Bonus
  Weapon: +10 Vitality
  Armor/Helm/Shield: +10 Vitality
  Clvl Required: 35
  `,

  Lum: `
  3 x Io
  1 Flawed Topaz
  #### Bonus
  Weapon: +10 Energy
  Armor/Helm/Shield: +10 Energy
  Clvl Required: 37
  `,

  Ko: `
  3 x Lum
  1 Flawed Amethyst
  #### Bonus
  Weapon: +10 Dexterity
  Armor/Helm/Shield: +10 Dexterity
  Clvl Required: 39
  `,

  Fal: `
  3 x Ko
  1 Flawed Sapphire
  #### Bonus
  Weapon: +10 Strength
  Armor/Helm/Shield: +10 Strength
  Clvl Required: 41
  `,

  Lem: `
  3 x Fal
  1 Flawed Ruby
  #### Bonus
  Weapon: +75% Extra Gold from Monsters
  Armor/Helm/Shield: +50% Extra Gold from Monsters
  Clvl Required: 43
  `,

  Pul: `
  3 x Lem
  1 Flawed Emerald
  #### Bonus
  Weapon: +75% Damage to Demons, +100 AR vs. Demons
  Armor/Helm/Shield: +30% Defense
  Clvl Required: 45
  `,

  Um: `
  2 x Pul
  1 Flawed Diamond
  #### Bonus
  Weapon: 25% Chance of Open Wounds
  Armor/Helm: +15% Resist All
  Shield: +22% Resist All
  Clvl Required: 47
  `,

  Mal: `
  2 x Um
  1 Topaz
  #### Bonus
  Weapon: Prevent Monster Heal
  Armor/Helm/Shield: Magic Damage Reduced by 7
  Clvl Required: 49
  `,

  Ist: `
  2 x Mal
  1 Amethyst
  #### Bonus
  Weapon: +30% Better Chance of Finding Magic Items
  Armor/Helm/Shield: +25% Better Chance of Finding Magic Items
  Clvl Required: 51
  `,

  Gul: `
  2 x Ist
  1 Sapphire
  #### Bonus
  Weapon: +20% Attack Rating
  Armor/Helm/Shield: +5% Max Poison Resist
  Clvl Required: 53
  `,

  Vex: `
  2 x Gul
  1 Ruby
  #### Bonus
  Weapon: 7% Mana Leech
  Armor/Helm/Shield: +5% Max Fire Resist
  Clvl Required: 55
  `,

  Ohm: `
  2 x Vex
  1 Emerald
  #### Bonus
  Weapon: +50% Enhanced Damage
  Armor/Helm/Shield: +5% Max Cold Resist
  Clvl Required: 57
  `,

  Lo: `
  2 x Ohm
  1 Diamond
  #### Bonus
  Weapon: 20% Deadly Strike
  Armor/Helm/Shield: +5% Max Lightning Resist
  Clvl Required: 59
  `,

  Sur: `
  2 x Lo
  1 Flawless Topaz
  #### Bonus
  Weapon: 20% Chance to Blind Target
  Armor/Helm: +5% Max Mana
  Shield: +50 Mana
  Clvl Required: 61
  `,

  Ber: `
  2 x Sur
  1 Flawless Amethyst
  #### Bonus
  Weapon: 20% Chance of Crushing Blow
  Armor/Helm/Shield: Damage Reduced by 8%
  Clvl Required: 63
  `,

  Jah: `
  2 x Ber
  1 Flawless Sapphire
  #### Bonus
  Weapon: Ignores Target Defense
  Armor/Helm: +5% Max Life
  Shield: +50 Life
  Clvl Required: 65
  `,

  Cham: `
  2 x Jah
  1 Flawless Ruby
  #### Bonus
  Weapon: 32% Chance to Freeze Target
  Armor/Helm/Shield: Cannot Be Frozen
  Clvl Required: 67
  `,

  Zod: `
  2 x Cham
  1 Flawless Emerald
  #### Bonus
  Weapon: Indestructible
  Armor/Helm/Shield: Indestructible
  Clvl Required: 69
  `,
};

export default runesDesc;
