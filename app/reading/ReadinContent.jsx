// app/reading/ReadingContent.jsx
"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";



import Link from "next/link";

import Button from "../components/Button";
import CardSpread from "../components/CardSpread";
import AIReading from "../components/AIReading";
import tarotDeck from "../data/tarotDeck";

const spreadConfig = {
    single: { name: "Single Card Draw", cards: 1, positions: ["Insight"], description: "A quick insight or daily guidance to focus your thoughts." },
    duality: { name: "Duality Spread", cards: 2, positions: ["Option 1", "Option 2"], description: "Compare two options or aspects, such as pros and cons." },
    "past-present-future": { name: "Past-Present-Future", cards: 3, positions: ["Past", "Present", "Future"], description: "Explore the sequence of events shaping your journey." },
    elemental: { name: "Elemental Spread", cards: 4, positions: ["Earth", "Air", "Fire", "Water"], description: "Each card represents an element or direction for balance." },
    "cross-of-truth": { name: "Cross of Truth", cards: 5, positions: ["Situation", "Challenge", "Advice", "Outcome", "Core"], description: "Gain deeper insight into a situation with nuanced perspectives." },
    relationship: { name: "Relationship Spread", cards: 6, positions: ["You", "Other", "Relationship", "Strengths", "Challenges", "Future"], description: "Dive into the dynamics of relationships or personal connections." },
    horseshoe: { name: "Horseshoe Spread", cards: 7, positions: ["Past", "Present", "Future", "Influences", "Obstacles", "Advice", "Outcome"], description: "Examine influences, obstacles, and potential outcomes." },
    "celtic-cross": {
        name: "Celtic Cross",
        cards: 10,
        positions: [
            "Present", "Challenge", "Past", "Future", "Above", "Below", "Advice", "External Influences", "Hopes/Fears", "Outcome",
        ],
        description: "A comprehensive view of your life or specific situation.",
    },
    zodiac: {
        name: "Zodiac Spread",
        cards: 12,
        positions: [
            "Aries (Self)", "Taurus (Values)", "Gemini (Communication)", "Cancer (Home)",
            "Leo (Creativity)", "Virgo (Health)", "Libra (Relationships)", "Scorpio (Transformation)",
            "Sagittarius (Exploration)", "Capricorn (Career)", "Aquarius (Community)", "Pisces (Spirituality)"
        ],
        description: "Explore all areas of life, with one card per zodiac house.",
    },
    "year-ahead": {
        name: "Year Ahead Spread",
        cards: 13,
        positions: [
            "January", "February", "March", "April", "May", "June", "July",
            "August", "September", "October", "November", "December", "Overview",
        ],
        description: "One card per month plus an overview for the year ahead.",
    },
};

export default function ReadingContent() {
    const searchParams = useSearchParams();
    const spreadId = searchParams.get("spread") || "past-present-future";
    const cardCount = parseInt(searchParams.get("cards")) || 3;
    const spread = spreadConfig[spreadId] || spreadConfig["past-present-future"];

    const [drawnCards, setDrawnCards] = useState([]);
    const [flippedStates, setFlippedStates] = useState([]);
    const [model, setModel] = useState("gemini");
    const [resetTrigger, setResetTrigger] = useState(false);

    const drawCards = () => {
        const shuffled = [...tarotDeck].sort(() => Math.random() - 0.5);
        const selected = [];
        const selectedIds = new Set();

        for (let card of shuffled) {
            if (selected.length >= cardCount) break;
            if (!selectedIds.has(card.id)) {
                selected.push(card);
                selectedIds.add(card.id);
            }
        }

        setDrawnCards(selected);
        setFlippedStates(new Array(selected.length).fill(false));
        setResetTrigger(false);
    };

    const handleCardClick = (index) => {
        setFlippedStates((prev) =>
            prev.map((state, i) => (i === index ? !state : state))
        );
    };

    const resetSpread = () => {
        setDrawnCards([]);
        setFlippedStates([]);
        setResetTrigger(true);
    };

    return (
        <div className="flex flex-col items-center justify-center p-4">
            <h1 className="text-4xl font-bold mb-4">AI Tarot: {spread.name}</h1>
            <p className="text-gray-300 mb-6 text-center max-w-2xl">{spread.description}</p>

            <div className="flex gap-4 mb-4">
                <Button text="Use Gemini" onClick={() => setModel("gemini")} disabled={model === "gemini"} />
                <Button text="Use OpenRouter" onClick={() => setModel("openrouter")} disabled={model === "openrouter"} />
            </div>

            {drawnCards.length > 0 && (
                <p className="text-white text-lg mb-4">Flip the card to see its meaning</p>
            )}

            <CardSpread
                cards={drawnCards}
                flippedStates={flippedStates}
                handleCardClick={handleCardClick}
                positions={spread.positions}
            />

            <div className="flex gap-4 mt-4">
                <Button text="Draw Cards" onClick={drawCards} disabled={drawnCards.length > 0} />
                <Button text="Reset" onClick={resetSpread} disabled={drawnCards.length === 0} />
                <Link href="/readingchoice">
                    <Button text="Change Spread" />
                </Link>
            </div>

            <AIReading cards={drawnCards} model={model} reset={resetTrigger} spread={spreadId} />
        </div>
    );
}
