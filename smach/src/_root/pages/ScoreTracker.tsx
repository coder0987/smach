import React, { useState } from 'react';
import Toolbar from './ScoreTracker/Toolbar';
import Player from './ScoreTracker/Player';

// Main ScoreTracker component
const ScoreTracker = () => {
    // State to hold the list of players
    const [players, setPlayers] = useState([
        { id: 1, name: 'Player 1', score: 0 },
        { id: 2, name: 'Player 2', score: 0 }
    ]);

    // State to manage score adjustment amount
    const [scoreAdjustment, setScoreAdjustment] = useState(1);

    // Function to add a new player
    const addPlayer = () => {
        const newPlayer = {
            id: players.length + 1,
            name: `Player ${players.length + 1}`,
            score: 0
        };
        setPlayers([...players, newPlayer]);
    };

    // Function to update the name of a player
    const updateName = (id: number, newName: string) => {
        const updatedPlayers = players.map(player => 
            player.id === id ? { ...player, name: newName } : player
        );
        setPlayers(updatedPlayers);
    };

    // Function to update the score of a player
    const updateScore = (id: number, change: number) => {
        const updatedPlayers = players.map(player => 
            player.id === id ? { ...player, score: player.score + change } : player
        );
        setPlayers(updatedPlayers);
    };

    // Function to delete a player
    const deletePlayer = (id: number) => {
        const updatedPlayers = players.filter(player => player.id !== id);
        setPlayers(updatedPlayers);
    };

    return (
        <div className="h-full flex flex-col gap-4 md:gap-12 items-center justify-start w-full">
            <div className="flex flex-col justify-start items-center gap-4 w-full md:w-3/4">
                <h1 className="header h1-bold text-center">Score Tracker</h1>

                {/* Toolbar component with score adjustment functionality */}
                <Toolbar
                    addPlayer={addPlayer}
                    players={players}
                    updateScore={updateScore}
                    scoreAdjustment={scoreAdjustment}
                    setScoreAdjustment={setScoreAdjustment} // Pass setter for scoreAdjustment
                />

                {/* Display player list */}
                <div className="flex flex-wrap gap-4 justify-center">
                    {players.map(player => (
                        <Player
                            key={player.id}
                            player={player}
                            updateName={updateName}
                            updateScore={updateScore}
                            deletePlayer={deletePlayer}
                            scoreAdjustment={scoreAdjustment} // Pass scoreAdjustment to each Player component
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ScoreTracker;