// Component to add a new player
const AddPlayer = ({ addPlayer }: { addPlayer: () => void }) => {
    return (
        <div 
            onClick={addPlayer}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg cursor-pointer flex items-center justify-center transition-all duration-200"
        >
            <p className="text-lg font-semibold">Add Player</p>
        </div>
    );
}

export default AddPlayer;