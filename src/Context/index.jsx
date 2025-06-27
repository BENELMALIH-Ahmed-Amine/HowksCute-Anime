import axios from "axios";
import { createContext, useEffect, useState } from "react";
// import { Data } from "../Constents";

export const Mycontext = createContext()

export const MyProvider = ({ children }) => {
    // Prameters:

    // Years:
    const [Years, setYearsD] = useState([])

    // Seasons:
    const [Seasons, setSeasonsD] = useState([])


    useEffect(() => {
        const GetParams = async () => {
            let API = await axios.get('https://api.jikan.moe/v4/seasons')
            let API_Data = await API.data.data


            // Years:
            let AllYears = []
            for (let i = 0; i < API_Data.length; i++) {
                AllYears.push(API_Data[i].year)

            }
            // console.log(AllYears);
            setYearsD(AllYears);

            // Seasons:
            let AllSeasons = []
            for (let i = 0; i < API_Data.length; i++) {
                AllSeasons.push(API_Data[i].seasons)
                // console.log(AllSeasons);
            }
            // console.log(AllSeasons);
            setSeasonsD(AllSeasons);
        }

        GetParams()
    }, [])


    // Animes:
    const [Y, setY] = useState("")
    const [S, setS] = useState("")

    const [Anime, setAnime] = useState([])

    useEffect(() => {
        const GetAnimes = async () => {
            // let AnimesD = await axios.get(`https://api.jikan.moe/v4/seasons/${Y}/${S}`)
            let AnimesD = await axios.get(`https://api.jikan.moe/v4/seasons/2022/fall`)
            let AnimeData = await AnimesD.data.data

            console.log(AnimeData);
            setAnime(AnimeData);
        }

        GetAnimes()
    }, [])



    const all = { Years, setYearsD, Seasons, setSeasonsD, Anime, setAnime, Y, setY, S, setS, }

    return <Mycontext.Provider value={all}>{children}</Mycontext.Provider>
}