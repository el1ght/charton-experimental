'use client'

import Image from "next/image";
import {FaPlay} from "react-icons/fa6";
import Link from "next/link";
import {FaPlus} from "react-icons/fa";
import {backButton, init} from "@telegram-apps/sdk-react";


// export const revalidate = 0;

const Liked = () => {
    // init()
    //
    // backButton.mount()
    // backButton.show()
    //
    // const off = backButton.onClick(() => {
    //     off();
    //     window.history.back();
    //     backButton.hide()
    //     backButton.unmount();
    // })

    return (
        <div className={'px-3 py-5 box flex flex-col gap-y-0.5 text-color'}>
            <div className={'flex justify-center items-center flex-col gap-y-1'}>
                <div className={'p-1.5 border-2 border-[#ddd] bg-[#424242]/[.3] rounded-3xl'}>
                    <Image className={'w-[100px] h-[100px] rounded-3xl'} src={'/images/favBg-4.jpg'} alt={'image'} width={50} height={50} />
                </div>

                <h2 className={'text-center text-[1.2rem] font-bold mb-4'}>Playlists</h2>
            </div>

            <div className={'relative cursor-pointer p-6 rounded-[20px] button-color font-bold flex items-center justify-center gap-x-2'}>
                <p>New Playlist</p>
                <FaPlus size={20} className={'text-color'} />
            </div>
            <Link href={'/liked'} className={'w-full p-4 pr-6 section-bg-color transition rounded-[20px] flex justify-between items-center'}>
               <div className={'flex gap-x-4'}>
                   <Image src={'/images/favBg.jpg'} alt={'image'} width={30} height={30} className={'w-[60px] h-[60px] rounded-2xl'} />
                   <div className={'flex flex-col justify-center'}>
                       <p className={'font-semibold leading-4 text-color'}>Favourites</p>
                       <p className={'text-[12px] subtitle-text-color'}>52 Tracks</p>
                   </div>
               </div>
                <FaPlay size={20} className={'text-color'} />
            </Link>

        </div>
    );
};

export default Liked;