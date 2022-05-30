// 78% 22% 27% 73% / 35% 63% 37% 65% 
import React from 'react';
import Header from '../components/Header';
import Logo_ITERA from '../assets/images/Logo_ITERA.jpg'
import Index from '../api/index'
import DataList from '../components/DataList';

export default function Home() {
    const { data, isPending, error } = Index();
    return (
        <>
            <Header/>
            <div className="relative w-full h-screen bg-[url('assets/images/PolyGrid.svg')] overflow-hidden">
                <div className="w-[calc(2.5*100vw)] md:w-[calc(2.25*100vw)] lg:w-[calc(1.75*100vw)] h-screen bg-white overflow-hidden skew-x-[-45deg] lg:skew-x-[-55deg] -translate-x-1/2 shadow-xl shadow-gray-600"></div>
                <div className="absolute z-[2] top-12 right-5 md:right-10 border-l-4 md:border-l-[6px] lg:border-l-8 border-[#324c62] pl-4 md:pl-5">
                    <p className="text-4xl md:text-6xl lg:text-8xl text-[#324c62] font-serif font-thin">PENDIDIKAN</p>
                </div>
                <div className="absolute z-[2] top-32 md:top-36 lg:top-1/2 lg:-mt-[250px] left-1/2 -ml-[104px] md:-ml-[180px]  lg:left-20 lg:-ml-0 border">
                    <img className="w-52 md:w-[360px] lg:w-[400px] h-auto" src={Logo_ITERA} alt=""/>
                </div>
                <div className="absolute z-[2] bottom-40 md:bottom-32 lg:bottom-1/2 lg:-mb-[78px] left-0 lg:left-full lg:-ml-[720px] border p-4 ml-4 md:p-6 md:ml-10">
                    <p className="text-3xl md:text-5xl lg:text-4xl lg:tracking-wide font-serif font-black">Institut Teknologi<br className='lg:hidden'/> Sumatera</p>
                    <p className="text-lg md:text-3xl lg:text-2xl lg:tracking-widest font-light my-4 md:my-6 lg:my-7">Teknik Informatika</p>
                    <p className="text-xl md:text-4xl lg:text-2xl font-light">2018 - sekarang</p>
                </div>
            </div>
            <div className="w-full p-6">
                <p className='text-4xl font-serif font-semibold mb-6'>All Posts</p>
                { error && <p>{ error }</p> }
                { isPending && <p>Memuat Data ...</p> }
                { data && <DataList data={data} /> }
            </div>
        </>
    );
}
