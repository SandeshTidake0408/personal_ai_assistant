import React from "react";
import send from "../assets/send.png";
import imageUplaod from "../assets/imageUpload.png";
import mic from "../assets/mic.png";
function InputBar() {
    return (
        <>
            <div className="w-full absolute bottom-0 right-0 px-6 my-5 flex flex-row justify-between items-center ">
                <div className="w-8 cursor-pointer">
                    <img src={imageUplaod} alt="" />
                </div>
                <div className="relative border-2 rounded-md py-2 px-4  bg-m_black border-border_white flex items-center w-[90%]">
                    <input
                        type="text"
                        placeholder="What do you want to know ......"
                        name=""
                        id=""
                        className="text-f_text pr-5 bg-m_black w-full outline-none text-sm"
                    />
                    <div className="cursor-pointer  absolute right-4 pl-2">
                        <img src={send} alt="" className="w-5" />
                    </div>
                </div>
                <div className="w-5 cursor-pointer">
                    <img src={mic} alt="" />
                </div>
            </div>
        </>
    );
}

export default InputBar;
