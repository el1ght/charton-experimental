'use client'

import Image from "next/image";
import {Song} from "@/types";
import {BsPauseFill, BsPlayFill} from "react-icons/bs";
import {IoPlaySkipForward} from "react-icons/io5";
import usePlayer from "@/hooks/usePlayer";
import {useEffect, useRef, useState} from "react";
import useSound from "use-sound";
import Progress from "./Progress";

interface PlayerContentProps {
    song: Song;
    songUrl: string;
}

const PlayerContent: React.FC<PlayerContentProps> = ({
    song,
    songUrl
}) => {
    const player = usePlayer();
    const [isPlaying, setIsPlaying] = useState(false);
    const Icon = isPlaying ? BsPauseFill : BsPlayFill;

    const onPlayNext = () => {
        if (player.ids.length === 0) {
            return;
        }

        const currentIndex = player.ids.findIndex((id) => id === player.activeId);
        const nextSong = player.ids[currentIndex + 1];

        if (!nextSong) {
            return player.setId(player.ids[0])
        }

        player.setId(nextSong)
    }

    const [play, { pause, sound }] = useSound(
        songUrl,
        {
            onplay: () => setIsPlaying(true),
            onend: () => {
                setIsPlaying(false);
                onPlayNext();
            },
            onpause: () => setIsPlaying(false),
            format: ['mp3']
        }
    )

    useEffect(() => {
        sound?.play();

        return () => {
            sound?.unload();
        }
    }, [sound]);

    const handlePlay = () => {

        if (!isPlaying) {
            play();
        } else {
            pause();
        }
    }

    return (
        <div className={'overflow-hidden w-full'}>
            <div className={'relative w-full bg-[#424242]/[.5] shadow backdrop-blur-md p-1 pt-1.5 rounded-b-[30px] border-t-0 overflow-hidden'}>
                <div className={'absolute top-0 left-0 right-0 w-full h-[2px] bg-white'}></div>
                <div className={'absolute top-0 left-0 right-0 w-[100px] h-[2px] bg-neutral-600'}></div>

                {/*<Progress value={progress} />*/}

                    {/*<div onClick={() => {}} className={'shadow-xl bg-[#FFF8F2]/[.4] flex items-center justify-center rounded-full cursor-pointer p-3'}>*/}
                    {/*    <TbRepeat size={16} />*/}
                    {/*</div>*/}
                    <div className={'flex items-center justify-between gap-x-2'}>
                        <div className={'flex gap-x-2 items-center'}>
                            <Image src={'/images/favBg-1.jpg'} alt={'image'} width={30} height={30} className={'w-[65px] h-[65px] rounded-full'} />
                            <div className={''}>
                                <p className={'text-[15px] truncate text-white text-center'}>Off to the Races</p>
                                <p className={'text-[#ddd] truncate text-[12px] block'}>Lana Del Rey</p>
                            </div>
                        </div>

                        <div className={'flex flex-row items-center gap-x-1 bg-[#8с8с8с]/[.50] backdrop-blur-md rounded-full p-1'}>
                            <div onClick={handlePlay} className={'cursor-pointer flex items-center justify-center bg-[#FFF8F2]/[.4] shadow-xl transition active:bg-white rounded-full p-4'}>
                                <Icon size={24} />
                            </div>
                            <div onClick={onPlayNext} className={'shadow-xl bg-[#FFF8F2]/[.4] flex items-center justify-center transition active:bg-white rounded-full cursor-pointer p-5'}>
                                <IoPlaySkipForward size={16} />
                            </div>
                        </div>
                    </div>
                    {/*<div onClick={() => {}} className={'shadow-xl bg-[#FFF8F2]/[.4] flex items-center justify-center rounded-full cursor-pointer p-3'}>*/}
                    {/*    <PiShuffleBold size={16} />*/}
                    {/*</div>*/}
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
        </div>
    );
};

export default PlayerContent;