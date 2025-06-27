import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Mycontext } from '../../Context';

const AnimeCard = () => {
    const { Anime } = useContext(Mycontext)
    console.log(Anime);

    return (
        <>
            {
                Anime.map((a) => (
                    <article key={a.id} className="bg-[#936835] w-[370px] flex flex-col border-10 border-[#50341f]">
                        <section className='w-full h-96 bg-[#50341f] rounded-b-[-40px]'><img className="w-full h-[97%] rounded-2xl" src={a.images.jpg.image_url} alt="img" /></section>

                        <section className='w-[100%] pt-2.5 pb-2.5 pl-3 flex text-xl text-[#6b5132] font-bold'>
                            <div className="w-40 bg-[#f1dfb7] flex flex-col p-2 py-3 pl-3.5">
                                <div className="flex">
                                    <p>(...): {a.flor}</p>
                                    {/* <p className='text-[10px] pt-0.5 pl-0.5'>th</p> */}
                                </div>
                                <p>(...): {a.space}</p>

                                {/* <Link to={`${a.id}`}> */}
                                    <button className='bg-[#936835] w-auto border-2 border-black mt-5 ml-2 py-1 px-4 text-[#f1dfb7] hover:bg-[#a27845] hover:text-[#f2e6cb]' type='submit'>Details</button>
                                {/* </Link> */}
                            </div>

                            <div className="w-45 bg-[#f1dfb7] flex flex-col p-2 py-3 gap-1.5">
                                <p className='flex flex-col items-center'>(...): <span>{a.rooms}</span></p>
                                <p className='flex flex-col items-center'>(...): <span>{a.price}</span></p>
                            </div>
                        </section>
                    </article>
                ))
            }
        </>
    );
};

export default AnimeCard;