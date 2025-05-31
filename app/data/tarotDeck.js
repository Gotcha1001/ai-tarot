const tarotDeck = [
  // Major Arcana
  {
    id: 0,
    name: "The Fool",
    meaning: "New beginnings, spontaneity, adventure.",
    image: "fool.jpg",
  },
  {
    id: 1,
    name: "The Magician",
    meaning: "Manifestation, power, inspired action.",
    image: "magician.jpg",
  },
  {
    id: 2,
    name: "The High Priestess",
    meaning: "Intuition, divine feminine, mystery.",
    image: "high_priestess.jpg",
  },
  {
    id: 3,
    name: "The Empress",
    meaning: "Fertility, beauty, nurturing.",
    image: "empress.jpg",
  },
  {
    id: 4,
    name: "The Emperor",
    meaning: "Authority, structure, control.",
    image: "emperor.jpg",
  },
  {
    id: 5,
    name: "The Hierophant",
    meaning: "Tradition, spiritual wisdom.",
    image: "hierophant.jpg",
  },
  {
    id: 6,
    name: "The Lovers",
    meaning: "Love, harmony, relationships.",
    image: "lovers.jpg",
  },
  {
    id: 7,
    name: "The Chariot",
    meaning: "Willpower, determination, control.",
    image: "chariot.jpg",
  },
  {
    id: 8,
    name: "Strength",
    meaning: "Courage, compassion, inner strength.",
    image: "strength.jpg",
  },
  {
    id: 9,
    name: "The Hermit",
    meaning: "Soul-searching, introspection.",
    image: "hermit.jpg",
  },
  {
    id: 10,
    name: "Wheel of Fortune",
    meaning: "Destiny, change, cycles.",
    image: "wheel_of_fortune.jpg",
  },
  {
    id: 11,
    name: "Justice",
    meaning: "Fairness, truth, law.",
    image: "justice.jpg",
  },
  {
    id: 12,
    name: "The Hanged Man",
    meaning: "Letting go, new perspectives.",
    image: "hanged_man.jpg",
  },
  {
    id: 13,
    name: "Death",
    meaning: "Endings, transformation, transition.",
    image: "death.jpg",
  },
  {
    id: 14,
    name: "Temperance",
    meaning: "Balance, moderation, patience.",
    image: "temperance.jpg",
  },
  {
    id: 15,
    name: "The Devil",
    meaning: "Addiction, materialism, bondage.",
    image: "devil.jpg",
  },
  {
    id: 16,
    name: "The Tower",
    meaning: "Sudden upheaval, revelation.",
    image: "tower.jpg",
  },
  {
    id: 17,
    name: "The Star",
    meaning: "Hope, inspiration, serenity.",
    image: "star.jpg",
  },
  {
    id: 18,
    name: "The Moon",
    meaning: "Illusion, fear, subconscious.",
    image: "moon.jpg",
  },
  {
    id: 19,
    name: "The Sun",
    meaning: "Joy, success, celebration.",
    image: "sun.jpg",
  },
  {
    id: 20,
    name: "Judgement",
    meaning: "Rebirth, inner calling, absolution.",
    image: "judgement.jpg",
  },
  {
    id: 21,
    name: "The World",
    meaning: "Completion, wholeness, achievement.",
    image: "world.jpg",
  },

  // Minor Arcana - Cups
  ...Array.from({ length: 14 }, (_, i) => {
    const names = [
      "Ace",
      "Two",
      "Three",
      "Four",
      "Five",
      "Six",
      "Seven",
      "Eight",
      "Nine",
      "Ten",
      "Page",
      "Knight",
      "Queen",
      "King",
    ];
    const meanings = [
      "New emotions, love, intuition.",
      "Balance, partnership, attraction.",
      "Celebration, friendship, creativity.",
      "Contemplation, reevaluation.",
      "Loss, regret, focusing on the negative.",
      "Reunion, nostalgia, memories.",
      "Choices, illusion, fantasy.",
      "Walking away, letting go.",
      "Contentment, satisfaction.",
      "Fulfillment, happiness, harmony.",
      "Creative beginnings, messages.",
      "Romantic action, idealism.",
      "Emotional security, compassion.",
      "Emotional balance, diplomacy.",
    ];
    return {
      id: 22 + i,
      name: `${names[i]} of Cups`,
      meaning: meanings[i],
      image: `${names[i].toLowerCase()}_of_cups.jpg`,
    };
  }),

  // Minor Arcana - Pentacles
  ...Array.from({ length: 14 }, (_, i) => {
    const names = [
      "Ace",
      "Two",
      "Three",
      "Four",
      "Five",
      "Six",
      "Seven",
      "Eight",
      "Nine",
      "Ten",
      "Page",
      "Knight",
      "Queen",
      "King",
    ];
    const meanings = [
      "New financial opportunity, abundance.",
      "Balance, priorities, time management.",
      "Teamwork, collaboration, building.",
      "Greed, control, security.",
      "Poverty, worry, isolation.",
      "Generosity, charity, sharing.",
      "Planning, perseverance, assessment.",
      "Apprenticeship, craftsmanship.",
      "Gratitude, luxury, independence.",
      "Wealth, family, inheritance.",
      "Ambition, goal setting.",
      "Efficiency, routine, productivity.",
      "Nurturing, practical, secure.",
      "Security, discipline, control.",
    ];
    return {
      id: 36 + i,
      name: `${names[i]} of Pentacles`,
      meaning: meanings[i],
      image: `${names[i].toLowerCase()}_of_pentacles.jpg`,
    };
  }),

  // Minor Arcana - Swords
  ...Array.from({ length: 14 }, (_, i) => {
    const names = [
      "Ace",
      "Two",
      "Three",
      "Four",
      "Five",
      "Six",
      "Seven",
      "Eight",
      "Nine",
      "Ten",
      "Page",
      "Knight",
      "Queen",
      "King",
    ];
    const meanings = [
      "Breakthrough, clarity, intellect.",
      "Decisions, duality, choices.",
      "Heartbreak, sorrow, betrayal.",
      "Rest, recovery, contemplation.",
      "Conflict, tension, defeat.",
      "Transition, change, rite of passage.",
      "Deception, trickery, tactics.",
      "Imprisonment, restriction, fear.",
      "Anxiety, despair, nightmares.",
      "Ruin, endings, collapse.",
      "Curiosity, mental energy.",
      "Ambition, drive, haste.",
      "Perception, independence.",
      "Clarity, truth, intellectual power.",
    ];
    return {
      id: 50 + i,
      name: `${names[i]} of Swords`,
      meaning: meanings[i],
      image: `${names[i].toLowerCase()}_of_swords.jpg`,
    };
  }),

  // Minor Arcana - Wands
  ...Array.from({ length: 14 }, (_, i) => {
    const names = [
      "Ace",
      "Two",
      "Three",
      "Four",
      "Five",
      "Six",
      "Seven",
      "Eight",
      "Nine",
      "Ten",
      "Page",
      "Knight",
      "Queen",
      "King",
    ];
    const meanings = [
      "Inspiration, new opportunities.",
      "Planning, progress, decisions.",
      "Expansion, foresight, exploration.",
      "Celebration, harmony, home.",
      "Disagreement, competition, strife.",
      "Success, recognition, progress.",
      "Challenge, perseverance, defense.",
      "Speed, movement, swift change.",
      "Resilience, persistence, boundaries.",
      "Burden, stress, responsibility.",
      "Inspiration, exploration, potential.",
      "Energy, passion, adventure.",
      "Confidence, independence, vibrancy.",
      "Leadership, vision, honor.",
    ];
    return {
      id: 64 + i,
      name: `${names[i]} of Wands`,
      meaning: meanings[i],
      image: `${names[i].toLowerCase()}_of_wands.jpg`,
    };
  }),
];

export default tarotDeck;

// const tarotDeck = [
//   // Major Arcana
//   {
//     id: 0,
//     name: "The Fool",
//     meaning: "New beginnings, spontaneity, adventure.",
//     image: "fool.svg",
//   },
//   {
//     id: 1,
//     name: "The Magician",
//     meaning: "Manifestation, power, inspired action.",
//     image: "magician.svg",
//   },
//   {
//     id: 2,
//     name: "The High Priestess",
//     meaning: "Intuition, divine feminine, mystery.",
//     image: "high_priestess.svg",
//   },
//   {
//     id: 3,
//     name: "The Empress",
//     meaning: "Fertility, beauty, nurturing.",
//     image: "empress.svg",
//   },
//   {
//     id: 4,
//     name: "The Emperor",
//     meaning: "Authority, structure, control.",
//     image: "emperor.svg",
//   },
//   {
//     id: 5,
//     name: "The Hierophant",
//     meaning: "Tradition, spiritual wisdom.",
//     image: "hierophant.svg",
//   },
//   {
//     id: 6,
//     name: "The Lovers",
//     meaning: "Love, harmony, relationships.",
//     image: "lovers.svg",
//   },
//   {
//     id: 7,
//     name: "The Chariot",
//     meaning: "Willpower, determination, control.",
//     image: "chariot.svg",
//   },
//   {
//     id: 8,
//     name: "Strength",
//     meaning: "Courage, compassion, inner strength.",
//     image: "strength.svg",
//   },
//   {
//     id: 9,
//     name: "The Hermit",
//     meaning: "Soul-searching, introspection.",
//     image: "hermit.svg",
//   },
//   {
//     id: 10,
//     name: "Wheel of Fortune",
//     meaning: "Destiny, change, cycles.",
//     image: "wheel_of_fortune.svg",
//   },
//   {
//     id: 11,
//     name: "Justice",
//     meaning: "Fairness, truth, law.",
//     image: "justice.svg",
//   },
//   {
//     id: 12,
//     name: "The Hanged Man",
//     meaning: "Letting go, new perspectives.",
//     image: "hanged_man.svg",
//   },
//   {
//     id: 13,
//     name: "Death",
//     meaning: "Endings, transformation, transition.",
//     image: "death.svg",
//   },
//   {
//     id: 14,
//     name: "Temperance",
//     meaning: "Balance, moderation, patience.",
//     image: "temperance.svg",
//   },
//   {
//     id: 15,
//     name: "The Devil",
//     meaning: "Addiction, materialism, bondage.",
//     image: "devil.svg",
//   },
//   {
//     id: 16,
//     name: "The Tower",
//     meaning: "Sudden upheaval, revelation.",
//     image: "tower.svg",
//   },
//   {
//     id: 17,
//     name: "The Star",
//     meaning: "Hope, inspiration, serenity.",
//     image: "star.svg",
//   },
//   {
//     id: 18,
//     name: "The Moon",
//     meaning: "Illusion, fear, subconscious.",
//     image: "moon.svg",
//   },
//   {
//     id: 19,
//     name: "The Sun",
//     meaning: "Joy, success, celebration.",
//     image: "sun.svg",
//   },
//   {
//     id: 20,
//     name: "Judgement",
//     meaning: "Rebirth, inner calling, absolution.",
//     image: "judgement.svg",
//   },
//   {
//     id: 21,
//     name: "The World",
//     meaning: "Completion, wholeness, achievement.",
//     image: "world.svg",
//   },

//   // Minor Arcana - Cups
//   ...Array.from({ length: 14 }, (_, i) => {
//     const names = [
//       "Ace",
//       "Two",
//       "Three",
//       "Four",
//       "Five",
//       "Six",
//       "Seven",
//       "Eight",
//       "Nine",
//       "Ten",
//       "Page",
//       "Knight",
//       "Queen",
//       "King",
//     ];
//     const meanings = [
//       "New emotions, love, intuition.",
//       "Balance, partnership, attraction.",
//       "Celebration, friendship, creativity.",
//       "Contemplation, reevaluation.",
//       "Loss, regret, focusing on the negative.",
//       "Reunion, nostalgia, memories.",
//       "Choices, illusion, fantasy.",
//       "Walking away, letting go.",
//       "Contentment, satisfaction.",
//       "Fulfillment, happiness, harmony.",
//       "Creative beginnings, messages.",
//       "Romantic action, idealism.",
//       "Emotional security, compassion.",
//       "Emotional balance, diplomacy.",
//     ];
//     return {
//       id: 22 + i,
//       name: `${names[i]} of Cups`,
//       meaning: meanings[i],
//       image: `${names[i].toLowerCase()}_of_cups.svg`,
//     };
//   }),

//   // Minor Arcana - Pentacles
//   ...Array.from({ length: 14 }, (_, i) => {
//     const names = [
//       "Ace",
//       "Two",
//       "Three",
//       "Four",
//       "Five",
//       "Six",
//       "Seven",
//       "Eight",
//       "Nine",
//       "Ten",
//       "Page",
//       "Knight",
//       "Queen",
//       "King",
//     ];
//     const meanings = [
//       "New financial opportunity, abundance.",
//       "Balance, priorities, time management.",
//       "Teamwork, collaboration, building.",
//       "Greed, control, security.",
//       "Poverty, worry, isolation.",
//       "Generosity, charity, sharing.",
//       "Planning, perseverance, assessment.",
//       "Apprenticeship, craftsmanship.",
//       "Gratitude, luxury, independence.",
//       "Wealth, family, inheritance.",
//       "Ambition, goal setting.",
//       "Efficiency, routine, productivity.",
//       "Nurturing, practical, secure.",
//       "Security, discipline, control.",
//     ];
//     return {
//       id: 36 + i,
//       name: `${names[i]} of Pentacles`,
//       meaning: meanings[i],
//       image: `${names[i].toLowerCase()}_of_pentacles.svg`,
//     };
//   }),

//   // Minor Arcana - Swords
//   ...Array.from({ length: 14 }, (_, i) => {
//     const names = [
//       "Ace",
//       "Two",
//       "Three",
//       "Four",
//       "Five",
//       "Six",
//       "Seven",
//       "Eight",
//       "Nine",
//       "Ten",
//       "Page",
//       "Knight",
//       "Queen",
//       "King",
//     ];
//     const meanings = [
//       "Breakthrough, clarity, intellect.",
//       "Decisions, duality, choices.",
//       "Heartbreak, sorrow, betrayal.",
//       "Rest, recovery, contemplation.",
//       "Conflict, tension, defeat.",
//       "Transition, change, rite of passage.",
//       "Deception, trickery, tactics.",
//       "Imprisonment, restriction, fear.",
//       "Anxiety, despair, nightmares.",
//       "Ruin, endings, collapse.",
//       "Curiosity, mental energy.",
//       "Ambition, drive, haste.",
//       "Perception, independence.",
//       "Clarity, truth, intellectual power.",
//     ];
//     return {
//       id: 50 + i,
//       name: `${names[i]} of Swords`,
//       meaning: meanings[i],
//       image: `${names[i].toLowerCase()}_of_swords.svg`,
//     };
//   }),

//   // Minor Arcana - Wands
//   ...Array.from({ length: 14 }, (_, i) => {
//     const names = [
//       "Ace",
//       "Two",
//       "Three",
//       "Four",
//       "Five",
//       "Six",
//       "Seven",
//       "Eight",
//       "Nine",
//       "Ten",
//       "Page",
//       "Knight",
//       "Queen",
//       "King",
//     ];
//     const meanings = [
//       "Inspiration, new opportunities.",
//       "Planning, progress, decisions.",
//       "Expansion, foresight, exploration.",
//       "Celebration, harmony, home.",
//       "Disagreement, competition, strife.",
//       "Success, recognition, progress.",
//       "Challenge, perseverance, defense.",
//       "Speed, movement, swift change.",
//       "Resilience, persistence, boundaries.",
//       "Burden, stress, responsibility.",
//       "Inspiration, exploration, potential.",
//       "Energy, passion, adventure.",
//       "Confidence, independence, vibrancy.",
//       "Leadership, vision, honor.",
//     ];
//     return {
//       id: 64 + i,
//       name: `${names[i]} of Wands`,
//       meaning: meanings[i],
//       image: `${names[i].toLowerCase()}_of_wands.svg`,
//     };
//   }),
// ];

// export default tarotDeck;

// const tarotDeck = [
//   // Major Arcana
//   {
//     id: 0,
//     name: "The Fool",
//     meaning: "New beginnings, spontaneity, adventure.",
//     image: "two-of-cups.jpg",
//   },
//   {
//     id: 1,
//     name: "The Magician",
//     meaning: "Manifestation, power, inspired action.",
//     image: "two-of-cups.jpg",
//   },
//   {
//     id: 2,
//     name: "The High Priestess",
//     meaning: "Intuition, divine feminine, mystery.",
//     image: "two-of-cups.jpg",
//   },
//   {
//     id: 3,
//     name: "The Empress",
//     meaning: "Fertility, beauty, nurturing.",
//     image: "two-of-cups.jpg",
//   },
//   {
//     id: 4,
//     name: "The Emperor",
//     meaning: "Authority, structure, control.",
//     image: "two-of-cups.jpg",
//   },
//   {
//     id: 5,
//     name: "The Hierophant",
//     meaning: "Tradition, spiritual wisdom.",
//     image: "two-of-cups.jpg",
//   },
//   {
//     id: 6,
//     name: "The Lovers",
//     meaning: "Love, harmony, relationships.",
//     image: "two-of-cups.jpg",
//   },
//   {
//     id: 7,
//     name: "The Chariot",
//     meaning: "Willpower, determination, control.",
//     image: "two-of-cups.jpg",
//   },
//   {
//     id: 8,
//     name: "Strength",
//     meaning: "Courage, compassion, inner strength.",
//     image: "two-of-cups.jpg",
//   },
//   {
//     id: 9,
//     name: "The Hermit",
//     meaning: "Soul-searching, introspection.",
//     image: "two-of-cups.jpg",
//   },
//   {
//     id: 10,
//     name: "Wheel of Fortune",
//     meaning: "Destiny, change, cycles.",
//     image: "two-of-cups.jpg",
//   },
//   {
//     id: 11,
//     name: "Justice",
//     meaning: "Fairness, truth, law.",
//     image: "two-of-cups.jpg",
//   },
//   {
//     id: 12,
//     name: "The Hanged Man",
//     meaning: "Letting go, new perspectives.",
//     image: "two-of-cups.jpg",
//   },
//   {
//     id: 13,
//     name: "Death",
//     meaning: "Endings, transformation, transition.",
//     image: "two-of-cups.jpg",
//   },
//   {
//     id: 14,
//     name: "Temperance",
//     meaning: "Balance, moderation, patience.",
//     image: "two-of-cups.jpg",
//   },
//   {
//     id: 15,
//     name: "The Devil",
//     meaning: "Addiction, materialism, bondage.",
//     image: "two-of-cups.jpg",
//   },
//   {
//     id: 16,
//     name: "The Tower",
//     meaning: "Sudden upheaval, revelation.",
//     image: "two-of-cups.jpg",
//   },
//   {
//     id: 17,
//     name: "The Star",
//     meaning: "Hope, inspiration, serenity.",
//     image: "two-of-cups.jpg",
//   },
//   {
//     id: 18,
//     name: "The Moon",
//     meaning: "Illusion, fear, subconscious.",
//     image: "two-of-cups.jpg",
//   },
//   {
//     id: 19,
//     name: "The Sun",
//     meaning: "Joy, success, celebration.",
//     image: "two-of-cups.jpg",
//   },
//   {
//     id: 20,
//     name: "Judgement",
//     meaning: "Rebirth, inner calling, absolution.",
//     image: "two-of-cups.jpg",
//   },
//   {
//     id: 21,
//     name: "The World",
//     meaning: "Completion, wholeness, achievement.",
//     image: "two-of-cups.jpg",
//   },

//   // Minor Arcana - Cups
//   ...Array.from({ length: 14 }, (_, i) => {
//     const names = [
//       "Ace",
//       "Two",
//       "Three",
//       "Four",
//       "Five",
//       "Six",
//       "Seven",
//       "Eight",
//       "Nine",
//       "Ten",
//       "Page",
//       "Knight",
//       "Queen",
//       "King",
//     ];
//     const meanings = [
//       "New emotions, love, intuition.",
//       "Balance, partnership, attraction.",
//       "Celebration, friendship, creativity.",
//       "Contemplation, reevaluation.",
//       "Loss, regret, focusing on the negative.",
//       "Reunion, nostalgia, memories.",
//       "Choices, illusion, fantasy.",
//       "Walking away, letting go.",
//       "Contentment, satisfaction.",
//       "Fulfillment, happiness, harmony.",
//       "Creative beginnings, messages.",
//       "Romantic action, idealism.",
//       "Emotional security, compassion.",
//       "Emotional balance, diplomacy.",
//     ];
//     return {
//       id: 22 + i,
//       name: `${names[i]} of Cups`,
//       meaning: meanings[i],
//       image: "two-of-cups.jpg",
//     };
//   }),

//   // Minor Arcana - Pentacles
//   ...Array.from({ length: 14 }, (_, i) => {
//     const names = [
//       "Ace",
//       "Two",
//       "Three",
//       "Four",
//       "Five",
//       "Six",
//       "Seven",
//       "Eight",
//       "Nine",
//       "Ten",
//       "Page",
//       "Knight",
//       "Queen",
//       "King",
//     ];
//     const meanings = [
//       "New financial opportunity, abundance.",
//       "Balance, priorities, time management.",
//       "Teamwork, collaboration, building.",
//       "Greed, control, security.",
//       "Poverty, worry, isolation.",
//       "Generosity, charity, sharing.",
//       "Planning, perseverance, assessment.",
//       "Apprenticeship, craftsmanship.",
//       "Gratitude, luxury, independence.",
//       "Wealth, family, inheritance.",
//       "Ambition, goal setting.",
//       "Efficiency, routine, productivity.",
//       "Nurturing, practical, secure.",
//       "Security, discipline, control.",
//     ];
//     return {
//       id: 36 + i,
//       name: `${names[i]} of Pentacles`,
//       meaning: meanings[i],
//       image: "two-of-cups.jpg",
//     };
//   }),

//   // Minor Arcana - Swords
//   ...Array.from({ length: 14 }, (_, i) => {
//     const names = [
//       "Ace",
//       "Two",
//       "Three",
//       "Four",
//       "Five",
//       "Six",
//       "Seven",
//       "Eight",
//       "Nine",
//       "Ten",
//       "Page",
//       "Knight",
//       "Queen",
//       "King",
//     ];
//     const meanings = [
//       "Breakthrough, clarity, intellect.",
//       "Decisions, duality, choices.",
//       "Heartbreak, sorrow, betrayal.",
//       "Rest, recovery, contemplation.",
//       "Conflict, tension, defeat.",
//       "Transition, change, rite of passage.",
//       "Deception, trickery, tactics.",
//       "Imprisonment, restriction, fear.",
//       "Anxiety, despair, nightmares.",
//       "Ruin, endings, collapse.",
//       "Curiosity, mental energy.",
//       "Ambition, drive, haste.",
//       "Perception, independence.",
//       "Clarity, truth, intellectual power.",
//     ];
//     return {
//       id: 50 + i,
//       name: `${names[i]} of Swords`,
//       meaning: meanings[i],
//       image: "two-of-cups.jpg",
//     };
//   }),

//   // Minor Arcana - Wands
//   ...Array.from({ length: 14 }, (_, i) => {
//     const names = [
//       "Ace",
//       "Two",
//       "Three",
//       "Four",
//       "Five",
//       "Six",
//       "Seven",
//       "Eight",
//       "Nine",
//       "Ten",
//       "Page",
//       "Knight",
//       "Queen",
//       "King",
//     ];
//     const meanings = [
//       "Inspiration, new opportunities.",
//       "Planning, progress, decisions.",
//       "Expansion, foresight, exploration.",
//       "Celebration, harmony, home.",
//       "Disagreement, competition, strife.",
//       "Success, recognition, progress.",
//       "Challenge, perseverance, defense.",
//       "Speed, movement, swift change.",
//       "Resilience, persistence, boundaries.",
//       "Burden, stress, responsibility.",
//       "Inspiration, exploration, potential.",
//       "Energy, passion, adventure.",
//       "Confidence, independence, vibrancy.",
//       "Leadership, vision, honor.",
//     ];
//     return {
//       id: 64 + i,
//       name: `${names[i]} of Wands`,
//       meaning: meanings[i],
//       image: "two-of-cups.jpg",
//     };
//   }),
// ];

// export default tarotDeck;
