const races = [
  {
    _id: "1",
    name: "Dragonborn",
    details:
      "Dragonborn look very much like dragons standing erect in humanoid form, though they lack wings or a tail.",
    versions: [
      {
        race_name: "Dragonborn",
        racial_traits:
          "+2 Strength, +1 Charisma, Draconic Ancestory, Breath Weapon, Damage Resistance",
        extra_details: null,
        stat_bonuses: {
          strength: 2,
          dexterity: 0,
          constitution: 0,
          intelligence: 0,
          wisdom: 0,
          charisma: 1,
        },
        racial_bonuses: [
          {
            bonus_name: "Draconic Ancestry",
            bonus_details:
              "You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table",
            bonus_choices: [
              {
                choice_name: "Black",
                choice_type: "Acid",
                choice_details: "5 by 30ft. line (Dex. save)",
              },
              {
                choice_name: "Blue",
                choice_type: "Lightning",
                choice_details: "5 by 30ft. line (Dex. save)",
              },
              {
                choice_name: "Brass",
                choice_type: "Fire",
                choice_details: "5 by 30ft. line (Dex. save)",
              },
              {
                choice_name: "Bronze",
                choice_type: "Lightning",
                choice_details: "5 by 30ft. line (Dex. save)",
              },
              {
                choice_name: "Copper",
                choice_type: "Acid",
                choice_details: "5 by 30ft. line (Dex. save)",
              },
              {
                choice_name: "Gold",
                choice_type: "Fire",
                choice_details: "15 ft. cone (Dex. save)",
              },
              {
                choice_name: "Green",
                choice_type: "Poison",
                choice_details: "15ft. cone (Con. save)",
              },
              {
                choice_name: "Red",
                choice_type: "Fire",
                choice_details: "15 ft. cone (Dex. save)",
              },
              {
                choice_name: "Silver",
                choice_type: "Cold",
                choice_details: "15ft. cone (Con. save)",
              },
              {
                choice_name: "White",
                choice_type: "Cold",
                choice_details: "15ft. cone (Con. save)",
              },
            ],
          },
          {
            bonus_name: "Breath Weapon",
            bonus_details:
              "You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape, and damage type of the exhalation. When you use your breath weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level. After you use your breath weapon, you can’t use it again until you complete a short or long rest.",
            bonus_choices: null,
          },
          {
            bonus_name: "Damage Resistance",
            bonus_details:
              "You have resistance to the damage type associated with your draconic ancestry",
            bonus_choices: null,
          },
        ],
      },
    ],
  },

  {
    _id: 2,
    name: "Dwarf",
    details:
      "Bold and hardy, dwarves are known as skilled warriors, miners, and workers of stone and metal.",
    versions: [
      {
        race_name: "Hill Dwarf",
        racial_traits:
          "+2 Constitution, Darkvision, Dwarven Resilience, Dwarven Combat Training, Stonecunning",
        extra_details:
          "As a hill dwarf, you have keen senses, deep intuition, and remarkable resilience. The gold dwarves of Faerûn in their mighty southern kingdom are hill dwarves, as are the exiled Neidar and the debased Klar of Krynn in the Dragonlance setting.",
        stat_bonuses: {
          strength: 0,
          dexterity: 0,
          constitution: 2,
          intelligence: 0,
          wisdom: 0,
          charisma: 1,
        },
        racial_bonuses: [
          {
            bonus_name: "Darkvision",
            bonus_details:
              "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.",
            bonus_choices: null,
          },
          {
            bonus_name: "Dwarven Resilience",
            bonus_details:
              "You have advantage on saving throws against poison, and you have resistance against poison damage (explained in the “Combat” section).",
            bonus_choices: null,
          },
          {
            bonus_name: "Dwarven Combat Training",
            bonus_details:
              "You have proficiency with the battleaxe, handaxe, light hammer, and warhammer.",
            bonus_choices: null,
          },
          {
            bonus_name: "Tool Proficiency",
            bonus_details:
              "You gain proficiency with the artisan’s tools of your choice: smith’s tools, brewer’s supplies, or mason’s tools.",
            bonus_choices: null,
          },
          {
            bonus_name: "Stonecunning",
            bonus_details:
              "Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.",
            bonus_choices: null,
          },
          {
            bonus_name: "Dwarven Toughness",
            bonus_details:
              "Your hit point maximum increases by 1, and it increases by 1 every time you gain a level.",
            bonus_choices: null,
          },
        ],
      },
      {
        race_name: "Mountain Dwarf",
        racial_traits:
          "+2 Constitution, Darkvision, Dwarven Resilience, Dwarven Combat Training, Stonecunning",
        extra_details:
          "As a mountain dwarf, you’re strong and hardy, accustomed to a difficult life in rugged terrain. You’re probably on the tall side (for a dwarf), and tend toward lighter coloration. The shield dwarves of northern Faerûn, as well as the ruling Hylar clan and the noble Daewar clan of Dragonlance, are mountain dwarves.",
        stat_bonuses: {
          strength: 0,
          dexterity: 0,
          constitution: 2,
          intelligence: 0,
          wisdom: 0,
          charisma: 0,
        },
        racial_bonuses: [
          {
            bonus_name: "Darkvision",
            bonus_details:
              "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.",
            bonus_choices: null,
          },
          {
            bonus_name: "Dwarven Resilience",
            bonus_details:
              "You have advantage on saving throws against poison, and you have resistance against poison damage (explained in the “Combat” section).",
            bonus_choices: null,
          },
          {
            bonus_name: "Dwarven Combat Training",
            bonus_details:
              "You have proficiency with the battleaxe, handaxe, light hammer, and warhammer.",
            bonus_choices: null,
          },
          {
            bonus_name: "Tool Proficiency",
            bonus_details:
              "You gain proficiency with the artisan’s tools of your choice: smith’s tools, brewer’s supplies, or mason’s tools.",
            bonus_choices: null,
          },
          {
            bonus_name: "Stonecunning",
            bonus_details:
              "Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.",
            bonus_choices: null,
          },
          {
            bonus_name: "Dwarven Armor Training",
            bonus_details: "You have proficiency with light and medium armor.",
            bonus_choices: null,
          },
        ],
      },
    ],
  },
  {
    _id: 03,
    name: "Elf",
    details:
      "Elves are a magical people of otherworldly grace, living in the world but not entirely part of it.",
    versions: [
      {
        race_name: "Dark Elf (Drow)",
        racial_traits:
          "+2 Dexterity, Darkvision, Keen Senses, Fey Ancestry, Trance",
        extra_details:
          "Descended from an earlier subrace of elves, the drow were banished from the surface world for following the goddess Lolth down the path of evil. Now they have built their own civilization in the depths of the Underdark, patterned after the Way of Lolth. Also called dark elves, the drow have skin that resembles charcoal or obsidian, as well as stark white or pale yellow hair. They commonly have very pale eyes (so pale as to be mistaken for white) in shades of lilac, silver, pink, red, and blue. They tend to be smaller and thinner than most elves. Drow adventurers are rare. Check with your Dungeon Master to see if you can play one.",
        stat_bonuses: {
          strength: 0,
          dexterity: 2,
          constitution: 0,
          intelligence: 0,
          wisdom: 0,
          charisma: 1,
        },
        racial_bonuses: [
          {
            bonus_name: "Keen Senses",
            bonus_details: "You have proficiency in the Perception skill.",
            bonus_choices: null,
          },
          {
            bonus_name: "Fey Ancestry",
            bonus_details:
              "You have advantage on saving throws against being charmed, and magic can’t put you to sleep.",
            bonus_choices: null,
          },
          {
            bonus_name: "Trance",
            bonus_details:
              "Elves don’t need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is “trance.”) While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep.",
            bonus_choices: null,
          },
          {
            bonus_name: "Ability Score Increases",
            bonus_details: "Your Charisma score increases by 1.",
            bonus_choices: null,
          },
          {
            bonus_name: "Superior Darkvision",
            bonus_details: "Your darkvision has a radius of 120",
            bonus_choices: null,
          },
          {
            bonus_name: "Sunlight Sensitivity",
            bonus_details:
              "You have disadvantage on attack rolls and on Wisdom (Perception) checks that rely on sight when you, the target of your attack, or whatever you are trying to perceive is in direct sunlight.",
            bonus_choices: null,
          },
          {
            bonus_name: "Drow Magic",
            bonus_details:
              "You know the dancing lights cantrip. When you reach 3rd level, you can cast the faerie fire spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the darkness spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.",
            bonus_choices: null,
          },
          {
            bonus_name: "Drow Weapon Training",
            bonus_details: "You have proficiency in the Perception skill.",
            bonus_choices: null,
          },
        ],
      },
      {
        race_name: "Eldarin (Variant)",
        racial_traits:
          "+2 Dexterity, Darkvision, Keen Senses, Fey Ancestry, Trance",
        extra_details:
          "Creatures of magic with strong ties to nature, eladrin live in the twilight realm of the Feywild. Their cities sometimes cross over to the Material Plane, appearing briefly in mountain valleys or deep forest glades before fading back into the Feywild.",
        stat_bonuses: {
          strength: 0,
          dexterity: 2,
          constitution: 0,
          intelligence: 0,
          wisdom: 0,
          charisma: 0,
        },
        racial_bonuses: [
          {
            bonus_name: "Darkvision",
            bonus_details:
              "Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.",
            bonus_choices: null,
          },
          {
            bonus_name: "Keen Senses",
            bonus_details: "You have proficiency in the Perception skill.",
            bonus_choices: null,
          },
          {
            bonus_name: "Fey Ancestry",
            bonus_details:
              "You have advantage on saving throws against being charmed, and magic can’t put you to sleep.",
            bonus_choices: null,
          },
          {
            bonus_name: "Trance",
            bonus_details:
              "Elves don’t need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is “trance.”) While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep.",
            bonus_choices: null,
          },
          {
            bonus_name: "Ability Score Increase",
            bonus_details: "Your Intelligence score increases by 1.",
            bonus_choices: null,
          },
          {
            bonus_name: "Elf Weapon Training",
            bonus_details:
              "You have proficiency with the longsword, shortsword, shortbow, and longbow.",
            bonus_choices: null,
          },
          {
            bonus_name: "Fey Step",
            bonus_details:
              "You can cast the misty step spell once using this trait. You regain the ability to do so when you finish a short or long rest.",
            bonus_choices: null,
          },
        ],
      },
      {
        race_name: "High Elf",
        racial_traits:
          "+2 Dexterity, Darkvision, Keen Senses, Fey Ancestry, Trance",
        extra_details:
          "As a high elf, you have a keen mind and a mastery of at least the basics of magic. In many of the worlds of D&D, there are two kinds of high elves. One type (which includes the gray elves and valley elves of Greyhawk, the Silvanesti of Dragonlance, and the sun elves of the Forgotten Realms) is haughty and reclusive, believing themselves to be superior to non-elves and even other elves. The other type (including the high elves of Greyhawk, the Qualinesti of Dragonlance, and the moon elves of the Forgotten Realms) are more common and more friendly, and often encountered among humans and other races.",
        stat_bonuses: {
          strength: 0,
          dexterity: 2,
          constitution: 0,
          intelligence: 1,
          wisdom: 0,
          charisma: 0,
        },
        racial_bonuses: [
          {
            bonus_name: "Darkvision",
            bonus_details:
              "Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.",
            bonus_choices: null,
          },
          {
            bonus_name: "Keen Senses",
            bonus_details: "You have proficiency in the Perception skill.",
            bonus_choices: null,
          },
          {
            bonus_name: "Fey Ancestry",
            bonus_details:
              "You have advantage on saving throws against being charmed, and magic can't put you to sleep.",
            bonus_choices: null,
          },
          {
            bonus_name: "Trance",
            bonus_details:
              "Elves don’t need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is “trance.”) While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep.",
            bonus_choices: null,
          },
          {
            bonus_name: "Ability Score Increase",
            bonus_details: "Your Intelligence score increases by 1.",
            bonus_choices: null,
          },
          {
            bonus_name: "Elf Weapon Training",
            bonus_details:
              "You have proficiency with the longsword, shortword, shortbow, and longbow",
            bonus_choices: null,
          },
          {
            bonus_name: "Cantrip",
            bonus_details:
              "You know one cantrip of your choice from the wizard spell list. Intelligence is your spell casting ability for it.",
            bonus_choices: null,
          },
          {
            bonus_name: "Extra Language",
            bonus_details:
              "You can speak, read, and write one extra language of your choice.",
            bonus_choices: null,
          },
        ],
      },
      {
        race_name: "Wood Elf",
        racial_traits:
          "+2 Dexterity, Darkvision, Keen Senses, Fey Ancestry, Trance",
        extra_details:
          "As a wood elf, you have keen senses and intuition, and your fleet feet carry you quickly and stealthily through your native forests. This category includes the wild elves (grugach) of Greyhawk and the Kagonesti of Dragonlance, as well as the races called wood elves in Greyhawk and the Forgotten Realms. In Faerûn, wood elves (also called wild elves, green elves, or forest elves) are reclusive and distrusting of non-elves.",
        stat_bonuses: {
          strength: 0,
          dexterity: 2,
          constitution: 0,
          intelligence: 0,
          wisdom: 1,
          charisma: 0,
        },
        racial_bonuses: [
          {
            bonus_name: "Darkvision",
            bonus_details:
              "Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.",
            bonus_choices: null,
          },
          {
            bonus_name: "Keen Senses",
            bonus_details: "You have proficiency in the Perception skill.",
            bonus_choices: null,
          },
          {
            bonus_name: "Fey Ancestry",
            bonus_details:
              "You have advantage on saving throws against being charmed, and magic can't put you to sleep.",
            bonus_choices: null,
          },
          {
            bonus_name: "Trance",
            bonus_details:
              "Elves don’t need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is “trance.”) While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep.",
            bonus_choices: null,
          },
          {
            bonus_name: "Ability Score Increase",
            bonus_details: "Your Wisdom score increase by 1.",
            bonus_choices: null,
          },
          {
            bonus_name: "Elf Weapon Training",
            bonus_details:
              "You have proficiency with the longsword, shortword, shortbow, and longbow",
            bonus_choices: null,
          },
          {
            bonus_name: "Fleet to Foot",
            bonus_details: "Your base walking speed increases to 35 feet.",
            bonus_choices: null,
          },
          {
            bonus_name: "Mask of the Wild",
            bonus_details:
              "You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena.",
            bonus_choices: null,
          },
        ],
      },
    ],
  },
  {
    _id: 4,
    name: "Gnome",
    details:
      "A gnome’s energy and enthusiasm for living shines through every inch of his or her tiny body.",
    versions: [
      {
        race_name: "Forest Gnome",
        racial_traits: "+2 Intelligence, Darkvision, Gnome Cunning",
        extra_details:
          "As a forest gnome, you have a natural knack for illusion and inherent quickness and stealth. In the worlds of D&D, forest gnomes are rare and secretive. They gather in hidden communities in sylvan forests, using illusions and trickery to conceal themselves from threats or to mask their escape should they be detected. Forest gnomes tend to be friendly with other good-spirited woodland folk, and they regard elves and good fey as their most important allies. These gnomes also befriend small forest animals and rely on them for information about threats that might prowl their lands.",
        stat_bonuses: {
          strength: 0,
          dexterity: 0,
          constitution: 0,
          intelligence: 2,
          wisdom: 0,
          charisma: 0,
        },
        racial_bonuses: [
          {
            bonus_name: "Darkvision",
            bonus_details:
              "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.",
            bonus_choices: null,
          },
          {
            bonus_name: "Gnome Cunning",
            bonus_details:
              "You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.",
            bonus_choices: null,
          },
          {
            bonus_name: "Natural Illusionist",
            bonus_details:
              "You know the minor illusion cantrip. Intelligence is your spellcasting ability for it.",
            bonus_choices: null,
          },
          {
            bonus_name: "Speak with Small Beasts",
            bonus_details:
              "Through sounds and gestures, you can communicate simple ideas with Small or smaller beasts. Forest gnomes love animals and often keep squirrels, badgers, rabbits, moles, woodpeckers, and other creatures as beloved pets.",
            bonus_choices: null,
          },
        ],
      },
      {
        race_name: "Rock Gnome",
        racial_traits: "+2 Intelligence, Darkvision, Gnome Cunning",
        extra_details:
          "As a rock gnome, you have a natural inventiveness and hardiness beyond that of other gnomes. Most gnomes in the worlds of D&D are rock gnomes, including the tinker gnomes of the Dragonlance setting.",
        stat_bonuses: {
          strength: 0,
          dexterity: 2,
          constitution: 0,
          intelligence: 0,
          wisdom: 1,
          charisma: 0,
        },
        racial_bonuses: [
          {
            bonus_name: "Darkvision",
            bonus_details:
              "Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.",
            bonus_choices: null,
          },
          {
            bonus_name: "Gnome Cunning",
            bonus_details:
              "You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.",
            bonus_choices: null,
          },
          {
            bonus_name: "Artificer's Lore",
            bonus_details:
              "Whenever you make an Intelligence (History) check related to magic items, alchemical objects, or technological devices, you can add twice your proficiency bonus, instead of any proficiency bonus you normally apply.",
            bonus_choices: null,
          },
          {
            bonus_name: "Tinker",
            bonus_details:
              "You have proficiency with artisan’s tools (tinker’s tools). Using those tools, you can spend 1 hour and 10 gp worth of materials to construct a Tiny clockwork device (AC 5, 1 hp). The device ceases to function after 24 hours (unless you spend 1 hour repairing it to keep the device functioning), or when you use your action to dismantle it; at that time, you can reclaim the materials used to create it. You can have up to three such devices active at a time.",
            bonus_choices: null,
          },
        ],
      },
    ],
  },
  {
    _id: 5,
    name: "Half-Elf",
    details:
      "Half-elves combine what some say are the best qualities of their elf and human parents.",
    versions: [
      {
        race_name: "Half-Elf",
        racial_traits:
          "+2 Charisma, +1 to Two Other Ability Scores, Darkvision, Fey Ancestry, Skill Versatility",
        stat_bonuses: {
          strength: 0,
          dexterity: 0,
          constitution: 0,
          intelligence: 0,
          wisdom: 0,
          charisma: 2,
        },
        racial_bonuses: [
          {
            bonus_name: "Ability Score Increases",
            bonus_details:
              "Your Charisma score increases by 2, and two other ability scores of your choice increase by 1.",
            bonus_choices: null,
          },
          {
            bonus_name: "Darkvisions",
            bonus_details:
              "Thanks to your elf blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.",
            bonus_choices: null,
          },
          {
            bonus_name: "Fey Ancestry",
            bonus_details:
              "You have advantage on saving throws against being charmed, and magic can’t put you to sleep.",
            bonus_choices: null,
          },
          {
            bonus_name: "Skill Versatility",
            bonus_details: "You gain proficiency in two skills of your choice.",
            bonus_choices: null,
          },
          {
            bonus_name: "Languages",
            bonus_details:
              "You can speak, read, and write Common, Elvish, and one extra language of your choice.",
            bonus_choices: null,
          },
        ],
      },
    ],
  },
];
