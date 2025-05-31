


// "use client";

// import { useState, useEffect } from "react";
// import { useSearchParams } from "next/navigation";


// import Link from "next/link";
// import tarotDeck from "../data/tarotDeck";
// import Button from "../components/Button";
// import CardSpread from "../components/CardSpread";
// import AIReading from "../components/AIReading";

// // Define spread configurations
// const spreadConfig = {
//     single: { name: "Single Card Draw", cards: 1, positions: ["Insight"] },
//     duality: { name: "Duality Spread", cards: 2, positions: ["Option 1", "Option 2"] },
//     "past-present-future": { name: "Past-Present-Future", cards: 3, positions: ["Past", "Present", "Future"] },
//     elemental: { name: "Elemental Spread", cards: 4, positions: ["Earth", "Air", "Fire", "Water"] },
//     "cross-of-truth": { name: "Cross of Truth", cards: 5, positions: ["Situation", "Challenge", "Advice", "Outcome", "Core"] },
//     relationship: { name: "Relationship Spread", cards: 6, positions: ["You", "Other", "Relationship", "Strengths", "Challenges", "Future"] },
//     horseshoe: { name: "Horseshoe Spread", cards: 7, positions: ["Past", "Present", "Future", "Influences", "Obstacles", "Advice", "Outcome"] },
//     "celtic-cross": {
//         name: "Celtic Cross",
//         cards: 10,
//         positions: [
//             "Present",
//             "Challenge",
//             "Past",
//             "Future",
//             "Above",
//             "Below",
//             "Advice",
//             "External Influences",
//             "Hopes/Fears",
//             "Outcome",
//         ],
//     },
// };

// export default function Reading() {
//     const searchParams = useSearchParams();
//     const spreadId = searchParams.get("spread") || "past-present-future";
//     const cardCount = parseInt(searchParams.get("cards")) || 3;
//     const spread = spreadConfig[spreadId] || spreadConfig["past-present-future"];

//     const [drawnCards, setDrawnCards] = useState([]);
//     const [flippedStates, setFlippedStates] = useState([]);
//     const [model, setModel] = useState("gemini");
//     const [resetTrigger, setResetTrigger] = useState(false);

//     const drawCards = () => {
//         const shuffled = [...tarotDeck].sort(() => Math.random() - 0.5);
//         const selected = shuffled.slice(0, cardCount);
//         setDrawnCards(selected);
//         setFlippedStates(new Array(selected.length).fill(false));
//         setResetTrigger(false);
//     };

//     const handleCardClick = (index) => {
//         setFlippedStates((prev) => prev.map((state, i) => (i === index ? !state : state)));
//     };

//     const resetSpread = () => {
//         setDrawnCards([]);
//         setFlippedStates([]);
//         setResetTrigger(true);
//     };

//     return (
//         <div className="flex flex-col items-center justify-center p-4">
//             <h1 className="text-4xl font-bold mb-4">AI Tarot: {spread.name}</h1>
//             <p className="text-gray-300 mb-6 text-center max-w-2xl">
//                 {spreadConfig[spreadId].description || "Explore your chosen tarot spread with AI-powered insights."}
//             </p>
//             <div className="flex gap-4 mb-4">
//                 <Button text="Use Gemini" onClick={() => setModel("gemini")} disabled={model === "gemini"} />
//                 <Button
//                     text="Use OpenRouter"
//                     onClick={() => setModel("openrouter")}
//                     disabled={model === "openrouter"}
//                 />
//             </div>
//             {drawnCards.length > 0 && (
//                 <p className="text-white text-lg mb-4">Flip the card to see its meaning</p>
//             )}
//             <CardSpread
//                 cards={drawnCards}
//                 flippedStates={flippedStates}
//                 handleCardClick={handleCardClick}
//                 positions={spread.positions}
//             />
//             <div className="flex gap-4 mt-4">
//                 <Button text="Draw Cards" onClick={drawCards} disabled={drawnCards.length > 0} />
//                 <Button text="Reset" onClick={resetSpread} disabled={drawnCards.length === 0} />
//                 <Link href="/readingchoice">
//                     <Button text="Change Spread" />
//                 </Link>
//             </div>
//             <AIReading cards={drawnCards} model={model} reset={resetTrigger} spread={spreadId} />
//         </div>
//     );
// }





// app/reading/page.jsx
import { Suspense } from "react";
import ReadingContent from "./ReadinContent";



export default function ReadingPage() {
    return (
        <Suspense fallback={<div className="text-center p-4 text-white">Loading your reading...</div>}>
            <ReadingContent />
        </Suspense>
    );
}
