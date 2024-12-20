import React, { useState } from 'react';

const Player = ({
    player,
    updateName,
    updateScore,
    deletePlayer,
    scoreAdjustment
}: {
    player: { id: number; name: string; score: number };
    updateName: (id: number, newName: string) => void;
    updateScore: (id: number, change: number) => void;
    deletePlayer: (id: number) => void;
    scoreAdjustment: number; // Receive the score adjustment value
}) => {
    const [isEditingName, setIsEditingName] = useState(false);
    const [newName, setNewName] = useState(player.name);

    const [isEditingScore, setIsEditingScore] = useState(false);
    const [newScore, setNewScore] = useState(player.score.toString());

    const handleNameChange = () => {
        setIsEditingName(true);
    }

    const handleScoreChange = () => {
        setIsEditingScore(true);
    }

    const handleNameInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewName(e.target.value);
    }

    const handleScoreInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (/^-?\d*$/.test(value)) {
            setNewScore(value);
        }
    }

    const handleNameSave = () => {
        updateName(player.id, newName);
        setIsEditingName(false);
    }

    const handleScoreSave = () => {
        const parsedScore = parseInt(newScore, 10);
        updateScore(player.id, parsedScore - player.score);
        setIsEditingScore(false);
    }

    return (
        <div className="player flex flex-col items-center gap-2 border p-4 rounded-lg shadow-lg">
            {isEditingName ? (
                <input 
                    type="text" 
                    value={newName} 
                    onChange={handleNameInputChange} 
                    onBlur={handleNameSave} 
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') handleNameSave();
                    }} 
                    autoFocus
                    onFocus={(e) => e.target.select()} 
                />
            ) : (
                <p onDoubleClick={handleNameChange}>{player.name}</p>
            )}

            {isEditingScore ? (
                <input 
                    type="text" 
                    value={newScore} 
                    onChange={handleScoreInputChange} 
                    onBlur={handleScoreSave} 
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') handleScoreSave();
                    }} 
                    autoFocus
                    onFocus={(e) => e.target.select()} 
                />
            ) : (
                <p onDoubleClick={handleScoreChange}>{player.score}</p>
            )}

            <div className="flex gap-2 mt-2">
                <button 
                    onClick={() => updateScore(player.id, scoreAdjustment)}
                    className="bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded"
                >
                    +
                </button>
                <button 
                    onClick={() => updateScore(player.id, -scoreAdjustment)}
                    className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
                >
                    -
                </button>
                <button 
                    onClick={() => deletePlayer(player.id)} 
                    style={{ color: 'red' }}
                    className="bg-gray-500 hover:bg-gray-600 text-white py-1 px-3 rounded"
                >
                    🗑️
                </button>
            </div>
        </div>
    );
}

export default Player;
