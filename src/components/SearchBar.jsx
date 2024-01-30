import React from "react";
import search from "../assets/search.png";
function Serachbar() {
    return (
        <>
            <div className="relative border-2 rounded-md py-1 px-4  bg-m_black border-border_white flex items-center">
                <input
                    type="text"
                    placeholder="Search..."
                    name=""
                    id=""
                    className="text-f_text pr-5 bg-m_black w-full outline-none"
                />
                <img
                    src={search}
                    alt=""
                    className="w-4 absolute right-4 cursor-pointer"
                />
            </div>
        </>
    );
}

export default Serachbar;
