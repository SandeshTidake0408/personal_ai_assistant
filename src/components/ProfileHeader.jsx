import React from "react";
import AiProfile from "../assets/AiProfile.png";
import ayushProfile from "../assets/ayushProfile.png";
import profileMore from "../assets/profileMore.svg";
const ProfileHeader = () => {
    return (
        <div className=" text-white p-5">
            <div className="p-1 flex flex-row justify-between items-center">
                <div className="flex flex-row gap-3  items-center">
                    <img src={AiProfile} alt="add" className="w-7" />
                    <p className="text-sm">Ai Assistant</p>
                </div>
                <div className="flex flex-row gap-3 items-center px-4 py-[6px] bg-[#171717] border-2 border-border_white rounded-md">
                    <div className=" w-8 h-8 rounded-full">
                        <img src={ayushProfile} alt="" />
                    </div>
                    <p className="text-f_text  text-sm">Ayush</p>
                    <div className=" cursor-pointer">
                        <img src={profileMore} alt="" className="w-2" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileHeader;
