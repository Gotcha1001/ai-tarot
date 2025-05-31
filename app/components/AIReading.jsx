

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function AIReading({ cards, model = "gemini", reset, spread }) {
    const [reading, setReading] = useState("");
    const [greeting, setGreeting] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (cards.length === 0 || reset) {
            setReading("");
            setGreeting("");
            setLoading(false);
            return;
        }

        setLoading(true);
        fetch("/api/tarot", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ cards, model, spread }),
        })
            .then((res) => res.json())
            .then((data) => {
                setReading(data.interpretation || "");
                setGreeting(data.greeting || "");
                setLoading(false);
            })
            .catch(() => {
                setReading("Error fetching AI reading. Try again.");
                setGreeting("");
                setLoading(false);
            });
    }, [cards, model, reset, spread]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mt-8 p-4 bg-indigo-900 bg-opacity-50 rounded-lg max-w-2xl"
        >
            <h2 className="text-2xl font-bold mb-2">AI Tarot Reading</h2>
            {loading ? (
                <p className="text-gray-300">Consulting the cosmos...</p>
            ) : (
                <div>
                    <p className="text-gray-200 font-bold">{greeting}</p>
                    <p className="text-gray-200">{reading || "Draw cards to get your reading!"}</p>
                </div>
            )}
        </motion.div>
    );
}