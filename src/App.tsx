import React from "react";

// imports
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Exhibits from "./pages/Exhibits";
import Contact from "./pages/Contact";

import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/exhibits" element={<Exhibits />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    );
}

export default App;
