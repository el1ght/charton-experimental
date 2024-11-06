"use client"

import {Song} from "@/types";
import Image from "next/image";
import {FaHeart, FaPlay} from "react-icons/fa6";
import LikeButton from "./LikeButton";

interface SongItemProps {
    data: Song[] | any;
    onClick: (id: string) => void
}

const SongItem: React.FC<SongItemProps> = ({
    data,
    onClick
}) => {
    return (
        // const imagePath = useLoadImage(data);

        <div
            onClick={() => onClick(data.id)}
            className={'p-4 overflow-hidden flex items-center justify-between gap-x-4 rounded-xl cursor-pointer bg-[#D9D9D9]/[.8] hover:bg-[#D9D9D9] transition'}
        >
            <div className={'flex flex-row items-center gap-x-4'}>
                <div>
                    {/*<Image src={'/images/play.svg'} alt={'play'} width={30} height={30}/>*/}
                    <FaPlay className={'ml-1'} />
                </div>
                <div className={'flex flex-row gap-x-2 items-center'}>
                    <Image className={'w-[50px] h-[50px] rounded-2xl'} src={'/images/favBg-4.jpg'} alt={"Image"} width={40} height={40} />
                    <div className={'flex flex-col max-w-[100px]'}>
                        <h3 className={' truncate text-[1rem] font-bold'}>{data.title}</h3>

                        <p className={'text-[0.7rem] truncate text-neutral-600'}>{data.author}</p>
                    </div>
                </div>
            </div>

            <div className={'flex flex-row gap-x-4'}>
                <p className={'text-[0.8rem] leading-6'}>2:55</p>
                <LikeButton />
                {/*songId={song.id}*/}

            </div>


        </div>
    );
};

export default SongItem;