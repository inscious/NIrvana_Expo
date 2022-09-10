import React from "react";

import { Link } from "react-router-dom";

import navData from "../../assets/data/navData";

const Navbar = () => {
    return (
        <div className="fixed z-50 h-32 w-full bg-[#101010]/75 backdrop-blur-md duration-150 md:h-24 lg:h-16">
            <div className="relative mx-auto flex h-full max-w-7xl items-center justify-evenly">
                {/* LOGO */}
                <>
                    <div className="absolute h-full left-auto lg:left-5">
                        <Link className="flex h-full items-center" to="/">
                            <svg
                                id="Layer_1"
                                data-name="Layer 1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 556.33 99.42"
                                className="item-center flex h-10 fill-white duration-150 hover:fill-theme-yellow"
                            >
                                <path
                                    className="cls-1"
                                    d="M110.14,14.52c.2,4.09-4.72,4.92-6.79,7.58-1.88-1.02-17.43,60.78-18.43,62.45-2.14,12.45-13.75,18.36-23.45,11.04-6.16-4.4-22.04-44.1-26.2-51.02l-10.97,38.15c-1.95,4.5,2.14,7.5,3.27,10.98,.29,7.33-17.62,3.56-22.21,4.44-7.07,.43-6.54-6.19-1.83-8.36,7.21-.81,19.26-60.49,22.08-65.72-2.33-4.39-6.99-13.03,1.83-12.94,0,0,19.34,0,19.34,0,6.48,.12,7.74,2.86,10.98,8.62,0,0,19.08,38.29,19.08,38.29,.29-1.55,10.1-33.75,9.41-34.5,.55-3.64-4.53-5.81-3.53-9.15,1.21-3.29,4.07-3.08,7.84-3.27,3.44,.78,19.97-2.44,19.6,3.4Z"
                                />
                                <path
                                    className="cls-1"
                                    d="M143.46,31.9c10.32,6.25-8.57,43.91-9.41,52.66-2.26,6.27,3.48,6.27,3.53,10.32-2.34,6.39-32.88,2.07-38.42,3.27-3.31-.04-6.67-.7-6.01-4.05,2.28-3.74,7.5-4.28,8.23-9.8,0,0,11.37-37.76,11.37-37.76,1.82-3.79-2.12-5.56-4.05-7.84-1.5-9.8,29.34-12.2,34.76-6.79Zm6.14-28.42c11.36,11.14-7.49,30.12-18.75,18.81-11.4-11.23,7.33-30.11,18.75-18.81Z"
                                />
                                <path
                                    className="cls-1"
                                    d="M221.66,33.46c12.08,11.78-2.37,34.59-17.38,24.3-3.76-1.89-5.33-13.9-10.84-9.54-2.16,3.03-11.37,34.38-12.09,38.28-.27,3.36,4.01,4.71,5.75,6.66,1.69,4.16-2.94,5.08-7.06,4.97-3.08-1.26-42.75,3.51-39.46-4.05,2.29-3.74,7.49-4.28,8.23-9.8,0,0,11.63-37.76,11.63-37.76,.17-.43,.26-1.05,.26-1.83,.47-3.71-5.53-4.42-4.44-8.1,5.44-8.25,34.77-12.78,37.24,1.7,5.95-9.9,20.26-12.57,28.16-4.83Z"
                                />
                                <path
                                    className="cls-1"
                                    d="M296.72,33.99c17.8,26.65-21.08,65.55-48.21,65.33-15.46,.69-29.73-8.71-24.04-24.7,0,0,8.23-28.09,8.23-28.09,.17-.7,.26-1.22,.26-1.57,.34-2.94-4.41-4.73-4.44-7.19,3.45-10.72,24.84-11.01,32.08-4.51,12.52,10.08-3.86,35.42-5.03,47.5,5.45,12.38,23.4-9.71,24.95-17.64-19.8-14.07-5.4-47.08,16.2-29.14Z"
                                />
                                <path
                                    className="cls-1"
                                    d="M370.41,34.57c16.81,9.51,4.99,31.92,1.96,46.06,.38,4.63,4.59,.52,5.88-.65,3.29,2.09,1.13,7.17-1.11,10.19-7.92,10.9-30.51,12.06-36.13-1.44-7.23,9.37-22.3,12.69-32.4,7.12-13.13-6.74-11.29-26.62,.19-33.52,10.66-7.04,26.01-4.85,37.96-1.18,2.8-7.64,10.88-23.82-3.14-23.39,7.1,16.95-25.43,23.11-26.92,6.4,2.09-19.74,41.01-17.5,53.7-9.6Zm-37.3,36.85c-7.78,11.37,6.34,18.17,10.91-2.42-3.54-.59-8.46-1.01-10.91,2.42Z"
                                />
                                <path
                                    className="cls-1"
                                    d="M466.06,80.11c-1.51,3.01,2.2,4.93,4.12,2.16,.74-.91,1.24-1.37,1.5-1.37,3.14,2.05,.93,7.4-1.04,10.26-8.67,11.98-38.25,11.88-38.68-6.47-1.61-7.69,13.26-30.21,9.08-35.08-5.14-3.56-10.64,3.38-11.96,8.3,0,0-8.1,26.66-8.1,26.66-1.13,2.86-.45,5.47,1.96,7.32,10.08,10.37-33.84,5.06-36.98,6.27-3.39-.04-6.45-.71-6.01-4.05,.65-2.27,4.61-3.32,6.01-5.23,2.14-1.03,12.57-39.62,13.85-42.33,.86-2.39-.15-4.42-2.22-6.01-12.44-9.18,39.1-21.36,35.54,2.09,7.91-12.78,25.92-18.65,37.31-8.75,11.85,10.58-1.94,34.11-4.38,46.25Z"
                                />
                                <path
                                    className="cls-1"
                                    d="M546.8,34.57c16.81,9.51,4.99,31.92,1.96,46.06,.38,4.63,4.59,.52,5.88-.65,3.29,2.09,1.13,7.17-1.11,10.19-7.92,10.9-30.51,12.06-36.13-1.44-7.23,9.37-22.3,12.69-32.4,7.12-13.13-6.74-11.29-26.62,.19-33.52,10.66-7.04,26.01-4.85,37.96-1.18,2.8-7.64,10.88-23.82-3.14-23.39,7.1,16.95-25.43,23.11-26.92,6.4,2.09-19.74,41.01-17.5,53.7-9.6Zm-37.3,36.85c-7.78,11.37,6.34,18.17,10.91-2.42-3.54-.59-8.46-1.01-10.91,2.42Z"
                                />
                            </svg>
                        </Link>
                    </div>
                    <>
                        <ul className="absolute right-0 hidden h-full items-center lg:flex">
                            {navData.map((link) => {
                                return (
                                    <li className="hover:bg-slate-10 group flex h-full w-full items-center border-b-4 border-[#101010]/0 duration-150 hover:border-theme-yellow">
                                        <Link
                                            className="flex h-full w-full items-center px-5 text-white duration-150 group-hover:text-theme-yellow"
                                            to={link.url}
                                        >
                                            {link.title}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </>
                </>
            </div>
        </div>
    );
};

export default Navbar;