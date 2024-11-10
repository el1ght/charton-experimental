"use client"

import logo from "@/public/images/logo.svg";
import {usePathname} from "next/navigation";
import Link from "next/link";
import {IoPerson, IoSearch} from "react-icons/io5";
import Image from "next/image";
import {FaHeart} from "react-icons/fa6";
import {PiPlaylistBold} from "react-icons/pi";

const Header = () => {
    const pathname = usePathname();

    return (
        <div className="flex flex-top p-1 bg-[#424242]/[.55] backdrop-blur-md rounded-[40px] justify-between items-center shadow border border-[#c9c9c9]">

                <Link href={'/me'} className={`flex p-6 rounded-full bg-[#fff8f2]/[.4] justify-center items-center transition hover:bg-[#fff]/[100] shadow-md ${pathname === '/me' && 'bg-white'}`}>
                    <IoPerson className={'text-black'} size={20} />
                </Link>
                <Link href={'/playlists'} className={`flex p-6 rounded-full bg-[#fff8f2]/[.4] justify-center items-center transition hover:bg-[#fff]/[100] shadow-md ${pathname === '/playlists' && 'bg-white'}`}>
                    <PiPlaylistBold className={'text-black'} size={20} />
                </Link>

                <Link href={'/'}>
                    <Image src={logo} alt={"Logo"} width={30} height={30} />
                </Link>

                <Link href={'/liked'} className={`flex p-6 rounded-full bg-[#fff8f2]/[.4] justify-center items-center transition hover:bg-[#fff]/[100] shadow-md ${pathname === '/liked' && 'bg-white'}`}>
                    <FaHeart className={'text-black'} size={20} />
                </Link>
                <Link href={'/search'} className={`flex p-6 rounded-full bg-[#fff8f2]/[.4] justify-center items-center transition hover:bg-[#fff]/[100] shadow-md ${pathname === '/search' && 'bg-white'}`}>
                    <IoSearch className={'text-black'} size={20} />
                </Link>

        </div>
    );
};

export default Header;