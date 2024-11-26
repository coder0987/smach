import { Outlet } from 'react-router-dom';

const GamesRoot = () => {
    return (
        <section className="flex h-full w-full">
            <Outlet />
        </section>
    );
}

export default GamesRoot