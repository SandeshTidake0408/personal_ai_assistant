import React from "react";
import "./App.css";
import ProfileHeader from "./components/ProfileHeader";
import SidePannel from "./components/SidePannel";
import InputBar from "./components/InputBar";
import ChatWindow from "./components/ChatWindow";
function App() {
    return (
        <div className="bg-m_black w-full h-dvh ">
            <div className="flex">
                <div className="w-[25%]">
                    <SidePannel />
                </div>
                <div className="w-[70%] relative">
                    <ProfileHeader />
                    <ChatWindow />
                    <InputBar />
                </div>
            </div>
        </div>
    );
}

export default App;
