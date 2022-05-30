import React from 'react';
import { NavLink } from 'react-router-dom';
import PasFoto from '../assets/images/PasFoto.jpg'

export default function Header() {
    return (
        <>
            <div className='greeting w-full h-[calc(100vh-3rem)] relative'>
                <div className="absolute top-0 left-0 bg-[url('assets/images/polygon-scatter.svg')] bg-cover bg-left lg:bg-center w-full h-full"></div>
                {/* <div className="absolute top-0 left-0 bg-[url('assets/images/polygon-scatter-2.svg')] bg-auto bg-left lg:bg-center w-full h-full "></div> */}
                <div className="absolute top-0 left-0 w-full h-full flex justify-center">
                    <div className="group
                        w-48 h-48 md:w-[360px] md:h-[360px] lg:w-[420px] lg:h-[420px] 
                        absolute top-1/2 -mt-24 md:-mt-[180px] lg:-mt-[210px] overflow-hidden  rounded-50 flex justify-center">
                        <div className="w-52 h-16 md:w-[380px] md:h-20 lg:w-[440px] lg:h-24 
                            absolute top-1/2 -mt-8 md:-mt-10 lg:-mt-12 
                            bg-gradient-to-tr from-green-400 to-blue-700 
                            group-hover:h-[440px] group-hover:top-0 group-hover:-mt-32 md:group-hover:-mt-10 lg:group-hover:-mt-2 animate-spin-slow ease-in-out duration-300">
                        </div>
                        <div className="w-[180px] h-[180px] md:w-[346px] md:h-[346px] lg:w-[404px] lg:h-[404px]
                            absolute top-1/2 -mt-[90px] md:-mt-[173px] lg:-mt-[202px] 
                            bg-gradient-to-tr from-blue-900 to-gray-900 rounded-50 flex flex-col justify-center">
                            <div className="w-[170px] h-[170px] md:w-[330px] md:h-[330px] lg:w-[384px] lg:h-[384px] m-auto rounded-50 overflow-hidden group-hover:hidden transition-all ease-in-out duration-500">
                                <img src={PasFoto} alt="" />
                            </div>
                            <div className="w-[170px] h-[170px] md:w-[330px] md:h-[330px] lg:w-[384px] lg:h-[384px] m-auto rounded-50 overflow-hidden bg-gray-900 hidden group-hover:flex flex-col justify-center transition-all ease-in-out duration-500">
                                <p className="text-white text-xs md:text-xl lg:text-2xl font-black font-serif text-center uppercase tracking-wide">
                                    Markus Togi Fedrian<br/>Rivaldi Sinaga
                                </p>
                                <p className="text-white text-[9px] md:text-base lg:text-xl font-thin font-serif text-center mt-2 mb-4 md:mb-6">
                                    Informatics Engineering Student
                                </p>
                                <div className="relative flex justify-center">
                                    <a href="https://id.wikipedia.org/wiki/Iron_Man" target="_blank" className="text-[10px] md:text-lg lg:text-2xl
                                        text-white hover:text-cyan-500
                                        uppercase font-serif font-black tracking-wider hover:tracking-[0.2em] 
                                        py-1 px-2 md:py-2 md:px-5 relative
                                        bg-white hover:bg-cyan-500 hover:drop-shadow-[0_3px_8px_rgba(6,182,212,0.95)] hover:shadow-cyan-500 transition-all ease-in-out duration-300"
                                    >
                                        <span className="peer absolute z-10 inset-0"></span>
                                        <span className="absolute inset-[2px] md:inset-[3px] bg-gray-900"></span>
                                        <span className="relative">ABOUT ME</span>
                                        <i className="absolute top-0 left-3/4 h-[2px] md:h-[3px] w-2 md:w-4 bg-gray-900 skew-x-[325deg] peer-hover:-translate-x-12 md:peer-hover:-translate-x-24 lg:peer-hover:-translate-x-[120px] peer-hover:scale-x-150 transition-all ease-in-out duration-300"></i>
                                        <i className="absolute bottom-0 right-3/4 h-[2px] md:h-[3px] w-2 md:w-4 bg-gray-900 skew-x-[325deg] peer-hover:translate-x-12 md:peer-hover:translate-x-24 lg:peer-hover:translate-x-[120px] peer-hover:scale-x-150 transition-all ease-in-out duration-300"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-12 flex justify-end items-center bg-white sticky z-10 top-0 my-header drop-shadow-md'>
                <NavLink to="/" exact
                    className="text-sm md:text-base text-blue-800 font-bold md:tracking-widest hover:text-white hover:bg-blue-900 transition ease-in-out duration-300 py-1 px-2 md:px-6 rounded-3xl items-center ml-4"
                    activeClassName="bg-cyan-200"
                >
                    ABOUT ME
                </NavLink>
                
                <NavLink to="/projects" exact
                    className="text-sm md:text-base text-blue-800 font-bold md:tracking-widest hover:text-white hover:bg-blue-800 transition ease-in-out duration-300 py-1 px-2 md:px-6 rounded-3xl items-center ml-4"
                    activeClassName="bg-cyan-200"
                >
                    PROJECTS
                </NavLink>
            </div>
        </>
    );
}