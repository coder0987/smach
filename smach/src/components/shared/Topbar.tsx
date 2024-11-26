import { topbarLinks } from '@/constants';
import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom';

const Topbar = () => {

    const { pathname } = useLocation();

    return (
        <section className='topbar'>
            <div className='flex flex-row gap-3 py-4 px-3 justify-center'>
                <ul className='flex flex-row justify-around md:justify-evenly gap-3 ml-2 w-full md:w-1/2'> {/*flex-row gap-3 ml-2 hidden md:flex*/}
                    {topbarLinks.map((link: { label: string; route: string }) => {
                        const isActive = pathname === link.route;
                        return (
                            <NavLink
                                    to={link.route}
                                    key={link.label}
                                >
                                <li
                                    
                                    className={`flex text-center items-center justify-center rounded-[16px] py-2 p-4 text-sm text-gray-300 hover:text-white group ${isActive && "underline bg-slate-300/25"}`}
                                >
                                    
                                    {link.label}
                                    

                                </li>
                            </NavLink>
                        );
                    })}
                </ul>
            </div>
        </section>
    )
}

export default Topbar