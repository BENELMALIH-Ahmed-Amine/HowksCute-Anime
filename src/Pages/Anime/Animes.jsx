import React from "react";
import AnimeCard from "./AnimeCard";


const Animes = () => {
    return (
        <main className="flex justify-around items-center px-[150px] py-[50px] mt-[70px]">
            <div className=" p-[15px] flex justify-around items-center flex-wrap gap-3">
                <AnimeCard />
            </div>
        </main>
    );
};

export default Animes;
