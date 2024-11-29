"use client"

import logo from "@/public/images/logo-alternative.svg";
import {usePathname} from "next/navigation";
import Link from "next/link";
import {IoPerson, IoPersonAdd, IoSearch} from "react-icons/io5";
import Image from "next/image";
import {FaHeart} from "react-icons/fa6";
import {PiPlaylistBold} from "react-icons/pi";

const NavigationBar = () => {
    const pathname = usePathname();

    return (
        <div className="bottom-2 right-0 left-0 absolute flex flex-top p-1 section-bg-color section-separator-color backdrop-blur-md rounded-full justify-between items-center shadow border border-[#D6D6D6]">

                <Link href={'/search'} className={`flex p-6 rounded-full subtitle-text-color justify-center items-center transition hover:button-color shadow-md ${pathname === '/search' && 'bg-white'}`}>
                    <IoSearch className={'text-black'} size={20} />
                </Link>
                <Link href={'/friends'} className={`flex p-6 rounded-full subtitle-text-color justify-center items-center transition hover:button-color shadow-md ${pathname === '/friends' && 'bg-white'}`}>
                    <IoPersonAdd className={'text-black'} size={20} />
                </Link>

                <Link href={'/'}>
                    <Image src={logo} alt={"Logo"} width={40} height={40} />
                </Link>

                <Link href={'/playlists'} className={`flex p-6 rounded-full subtitle-text-color justify-center items-center transition hover:button-color shadow-md ${pathname === '/playlists' && 'bg-white'}`}>
                    <PiPlaylistBold className={'text-black'} size={20} />
                </Link>
                <Link href={'/me'} className={`flex p-6 rounded-full subtitle-text-color justify-center items-center transition hover:button-color shadow-md ${pathname === '/me' && 'bg-white'}`}>
                    <IoPerson className={'text-black'} size={20} />
                </Link>

        </div>
    );
};

export default NavigationBar;