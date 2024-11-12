"use client"

import logo from "@/public/images/logo.svg";
import {usePathname} from "next/navigation";
import Link from "next/link";
import {IoPerson, IoPersonAdd, IoSearch} from "react-icons/io5";
import Image from "next/image";
import {FaHeart} from "react-icons/fa6";
import {PiPlaylistBold} from "react-icons/pi";

const Header = () => {
    const pathname = usePathname();

    return (
        <div className="mb-2 flex flex-top p-1 bg-[#8C8C8C]/[.50] backdrop-blur-md rounded-[40px] justify-between items-center shadow border border-[#D6D6D6]">

                <Link href={'/me'} className={`flex p-6 rounded-full bg-[#fff8f2]/[.5] justify-center items-center transition hover:bg-[#fff]/[100] shadow-md ${pathname === '/me' && 'bg-white'}`}>
                    <IoPerson className={'text-black'} size={20} />
                </Link>
                <Link href={'/playlists'} className={`flex p-6 rounded-full bg-[#fff8f2]/[.5] justify-center items-center transition hover:bg-[#fff]/[100] shadow-md ${pathname === '/playlists' && 'bg-white'}`}>
                    <PiPlaylistBold className={'text-black'} size={20} />
                </Link>

                <Link href={'/'}>
                    <Image src={logo} alt={"Logo"} width={30} height={30} />
                </Link>

                <Link href={'/friends'} className={`flex p-6 rounded-full bg-[#fff8f2]/[.5] justify-center items-center transition hover:bg-[#fff]/[100] shadow-md ${pathname === '/friends' && 'bg-white'}`}>
                    <IoPersonAdd className={'text-black'} size={20} />
                </Link>
                <Link href={'/search'} className={`flex p-6 rounded-full bg-[#fff8f2]/[.5] justify-center items-center transition hover:bg-[#fff]/[100] shadow-md ${pathname === '/search' && 'bg-white'}`}>
                    <IoSearch className={'text-black'} size={20} />
                </Link>

        </div>
    );
};

export default Header;