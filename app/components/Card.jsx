

// import { motion } from 'framer-motion';
// import ReactCardFlip from 'react-card-flip';

// export function Card({ card, isFlipped, onClick }) {
//     // Debug: Log the image paths to verify
//     console.log('Card Front Image Path:', card.image ? `/assets/cards/${card.image}` : 'No image provided');
//     console.log('Card Back Image Path:', '/assets/cards/back.jpg');

//     return (
//         <motion.div
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.5 }}
//             className="m-4 flex flex-col items-center"
//         >
//             <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
//                 {/* Card Front (Image) */}
//                 <div
//                     className="w-48 h-72 bg-yellow-300 rounded-lg cursor-pointer"
//                     onClick={onClick}
//                     style={{
//                         backgroundImage: card.image ? `url('/assets/cards/${card.image}')` : "url('/assets/cards/fallback.jpg')",
//                         backgroundSize: 'cover',
//                         backgroundPosition: 'center',
//                     }}
//                 />
//                 {/* Card Back (Meaning) */}
//                 <div
//                     className="w-48 h-72 bg-indigo-700 rounded-lg flex items-center justify-center p-4 cursor-pointer text-center"
//                     onClick={onClick}
//                     style={{
//                         backgroundImage: "url('/assets/cards/back.jpg')",
//                         backgroundSize: 'cover',
//                         backgroundPosition: 'center',
//                     }}
//                 >
//                     <p className="text-white font-semibold text-sm">{card.meaning}</p>
//                 </div>
//             </ReactCardFlip>
//             {/* Card Name Below */}
//             <p className="text-white font-bold text-lg mt-2 text-center">{card.name}</p>
//         </motion.div>
//     );
// }



import { motion } from 'framer-motion';
import ReactCardFlip from 'react-card-flip';

export function Card({ card, isFlipped, onClick }) {
    // Debug: Log the image paths to verify
    console.log('Card Front Image Path:', card.image ? `/assets/cards/${card.image}` : 'No image provided');

    return (
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="m-4 flex flex-col items-center"
        >
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                {/* Card Front (Image) */}
                <div
                    className="w-48 h-72 bg-yellow-300 rounded-lg cursor-pointer"
                    onClick={onClick}
                    style={{
                        backgroundImage: card.image ? `url('/assets/cards/${card.image}')` : "url('/assets/cards/fallback.jpg')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                {/* Card Back (Meaning, no image) */}
                <div
                    className="w-48 h-72 bg-indigo-700 rounded-lg flex items-center justify-center p-4 cursor-pointer text-center"
                    onClick={onClick}
                >
                    <p className="text-white font-semibold text-sm">{card.meaning}</p>
                </div>
            </ReactCardFlip>
            {/* Card Name Below */}
            <p className="text-white font-bold text-lg mt-2 text-center">{card.name}</p>
        </motion.div>
    );
}




