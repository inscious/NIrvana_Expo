import React from "react";

import Hero from "../../components/Hero";
import DisplayGrid from "../../components/DisplayGrid";

import { useNavigate } from "react-router-dom";

const heroImage =
    "http://blazerexhibits.com/wp-content/uploads/2018/08/custom-exhibits-solar-steel-a.jpg";

const Home = () => {
    const navigate = useNavigate();
    const navigateToContact = () => {
        navigate("/contact");
    };
    return (
        <div className="justify-cente flex h-full flex-col items-center">
            <Hero heroImage={heroImage} />
            <div className="flex h-96 max-w-7xl flex-col items-center justify-evenly px-5">
                <h1 className="text-3xl">
                    We are Nirvana Expo Services, a San Diego trade show display
                    company helping brands engage, inform and inspire their
                    audience at trade shows and expositions.
                </h1>
                <button
                    className="bg-theme-blue/80 p-3 text-white duration-150 hover:bg-theme-blue"
                    onClick={navigateToContact}
                >
                    TALK TO A PRO
                </button>
            </div>
            <div className="max-w-7xl">
                <DisplayGrid />
            </div>
        </div>
    );
};

export default Home;
