import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="flex flex-col items-center w-full h-full">
            <div className="h-full flex flex-col md:flex-row gap-4 md:gap-12 justify-start md:justify-center w-full md:w-3/4">
                <div className="flex flex-col md:w-1/2 justify-center">
                    <h1 className="header h1-bold text-center">Updates</h1>
                    <div className="flex flex-col text-full items-center justify-center md:justify-start mt-6 w-full h-full">
                        <p className="date">11/24/2024</p>
                        <p className="main-text">Website redesign. New look, new feel. Uses React behind the scenes</p>
                    </div>
                </div>
                <div className="flex flex-col md:w-1/2">
                    <h1 className="header h1-bold justify-center text-center">Resources</h1>
                    <div className="flex flex-col items-center justify-start mt-6 w-full h-full gap-4">
                        <a target="_blank" rel="noopener norefferer" href="https://github.com/coder0987/" className="flex main-link">GitHub</a>
                        <a target="_blank" rel="noopener norefferer" href="https://samuelmach.com" className="flex main-link">SamuelMach.com</a>
                        <a target="_blank" rel="noopener norefferer" href="https://scapularinfo.com" className="flex main-link">ScapularInfo.com</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home