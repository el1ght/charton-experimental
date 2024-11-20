'use client'

import Image from "next/image";
import {Song} from "@/types";
import {BsPauseFill, BsPlayFill} from "react-icons/bs";
import {IoPlaySkipForward} from "react-icons/io5";
import usePlayer from "@/hooks/usePlayerStore";
import {useEffect, useRef, useState} from "react";
import useSound from "use-sound";
import {Progress} from "@/components/Progress";
import {useStore} from "zustand/react";
import usePlayerStore from "@/hooks/usePlayerStore";

interface PlayerContentProps {
    song: Song;
    songUrl: string;
}

const PlayerContent: React.FC<PlayerContentProps> = ({
    song,
    songUrl
}) => {
    const player = usePlayer();
    const {isPlaying, setIsPlaying} = usePlayerStore();
    const title = song.title;
    const author = song.author;

    const [progress, setProgress] = useState<number>(0);
    const [currentTime, setCurrentTime] = useState<number>(0);
    const [duration, setDuration] = useState<number>(0);

    const [volume, setVolume] = useState(0.8);
    const [shuffled, setShuffled] = useState(false);
    const [looped, setLooped] = useState(false);


    const audioRef = useRef<HTMLAudioElement | null>(null);

    const Icon = isPlaying ? BsPauseFill : BsPlayFill;

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
            setProgress(
                (audioRef.current.currentTime / audioRef.current.duration) * 100
            );
        }
    };

    const handleLoadedMetadata = () => {
        if (audioRef.current) {
            setDuration(audioRef.current.duration);
        }
    };

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    };

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

    useEffect(() => {
        if (isPlaying) {
            audioRef.current?.play();
        } else {
            audioRef.current?.pause();
        }
    }, [isPlaying, audioRef]);

    const handlePlayPause = () => {

        setIsPlaying()
    };

    // const [play, { pause, sound }] = useSound(
    //     songUrl,
    //     {
    //         onplay: () => setIsPlaying(true),
    //         onend: () => {
    //             setIsPlaying(false);
    //             onPlayNext();
    //         },
    //         onpause: () => setIsPlaying(false),
    //         format: ['mp3']
    //     }
    // )

    // useEffect(() => {
    //     sound?.play();
    //
    //     return () => {
    //         sound?.unload();
    //     }
    // }, [sound]);
    //
    // const handlePlay = () => {
    //     console.log(audioRef.current?.currentTime)
    //
    //     if (!isPlaying) {
    //         play();
    //     } else {
    //         pause();
    //     }
    // }

    return (
        <div className={'overflow-hidden w-full'}>
            <div className={'relative w-full bg-[#424242]/[.5] shadow backdrop-blur-md p-1 pt-1.5 rounded-b-[30px] border-t-0 overflow-hidden'}>
                <Progress value={progress} />
                <span>{formatTime(currentTime)}</span> <span>{formatTime(duration)}</span>
                {/*<div className={'absolute top-0 left-0 right-0 w-full h-[2px] bg-white'}></div>*/}
                {/*<div className={'absolute top-0 left-0 right-0 w-[100px] h-[2px] bg-neutral-600'}></div>*/}
                    {/*<div onClick={() => {}} className={'shadow-xl bg-[#FFF8F2]/[.4] flex items-center justify-center rounded-full cursor-pointer p-3'}>*/}
                    {/*    <TbRepeat size={16} />*/}
                    {/*</div>*/}
                    <div className={'flex items-center justify-between gap-x-2'}>
                        <div className={'flex gap-x-2 items-center cursor-pointer'}>
                            <Image src={'/images/favBg-1.jpg'} alt={'image'} width={30} height={30} className={'w-[65px] h-[65px] rounded-full'} />
                            <div className={''}>
                                <p className={'text-[15px] truncate text-white'}>{title}</p>
                                <p className={'text-[#ddd] truncate text-[12px] block'}>{author}</p>
                            </div>
                        </div>

                        <div className={'flex flex-row items-center gap-x-1 bg-[#8с8с8с]/[.50] backdrop-blur-md rounded-full p-1'}>
                            <div onClick={handlePlayPause} className={'cursor-pointer flex items-center justify-center bg-[#FFF8F2]/[.4] shadow-xl transition active:bg-white rounded-full p-4'}>
                                <Icon size={24} />
                            </div>
                            <div onClick={onPlayNext} className={'shadow-xl bg-[#FFF8F2]/[.4] flex items-center justify-center transition active:bg-white rounded-full cursor-pointer p-5'}>
                                <IoPlaySkipForward size={16} />
                            </div>
                        </div>
                        <audio
                            ref={audioRef}
                            onTimeUpdate={handleTimeUpdate}
                            onLoadedMetadata={handleLoadedMetadata}
                            src={songUrl}
                        />
                    </div>
                    {/*<div onClick={() => {}} className={'shadow-xl bg-[#FFF8F2]/[.4] flex items-center justify-center rounded-full cursor-pointer p-3'}>*/}
                    {/*    <PiShuffleBold size={16} />*/}
                    {/*</div>*/}
            </div>
        </div>
    );
};

export default PlayerContent;