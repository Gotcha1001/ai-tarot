// import { NextResponse } from "next/server";
// import { GoogleGenerativeAI } from "@google/generative-ai";
// import OpenAI from "openai";

// // Initialize Gemini and OpenRouter clients
// const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
// const openai = new OpenAI({
//   baseURL: "https://openrouter.ai/api/v1",
//   apiKey: process.env.OPENROUTER_API_KEY,
// });

// // Spread configurations
// const spreadConfig = {
//   single: { name: "Single Card Draw", positions: ["Insight"] },
//   duality: { name: "Duality Spread", positions: ["Option 1", "Option 2"] },
//   "past-present-future": {
//     name: "Past-Present-Future",
//     positions: ["Past", "Present", "Future"],
//   },
//   elemental: {
//     name: "Elemental Spread",
//     positions: ["Earth", "Air", "Fire", "Water"],
//   },
//   "cross-of-truth": {
//     name: "Cross of Truth",
//     positions: ["Situation", "Challenge", "Advice", "Outcome", "Core"],
//   },
//   relationship: {
//     name: "Relationship Spread",
//     positions: [
//       "You",
//       "Other",
//       "Relationship",
//       "Strengths",
//       "Challenges",
//       "Future",
//     ],
//   },
//   horseshoe: {
//     name: "Horseshoe Spread",
//     positions: [
//       "Past",
//       "Present",
//       "Future",
//       "Influences",
//       "Obstacles",
//       "Advice",
//       "Outcome",
//     ],
//   },
//   "celtic-cross": {
//     name: "Celtic Cross",
//     positions: [
//       "Present",
//       "Challenge",
//       "Past",
//       "Future",
//       "Above",
//       "Below",
//       "Advice",
//       "External Influences",
//       "Hopes/Fears",
//       "Outcome",
//     ],
//   },
// };

// export async function POST(request) {
//   try {
//     // Parse request body
//     const {
//       cards,
//       model,
//       spread = "past-present-future",
//     } = await request.json();

//     // Validate input
//     if (!cards || !Array.isArray(cards) || cards.length === 0 || !model) {
//       return NextResponse.json(
//         { error: "Cards array and model are required" },
//         { status: 400 }
//       );
//     }

//     // Sanitize card names
//     const sanitizedCards = cards.map((card) => ({
//       ...card,
//       name: card.name
//         .replace(/[^a-zA-Z\s'-]/g, "")
//         .trim()
//         .slice(0, 50),
//     }));

//     if (sanitizedCards.some((card) => !card.name)) {
//       return NextResponse.json(
//         { error: "One or more invalid card names" },
//         { status: 400 }
//       );
//     }

//     // Get spread configuration
//     const spreadInfo =
//       spreadConfig[spread] || spreadConfig["past-present-future"];
//     const positions = spreadInfo.positions.slice(0, cards.length);

//     // Build prompt for tarot reading
//     const prompt = `
//       Generate a detailed, mystical tarot reading for a ${
//         spreadInfo.name
//       } spread with ${cards.length} card${cards.length > 1 ? "s" : ""}.
//       The cards drawn are:
//       ${sanitizedCards
//         .map(
//           (card, index) =>
//             `${index + 1}. ${card.name} (Position: ${
//               positions[index] || "Unknown"
//             }, Meaning: ${card.meaning})`
//         )
//         .join("\n")}
//       Provide a 4-8 sentence interpretation, blending the card meanings into a cohesive, family-friendly narrative.
//       Evoke wonder, insight, and positivity, focusing on personal growth and guidance.
//       Address the user directly as "Seeker" and reference each card by its exact name and position.
//     `;

//     let interpretation;
//     let attempts = 0;
//     const maxAttempts = 3;

//     // Handle Gemini 1.5 Flash
//     if (model === "gemini") {
//       const geminiModel = genAI.getGenerativeModel({
//         model: "gemini-1.5-flash",
//       });
//       while (attempts < maxAttempts) {
//         const result = await geminiModel.generateContent(prompt);
//         const response = await result.response;
//         interpretation = response.text();
//         if (
//           sanitizedCards.every((card) => interpretation.includes(card.name))
//         ) {
//           break;
//         }
//         console.warn(
//           `Attempt ${
//             attempts + 1
//           }: Reading does not contain all card names. Retrying...`
//         );
//         attempts++;
//       }
//     }
//     // Handle OpenRouter
//     else if (model === "openrouter") {
//       while (attempts < maxAttempts) {
//         const completion = await openai.chat.completions.create({
//           model: "openai/gpt-3.5-turbo",
//           messages: [{ role: "user", content: prompt }],
//         });
//         interpretation = completion.choices[0].message.content;
//         if (
//           sanitizedCards.every((card) => interpretation.includes(card.name))
//         ) {
//           break;
//         }
//         console.warn(
//           `Attempt ${
//             attempts + 1
//           }: Reading does not contain all card names. Retrying...`
//         );
//         attempts++;
//       }
//     } else {
//       return NextResponse.json(
//         { error: 'Invalid model selected. Use "gemini" or "openrouter"' },
//         { status: 400 }
//       );
//     }

//     if (attempts >= maxAttempts) {
//       return NextResponse.json(
//         {
//           error: `Failed to generate reading with all card names after ${maxAttempts} attempts`,
//         },
//         { status: 500 }
//       );
//     }

//     return NextResponse.json({
//       interpretation,
//       greeting: "Dearest Seeker,",
//     });
//   } catch (error) {
//     console.error("Error generating tarot reading:", error);
//     return NextResponse.json(
//       {
//         error:
//           "Failed to generate tarot reading: " +
//           (error.message || "Unknown error"),
//       },
//       { status: 500 }
//     );
//   }
// }

// import { NextResponse } from "next/server";
// import { GoogleGenerativeAI } from "@google/generative-ai";
// import OpenAI from "openai";

// // Initialize Gemini and OpenRouter clients
// const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
// const openai = new OpenAI({
//   baseURL: "https://openrouter.ai/api/v1",
//   apiKey: process.env.OPENROUTER_API_KEY,
// });

// // Spread configurations
// const spreadConfig = {
//   single: { name: "Single Card Draw", positions: ["Insight"] },
//   duality: { name: "Duality Spread", positions: ["Option 1", "Option 2"] },
//   "past-present-future": {
//     name: "Past-Present-Future",
//     positions: ["Past", "Present", "Future"],
//   },
//   elemental: {
//     name: "Elemental Spread",
//     positions: ["Earth", "Air", "Fire", "Water"],
//   },
//   "cross-of-truth": {
//     name: "Cross of Truth",
//     positions: ["Situation", "Challenge", "Advice", "Outcome", "Core"],
//   },
//   relationship: {
//     name: "Relationship Spread",
//     positions: [
//       "You",
//       "Other",
//       "Relationship",
//       "Strengths",
//       "Challenges",
//       "Future",
//     ],
//   },
//   horseshoe: {
//     name: "Horseshoe Spread",
//     positions: [
//       "Past",
//       "Present",
//       "Future",
//       "Influences",
//       "Obstacles",
//       "Advice",
//       "Outcome",
//     ],
//   },
//   "celtic-cross": {
//     name: "Celtic Cross",
//     positions: [
//       "Present",
//       "Challenge",
//       "Past",
//       "Future",
//       "Above",
//       "Below",
//       "Advice",
//       "External Influences",
//       "Hopes/Fears",
//       "Outcome",
//     ],
//   },
//   zodiac: {
//     name: "Zodiac Spread",
//     positions: [
//       "Aries (Self)",
//       "Taurus (Values)",
//       "Gemini (Communication)",
//       "Cancer (Home)",
//       "Leo (Creativity)",
//       "Virgo (Health)",
//       "Libra (Relationships)",
//       "Scorpio (Transformation)",
//       "Sagittarius (Exploration)",
//       "Capricorn (Career)",
//       "Aquarius (Community)",
//       "Pisces (Spirituality)",
//     ],
//   },
//   "year-ahead": {
//     name: "Year Ahead Spread",
//     positions: [
//       "January",
//       "February",
//       "March",
//       "April",
//       "May",
//       "June",
//       "July",
//       "August",
//       "September",
//       "October",
//       "November",
//       "December",
//       "Overview",
//     ],
//   },
// };

// export async function POST(request) {
//   try {
//     // Parse request body
//     const {
//       cards,
//       model,
//       spread = "past-present-future",
//     } = await request.json();

//     // Validate input
//     if (!cards || !Array.isArray(cards) || cards.length === 0 || !model) {
//       return NextResponse.json(
//         { error: "Cards array and model are required" },
//         { status: 400 }
//       );
//     }

//     // Sanitize card names
//     const sanitizedCards = cards.map((card) => ({
//       ...card,
//       name: card.name
//         .replace(/[^a-zA-Z\s'-]/g, "")
//         .trim()
//         .slice(0, 50),
//     }));

//     if (sanitizedCards.some((card) => !card.name)) {
//       return NextResponse.json(
//         { error: "One or more invalid card names" },
//         { status: 400 }
//       );
//     }

//     // Get spread configuration
//     const spreadInfo =
//       spreadConfig[spread] || spreadConfig["past-present-future"];
//     const positions = spreadInfo.positions.slice(0, cards.length);

//     // Build prompt for tarot reading
//     const prompt = `
//       Generate a detailed, mystical tarot reading for a ${
//         spreadInfo.name
//       } spread with ${cards.length} card${cards.length > 1 ? "s" : ""}.
//       The cards drawn are:
//       ${sanitizedCards
//         .map(
//           (card, index) =>
//             `${index + 1}. ${card.name} (Position: ${
//               positions[index] || "Unknown"
//             }, Meaning: ${card.meaning})`
//         )
//         .join("\n")}
//       Provide a ${
//         cards.length <= 3 ? "4-6" : cards.length <= 7 ? "6-8" : "8-12"
//       } sentence interpretation, blending the card meanings into a cohesive, family-friendly narrative.
//       Evoke wonder, insight, and positivity, focusing on personal growth and guidance.
//       Address the user directly as "Seeker" and explicitly reference each card by its exact name and position in the narrative.
//       Ensure every card is mentioned at least once to provide a complete interpretation.
//       Keep the response concise yet meaningful, avoiding overly verbose explanations.
//     `;

//     let interpretation;
//     let attempts = 0;
//     const maxAttempts = 5; // Increased to allow more retries for larger spreads

//     // Handle Gemini 1.5 Flash
//     if (model === "gemini") {
//       const geminiModel = genAI.getGenerativeModel({
//         model: "gemini-1.5-flash",
//       });
//       while (attempts < maxAttempts) {
//         const result = await geminiModel.generateContent(prompt);
//         const response = await result.response;
//         interpretation = response.text();
//         if (
//           sanitizedCards.every((card) => interpretation.includes(card.name))
//         ) {
//           break;
//         }
//         console.warn(
//           `Attempt ${
//             attempts + 1
//           }: Reading does not contain all card names. Retrying...`
//         );
//         attempts++;
//       }
//     }
//     // Handle OpenRouter
//     else if (model === "openrouter") {
//       while (attempts < maxAttempts) {
//         const completion = await openai.chat.completions.create({
//           model: "openai/gpt-3.5-turbo",
//           messages: [{ role: "user", content: prompt }],
//           max_tokens: cards.length > 7 ? 1500 : 1000, // Increase tokens for larger spreads
//         });
//         interpretation = completion.choices[0].message.content;
//         if (
//           sanitizedCards.every((card) => interpretation.includes(card.name))
//         ) {
//           break;
//         }
//         console.warn(
//           `Attempt ${
//             attempts + 1
//           }: Reading does not contain all card names. Retrying...`
//         );
//         attempts++;
//       }
//     } else {
//       return NextResponse.json(
//         { error: 'Invalid model selected. Use "gemini" or "openrouter"' },
//         { status: 400 }
//       );
//     }

//     if (attempts >= maxAttempts) {
//       return NextResponse.json(
//         {
//           error: `Failed to generate reading with all card names after ${maxAttempts} attempts`,
//         },
//         { status: 500 }
//       );
//     }

//     return NextResponse.json({
//       interpretation,
//       greeting: "Dearest Seeker,",
//     });
//   } catch (error) {
//     console.error("Error generating tarot reading:", error);
//     return NextResponse.json(
//       {
//         error:
//           "Failed to generate tarot reading: " +
//           (error.message || "Unknown error"),
//       },
//       { status: 500 }
//     );
//   }
// }
import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import OpenAI from "openai";

// Initialize Gemini and OpenRouter clients
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});

// Spread configurations
const spreadConfig = {
  single: { name: "Single Card Draw", positions: ["Insight"] },
  duality: { name: "Duality Spread", positions: ["Option 1", "Option 2"] },
  "past-present-future": {
    name: "Past-Present-Future",
    positions: ["Past", "Present", "Future"],
  },
  elemental: {
    name: "Elemental Spread",
    positions: ["Earth", "Air", "Fire", "Water"],
  },
  "cross-of-truth": {
    name: "Cross of Truth",
    positions: ["Situation", "Challenge", "Advice", "Outcome", "Core"],
  },
  relationship: {
    name: "Relationship Spread",
    positions: [
      "You",
      "Other",
      "Relationship",
      "Strengths",
      "Challenges",
      "Future",
    ],
  },
  horseshoe: {
    name: "Horseshoe Spread",
    positions: [
      "Past",
      "Present",
      "Future",
      "Influences",
      "Obstacles",
      "Advice",
      "Outcome",
    ],
  },
  "celtic-cross": {
    name: "Celtic Cross",
    positions: [
      "Present",
      "Challenge",
      "Past",
      "Future",
      "Above",
      "Below",
      "Advice",
      "External Influences",
      "Hopes/Fears",
      "Outcome",
    ],
  },
  zodiac: {
    name: "Zodiac Spread",
    positions: [
      "Aries (Self)",
      "Taurus (Values)",
      "Gemini (Communication)",
      "Cancer (Home)",
      "Leo (Creativity)",
      "Virgo (Health)",
      "Libra (Relationships)",
      "Scorpio (Transformation)",
      "Sagittarius (Exploration)",
      "Capricorn (Career)",
      "Aquarius (Community)",
      "Pisces (Spirituality)",
    ],
  },
  "year-ahead": {
    name: "Year Ahead Spread",
    positions: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
      "Overview",
    ],
  },
};

export async function POST(request) {
  try {
    // Parse request body
    const {
      cards,
      model,
      spread = "past-present-future",
    } = await request.json();

    // Validate input
    if (!cards || !Array.isArray(cards) || cards.length === 0 || !model) {
      console.error("Invalid input:", { cards, model, spread });
      return NextResponse.json(
        { error: "Cards array and model are required" },
        { status: 400 }
      );
    }

    // Sanitize card names
    const sanitizedCards = cards.map((card) => ({
      ...card,
      name: card.name
        .replace(/[^a-zA-Z\s'-]/g, "")
        .trim()
        .slice(0, 50),
    }));

    console.log(
      "Sanitized Cards:",
      sanitizedCards.map((c) => c.name)
    );

    if (sanitizedCards.some((card) => !card.name)) {
      console.error("Invalid card names detected:", sanitizedCards);
      return NextResponse.json(
        { error: "One or more invalid card names" },
        { status: 400 }
      );
    }

    // Get spread configuration
    const spreadInfo =
      spreadConfig[spread] || spreadConfig["past-present-future"];
    const positions = spreadInfo.positions.slice(0, cards.length);

    // Build prompt for tarot reading
    const prompt = `
      Generate a detailed, mystical tarot reading for a ${
        spreadInfo.name
      } spread with ${cards.length} card${cards.length > 1 ? "s" : ""}.
      The cards drawn are:
      ${sanitizedCards
        .map(
          (card, index) =>
            `${index + 1}. ${card.name} (Position: ${
              positions[index] || "Unknown"
            }, Meaning: ${card.meaning})`
        )
        .join("\n")}
      Provide a ${
        cards.length <= 3 ? "4-6" : cards.length <= 7 ? "6-8" : "8-12"
      } sentence interpretation, blending the card meanings into a cohesive, family-friendly narrative.
      You MUST include the exact name of each card (e.g., "${sanitizedCards
        .map((c) => c.name)
        .join(
          '", "'
        )}") at least once in the narrative, referencing its position.
      Evoke wonder, insight, and positivity, focusing on personal growth and guidance.
      Address the user directly as "Seeker" and structure the response to clearly tie each card to its position.
      Keep the response concise but complete, ensuring all ${
        cards.length
      } cards are mentioned.
    `;

    console.log("Prompt sent to AI:", prompt);

    let interpretation;
    let attempts = 0;
    const maxAttempts = 5;

    // Handle Gemini 1.5 Flash
    if (model === "gemini") {
      const geminiModel = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
        generationConfig: { maxOutputTokens: 2000 }, // Increase output tokens
      });
      while (attempts < maxAttempts) {
        const result = await geminiModel.generateContent(prompt);
        const response = await result.response;
        interpretation = response.text();

        console.log(`Gemini Attempt ${attempts + 1} Response:`, interpretation);

        const missingCards = sanitizedCards.filter(
          (card) => !interpretation.includes(card.name)
        );
        if (missingCards.length === 0) {
          break;
        }
        console.warn(
          `Attempt ${attempts + 1}: Missing cards:`,
          missingCards.map((c) => c.name)
        );
        attempts++;
      }
    }
    // Handle OpenRouter
    else if (model === "openrouter") {
      while (attempts < maxAttempts) {
        const completion = await openai.chat.completions.create({
          model: "openai/gpt-4o-mini", // Switch to gpt-4o-mini for better performance
          messages: [{ role: "user", content: prompt }],
          max_tokens: 2000, // Increased for larger spreads
        });
        interpretation = completion.choices[0].message.content;

        console.log(
          `OpenRouter Attempt ${attempts + 1} Response:`,
          interpretation
        );

        const missingCards = sanitizedCards.filter(
          (card) => !interpretation.includes(card.name)
        );
        if (missingCards.length === 0) {
          break;
        }
        console.warn(
          `Attempt ${attempts + 1}: Missing cards:`,
          missingCards.map((c) => c.name)
        );
        attempts++;
      }
    } else {
      console.error("Invalid model selected:", model);
      return NextResponse.json(
        { error: 'Invalid model selected. Use "gemini" or "openrouter"' },
        { status: 400 }
      );
    }

    if (attempts >= maxAttempts) {
      console.error(
        `Failed after ${maxAttempts} attempts. Missing cards in final response.`
      );
      return NextResponse.json(
        {
          error: `Failed to generate reading with all card names after ${maxAttempts} attempts`,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      interpretation,
      greeting: "Dearest Seeker,",
    });
  } catch (error) {
    console.error("Error generating tarot reading:", error);
    return NextResponse.json(
      {
        error:
          "Failed to generate tarot reading: " +
          (error.message || "Unknown error"),
      },
      { status: 500 }
    );
  }
}
