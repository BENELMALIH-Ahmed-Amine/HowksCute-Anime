import React, { useContext } from 'react';
import spring from '../assets/spring.png'
import winter from '../assets/winter.png'
import summer from '../assets/summer.png'
import fall from '../assets/fall.png'
import { Mycontext } from '../Context';
// import { Link } from 'react-router-dom';

const Home = () => {
    const { Seasons, Years, setY, setS } = useContext(Mycontext)
    // console.log(Seasons);

    // let [visibility, setVisibility] = useState(false)


    return (
        <header className='w-full h-[99vh] bg-amber-200 grid grid-cols-2 grid-rows-2'>
            <section style={{ backgroundImage: `url(${spring})` }} className='w-full bg-cover h-full bg-no-repeat'>
                <div onClick={setS("spring")} className='w-full h-full hover:bg-[#ffffff30] grid place-content-center relative hover:in-hover:*:bg-none hover:in-hover:*:text-black'>
                    <p className='text-4xl text-white font-black py-[12px] px-7 rounded-4xl bg-gray-500/80 absolute transform origin-center top-[42.3%] left-[40%]'>Spring</p>
                    <div className={`w-full h-full p-3 flex flex-wrap gap-2 justify-center`}>
                        {
                            Years.map((y) =>
                                <button onClick={setY(y)} className='w-fit px-3 py-1 border-[1.9px] border-orange-600 rounded-2xl text-white font-bold hover:bg-orange-600'>{y}</button >
                            )
                        }
                    </div>
                </div>
            </section>

            <section style={{ backgroundImage: `url(${winter})` }} className='w-full bg-cover h-full bg-no-repeat'>
                <div onClick={setS("Winter")} className='w-full h-full hover:bg-[#ffffff30] grid place-content-center relative hover:in-hover:*:bg-none hover:in-hover:*:text-black'>
                    <p className='text-4xl text-white font-black py-[12px] px-7 rounded-4xl bg-gray-500/80 absolute transform origin-center top-[42.3%] left-[40%]'>Winter</p>
                    <div className={`w-full h-full p-3 flex flex-wrap gap-2 justify-center`}>
                        {
                            Years.map((y) =>
                                <button onClick={setY(y)} className='w-fit px-3 py-1 border-[1.9px] border-orange-600 rounded-2xl text-white font-bold hover:bg-orange-600'>{y}</button >
                            )
                        }
                        
                    </div>
                </div>
            </section>

            <section style={{ backgroundImage: `url(${summer})` }} className='w-full bg-cover h-full bg-no-repeat'>
                <div onClick={setS("Summer")} className='w-full h-full hover:bg-[#ffffff30] grid place-content-center relative hover:in-hover:*:bg-none hover:in-hover:*:text-black'>
                    <p className='text-4xl text-white font-black py-[12px] px-7 rounded-4xl bg-gray-500/80 absolute transform origin-center top-[42.3%] left-[40%]'>Summer</p>
                    <div className={`w-full h-full p-3 flex flex-wrap gap-2 justify-center`}>
                        {
                            Years.map((y) =>
                                <button onClick={setY(y)} className='w-fit px-3 py-1 border-[1.9px] border-orange-600 rounded-2xl text-white font-bold hover:bg-orange-600'>{y}</button >
                            )
                        }
                    </div>
                </div>
            </section>

            <section style={{ backgroundImage: `url(${fall})` }} className='w-full bg-cover h-full bg-no-repeat'>
                <div onClick={setS("Fall")} className='w-full h-full hover:bg-[#ffffff30] grid place-content-center relative hover:in-hover:*:bg-none hover:in-hover:*:text-black'>
                    <p className='text-4xl text-white font-black py-[12px] px-7 rounded-4xl bg-gray-500/80 absolute transform origin-center top-[42.3%] left-[40%]'>Fall</p>
                    <div className={`w-full h-full p-3 flex flex-wrap gap-2 justify-center`}>
                        {
                            Years.map((y) =>
                                <button onClick={setY(y)} className='w-fit px-3 py-1 border-[1.9px] border-orange-600 rounded-2xl text-white font-bold hover:bg-orange-600'>{y}</button >
                            )
                        }
                    </div>
                </div>
            </section>
        </header>
    );
};

export default Home;