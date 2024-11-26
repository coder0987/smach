import { Link } from "react-router-dom";

const Games = () => {
    return (
        <div className="h-full flex flex-col gap-4 md:gap-12 items-center justify-start w-full">
            <div className="flex flex-col justify-start items-center gap-4 w-full md:w-3/4">
                <h1 className="header h1-bold text-center">Games</h1>
                <div className="flex flex-row gap-4">
                    <Link className="main-link" to="https://machtarok.com/">Taroky</Link>
                </div>
            </div>
        </div>
    );
}

export default Games