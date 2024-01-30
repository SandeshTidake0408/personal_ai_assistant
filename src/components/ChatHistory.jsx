import React from "react";
import addChat from "../assets/addChat.png";
function ChatHistory() {
    return (
        <>
            <div className="border-2 rounded-md py-1 px-4  bg-m_black border-border_white flex items-center h-[100%]">
                <div>
                    <img src={addChat} alt="" />
                    
                </div>
            </div>
        </>
    );
}

export default ChatHistory;
