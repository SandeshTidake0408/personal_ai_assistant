import React from "react";
import "./App.css";
// import ProfileHeader from "./components/ProfileHeader";
import SidePannel from "./components/SidePannel";

function App() {
    return (
        <div className="bg-m_black w-full h-dvh">
            <div className="flex">
                <SidePannel />
                {/* <ProfileHeader /> */}
            </div>
        </div>
    );
}

export default App;
