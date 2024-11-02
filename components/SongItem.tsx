"use client"

import {Song} from "@/types";
import Image from "next/image";

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
            className={'p-3 overflow-hidden flex items-center gap-x-4 rounded-xl cursor-pointer bg-[#dedede]/[.7] hover:bg-[#dedede] transition'}
        >
            <Image src={'/images/logo.svg'} alt={"Image"} width={40} height={10} />
            <div className={'flex flex-col '}>
                <h3 className={'min-w-[100px] max-w-[150px] truncate text-md font-semibold leading-5'}>{data.title}</h3>

                <p className={'min-w-[100px] max-w-[150px] text-sm font-thin truncate leading-5'}>{data.author}</p>
            </div>

        </div>
    );
};

export default SongItem;