import { Card } from './Card';

export default function CardSpread({ cards, flippedStates, handleCardClick }) {
    return (
        <div className="flex flex-wrap justify-center gap-4">
            {cards.map((card, index) => (
                <Card
                    key={card.id}
                    card={card}
                    isFlipped={flippedStates[index]}
                    onClick={() => handleCardClick(index)}
                />
            ))}
        </div>
    );
}