import React, { useState } from 'react';
import AddPlayer from './AddPlayer';

const Toolbar = ({ addPlayer, players, updateScore, scoreAdjustment, setScoreAdjustment }: { 
    addPlayer: () => void;
    players: { id: number; name: string; score: number }[];
    updateScore: (id: number, change: number) => void;
    scoreAdjustment: number; // Receive scoreAdjustment from ScoreTracker
    setScoreAdjustment: React.Dispatch<React.SetStateAction<number>>; // Receive setScoreAdjustment function to update the state
}) => {
    const [randomPlayer, setRandomPlayer] = useState<string | null>(null);

    // Function to choose a random player
    const chooseRandomPlayer = () => {
        if (players.length > 0) {
            const randomIndex = Math.floor(Math.random() * players.length);
            setRandomPlayer(players[randomIndex].name); // Store the name of the randomly selected player
        } else {
            setRandomPlayer(null); // If no players, reset the random player
        }
    };

    // Function to reset the random player selection
    const resetRandomPlayer = () => {
        setRandomPlayer(null);
    };

    // Handle score adjustment change
    const handleScoreAdjustmentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value, 10);
        if (!isNaN(value) && value > 0) { // Ensure it's a positive number
            setScoreAdjustment(value); // Update the score adjustment
        }
    };

    return (
        <div className="flex flex-row gap-4 items-center bg-gray-200 p-4 rounded-lg shadow-md w-full md:w-3/4">
            {/* Add Player Button */}
            <AddPlayer addPlayer={addPlayer} />

            {/* Choose Random Button */}
            <button 
                onClick={chooseRandomPlayer}
                className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg cursor-pointer transition-all duration-200"
            >
                Choose Random
            </button>

            {/* Reset Button */}
            <button 
                onClick={resetRandomPlayer}
                className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg cursor-pointer transition-all duration-200"
            >
                Reset
            </button>

            {/* Display the Random Player */}
            {randomPlayer && (
                <div className="text-blue-500 font-bold">
                    <p>Random Player: {randomPlayer}</p>
                </div>
            )}

            {/* Score Adjustment Input */}
            <div className="flex items-center gap-2 bg-gray-500 pl-2 rounded-lg">
                <label className="text-white">Score Adjustment:</label>
                <input 
                    type="number" 
                    value={scoreAdjustment} 
                    onChange={handleScoreAdjustmentChange} 
                    onFocus={(e) => e.target.select()} // This will select the text when the input is clicked
                    min="1"
                    className="p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>
        </div>
    );
};

export default Toolbar;
