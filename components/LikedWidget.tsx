'use client'

import Link from "next/link";
import {FaPlay} from "react-icons/fa6";

interface ListItemProps {
    name: string;
    href: string;
}

const LikedWidget: React.FC<ListItemProps> = (({
    name,
    href,
}) => {

    return (
        <Link href={href} className={'row-span-2 col-span-5'}>
            <div className={"rounded-3xl relative group flex items-center h-full bg-cover bg-center overflow-hidden hover:saturate-150 transition bg-[url('../public/images/favBg-2.jpg')]"}>
                <div className={'relative h-full w-full bg-black/[.25] rounded-r-xl'}>
                    <p className={'truncate text-white text-left m-4 mb-0 text-lg font-semibold'}>{name}</p>
                    <p className={'truncate text-white text-left ml-4 text-[0.7rem] max-w-[150px]'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                    <p className={'text-white text-right text-3xl absolute right-2 bottom-0.5'}>33</p>
                </div>
                <div className={'mx-5 p-2 bg-[black]/[.25] rounded-full transition flex items-center justify-center group-hover:scale-110'}>
                    <FaPlay size={20} fill={'white'} />
                </div>
            </div>
        </Link>
    );
});

export default LikedWidget;