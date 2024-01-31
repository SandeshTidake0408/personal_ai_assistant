import React from "react";
import ResponseMessage from "./ResponseMessage";
import RequestMessage from "./RequestMessage";
function ChatWindow() {
    return (
        <div className=" py-4 px-8 w-full flex flex-col max-h-[75%] overflow-y-scroll scrollbar scrollbar-thumb-gray-400 scrollbar-black scrollbar-w-1 scrollbar-thumb-rounded-full ">
            <ResponseMessage />
            <RequestMessage />
        </div>
    );
}

export default ChatWindow;
