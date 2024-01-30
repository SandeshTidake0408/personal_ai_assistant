import React from "react";
import AiProfile from "../assets/AiProfile.png";

const ProfileHeader = () => {
    return (
        <div className="w-[70%] text-white ">
            <div className="p-1 flex flex-row justify-between items-center">
                <h3>Chat name</h3>
                <div className="flex flex-row gap-3  items-center">
                    <img src={AiProfile} alt="add" />
                    <h3>Ai Assistant</h3>
                </div>
                <div>Profile name</div>
            </div>
        </div>
    );
};

export default ProfileHeader;
