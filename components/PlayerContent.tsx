'use client'

import Image from "next/image";
import {Song} from "@/types";
import {BsPauseFill, BsPlayFill} from "react-icons/bs";
import {IoPlaySkipBack, IoPlaySkipForward} from "react-icons/io5";
import {TfiLoop} from "react-icons/tfi";
import {FaRandom} from "react-icons/fa";
import {PiShuffleBold} from "react-icons/pi";
import {TbRepeat} from "react-icons/tb";

interface PlayerContentProps {
    song: Song;
    songUrl: string;
}

const PlayerContent: React.FC<PlayerContentProps> = ({
    song,
    songUrl
}) => {
    const Icon = true ? BsPauseFill : BsPlayFill;

    return (
        <>
            <div className={'w-full bg-[#424242]/[.55] backdrop-blur-md p-3 rounded-full flex justify-center items-center border border-[#c9c9c9]/[.35] gap-x-2 shadow-xl'}>
                    <div onClick={() => {}} className={'shadow-xl bg-[#FFF8F2]/[.4] flex items-center justify-center rounded-full cursor-pointer p-3'}>
                        <TbRepeat size={16} />
                    </div>
                    <div onClick={() => {}} className={'shadow-xl bg-[#FFF8F2]/[.4] flex items-center justify-center rounded-full cursor-pointer p-3'}>
                        <IoPlaySkipBack size={16} />
                    </div>
                    <div className={'cursor-pointer flex items-center justify-center bg-[#FFF8F2]/[.4] transition shadow-xl hover:bg-white rounded-full p-5'}>
                        <Icon size={20} />
                    </div>
                    <div onClick={() => {}} className={'shadow-xl bg-[#FFF8F2]/[.4] flex items-center justify-center rounded-full cursor-pointer p-3'}>
                        <IoPlaySkipForward size={16} />
                    </div>
                    <div onClick={() => {}} className={'shadow-xl bg-[#FFF8F2]/[.4] flex items-center justify-center rounded-full cursor-pointer p-3'}>
                        <PiShuffleBold size={16} />
                    </div>
            </div>
            {/*<div className={'w-[150px] h-[150px] rounded-full border border-[#c9c9c9]/[.35] z-10 relative p-1'}>*/}
            {/*    <Image src={'/images/favBg-5.jpg'} alt={'image'} width={50} height={50} className={'h-full w-full rounded-full z-1'} />*/}
            {/*</div>*/}

            {/*<div className={'w-[150px] h-[150px] rounded-full border border-[#c9c9c9]/[.35] z-20 p-1 absolute left-0 top-0 bottom-0'}></div>*/}

            {/*<div className={'ml-[-75px] grow bg-[#8C8C8C]/[.5] backdrop-blur-md rounded-player z-10 flex items-center'}>*/}
            {/*    <p className={'text-[#ADADAD] text-[12px] ml-4'}>Playin'</p>*/}
            {/*    <div className={'w-full p-3 flex flex-col gap-y-2 items-center justify-center'}>*/}
            {/*        <div className={'flex items-center gap-x-2 mb-1'}>*/}
            {/*            <div onClick={() => {}} className={'flex items-center justify-center rounded-full cursor-pointer p-3'}>*/}
            {/*                    <IoPlaySkipBack size={16} fill={'white'} />*/}
            {/*            </div>*/}
            {/*            <div onClick={() => {}} className={'flex items-center justify-center rounded-full border border-[#dedede] cursor-pointer p-1'}>*/}
            {/*                <div className={'bg-[#333333]/[.5] rounded-full p-4'}>*/}
            {/*                    <Icon size={16} fill={'white'} />*/}
            {/*                </div>*/}

            {/*            </div>*/}
            {/*            <div onClick={() => {}} className={'flex items-center justify-center rounded-full cursor-pointer p-3'}>*/}
            {/*                    <IoPlaySkipForward size={16} fill={'white'} />*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className={'w-[170px] h-[1px] bg-white'}></div>*/}
            {/*        <p className={'text-[10px] text-[#FFFFFF] truncate max-w-[150px]'}>Lana Del Rey <span className={'text-[#333333]'}>Off To The Races</span></p>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>
    );
};

export default PlayerContent;