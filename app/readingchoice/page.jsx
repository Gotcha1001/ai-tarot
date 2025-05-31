// "use client";

// import { useRouter } from "next/navigation";
// import { motion } from "framer-motion";
// import Link from "next/link";

// // Define available tarot spreads
// const spreads = [
//     {
//         id: "single",
//         name: "Single Card Draw",
//         cards: 1,
//         description: "A quick insight or daily guidance to focus your thoughts.",
//     },
//     {
//         id: "duality",
//         name: "Duality Spread",
//         cards: 2,
//         description: "Compare two options or aspects, such as pros and cons.",
//     },
//     {
//         id: "past-present-future",
//         name: "Past-Present-Future",
//         cards: 3,
//         description: "Explore the sequence of events shaping your journey.",
//     },
//     {
//         id: "elemental",
//         name: "Elemental Spread",
//         cards: 4,
//         description: "Each card represents an element or direction for balance.",
//     },
//     {
//         id: "cross-of-truth",
//         name: "Cross of Truth",
//         cards: 5,
//         description: "Gain deeper insight into a situation with nuanced perspectives.",
//     },
//     {
//         id: "relationship",
//         name: "Relationship Spread",
//         cards: 6,
//         description: "Dive into the dynamics of relationships or personal connections.",
//     },
//     {
//         id: "horseshoe",
//         name: "Horseshoe Spread",
//         cards: 7,
//         description: "Examine influences, obstacles, and potential outcomes.",
//     },
//     {
//         id: "celtic-cross",
//         name: "Celtic Cross",
//         cards: 10,
//         description: "A comprehensive view of your life or specific situation.",
//     },
// ];

// export default function ReadingChoice() {
//     const router = useRouter();

//     const handleSpreadSelect = (spreadId, cardCount) => {
//         router.push(`/reading?spread=${spreadId}&cards=${cardCount}`);
//     };

//     return (
//         <div className="min-h-screen flex flex-col gradient-background2">
//             <header className="bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 text-white py-4 sm:py-6">
//                 <div className="container mx-auto px-4">
//                     <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
//                         Choose Your Tarot Reading
//                     </h1>
//                 </div>
//             </header>
//             <main className="flex-grow">
//                 <section className="container mx-auto px-4 py-8 sm:py-12 md:py-16 text-center">
//                     <motion.div
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ duration: 0.8 }}
//                     >
//                         <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-gray-200">
//                             Select a Spread for Your AI-Powered Reading
//                         </h2>
//                         <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
//                             Choose a tarot spread that resonates with your question or intent. Each spread offers unique insights tailored to your needs.
//                         </p>
//                         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
//                             {spreads.map((spread) => (
//                                 <motion.div
//                                     key={spread.id}
//                                     initial={{ opacity: 0, y: 20 }}
//                                     animate={{ opacity: 1, y: 0 }}
//                                     transition={{ duration: 0.5, delay: 0.1 * spreads.indexOf(spread) }}
//                                     className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-purple-300/30 cursor-pointer hover:bg-white/20 transition-all duration-300"
//                                     onClick={() => handleSpreadSelect(spread.id, spread.cards)}
//                                 >
//                                     <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">{spread.name}</h3>
//                                     <p className="text-sm text-gray-300 mb-2">{spread.cards} Card{spread.cards > 1 ? "s" : ""}</p>
//                                     <p className="text-sm text-gray-300">{spread.description}</p>
//                                 </motion.div>
//                             ))}
//                         </div>
//                         <Link href="/">
//                             <button className="mt-8 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
//                                 Back to Home
//                             </button>
//                         </Link>
//                     </motion.div>
//                 </section>
//             </main>
//             <footer className="bg-gray-800 text-white py-4">
//                 <div className="container mx-auto px-4 text-center">
//                     <p>© 2025 AI Tarot Insights. Your path illuminated by AI wisdom.</p>
//                 </div>
//             </footer>
//         </div>
//     );
// }





"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

// Define available tarot spreads
const spreads = [
    {
        id: "single",
        name: "Single Card Draw",
        cards: 1,
        description: "A quick insight or daily guidance to focus your thoughts.",
    },
    {
        id: "duality",
        name: "Duality Spread",
        cards: 2,
        description: "Compare two options or aspects, such as pros and cons.",
    },
    {
        id: "past-present-future",
        name: "Past-Present-Future",
        cards: 3,
        description: "Explore the sequence of events shaping your journey.",
    },
    {
        id: "elemental",
        name: "Elemental Spread",
        cards: 4,
        description: "Each card represents an element or direction for balance.",
    },
    {
        id: "cross-of-truth",
        name: "Cross of Truth",
        cards: 5,
        description: "Gain deeper insight into a situation with nuanced perspectives.",
    },
    {
        id: "relationship",
        name: "Relationship Spread",
        cards: 6,
        description: "Dive into the dynamics of relationships or personal connections.",
    },
    {
        id: "horseshoe",
        name: "Horseshoe Spread",
        cards: 7,
        description: "Examine influences, obstacles, and potential outcomes.",
    },
    {
        id: "celtic-cross",
        name: "Celtic Cross",
        cards: 10,
        description: "A comprehensive view of your life or specific situation.",
    },
    {
        id: "zodiac",
        name: "Zodiac Spread",
        cards: 12,
        description: "Explore all areas of life, with one card per zodiac house.",
    },
    {
        id: "year-ahead",
        name: "Year Ahead Spread",
        cards: 13,
        description: "One card per month plus an overview for the year ahead.",
    },
];

export default function ReadingChoice() {
    const router = useRouter();

    const handleSpreadSelect = (spreadId, cardCount) => {
        router.push(`/reading?spread=${spreadId}&cards=${cardCount}`);
    };

    return (
        <div className="min-h-screen flex flex-col gradient-background2">
            <header className="bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 text-white py-4 sm:py-6">
                <div className="container mx-auto px-4">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
                        Choose Your Tarot Reading
                    </h1>
                </div>
            </header>
            <main className="flex-grow">
                <section className="container mx-auto px-4 py-8 sm:py-12 md:py-16 text-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-gray-200">
                            Select a Spread for Your AI-Powered Reading
                        </h2>
                        <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                            Choose a tarot spread that resonates with your question or intent. Each spread offers unique insights tailored to your needs.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
                            {spreads.map((spread) => (
                                <motion.div
                                    key={spread.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 * spreads.indexOf(spread) }}
                                    className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-purple-300/30 cursor-pointer hover:bg-white/20 transition-all duration-300"
                                    onClick={() => handleSpreadSelect(spread.id, spread.cards)}
                                >
                                    <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">{spread.name}</h3>
                                    <p className="text-sm text-gray-300 mb-2">{spread.cards} Card{spread.cards > 1 ? "s" : ""}</p>
                                    <p className="text-sm text-gray-300">{spread.description}</p>
                                </motion.div>
                            ))}
                        </div>
                        <Link href="/">
                            <button className="mt-8 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                                Back to Home
                            </button>
                        </Link>
                    </motion.div>
                </section>
            </main>
            <footer className="bg-gray-800 text-white py-4">
                <div className="container mx-auto px-4 text-center">
                    <p>© 2025 AI Tarot Insights. Your path illuminated by AI wisdom.</p>
                </div>
            </footer>
        </div>
    );
}

