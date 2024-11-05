"use client"

import {Song} from "@/types";
import Image from "next/image";
import {FiHeart} from "react-icons/fi";
import {FaPlay} from "react-icons/fa6";

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
                        <h3 className={' truncate text-[0.9rem] font-bold'}>{data.title}</h3>

                        <p className={'text-[0.6rem] truncate text-neutral-600'}>{data.author}</p>
                    </div>
                </div>
            </div>

            <div className={'flex flex-row gap-x-3'}>
                <p className={'text-[0.6rem] leading-5'}>2:55</p>
                <FiHeart size={18} />
            </div>


        </div>
    );
};

export default SongItem;