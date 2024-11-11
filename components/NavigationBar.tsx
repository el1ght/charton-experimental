"use client"

import logo from "@/public/images/logo.svg";
import {usePathname} from "next/navigation";
import Link from "next/link";
import {IoPerson, IoPersonAdd, IoSearch} from "react-icons/io5";
import Image from "next/image";
import {PiPlaylistBold} from "react-icons/pi";
import {useTab} from "@/contexts/TabContext";
import {TabType} from "@/utils/types";

const NavigationBar = () => {
    const {activeTab, setActiveTab} = useTab()
    const pathname = usePathname();

    const tabs: {id: TabType; Icon: React.FC<{ className?: string }
    >}[] = [
        { id: 'me', Icon: IoPerson },
        { id: 'playlists', Icon: PiPlaylistBold },
        { id: 'home', Icon: logo },
        { id: 'friends', Icon: IoPersonAdd },
        { id: 'search', Icon: IoSearch },
    ]

    return (
        <div className="mb-2 flex flex-top p-1 section-bg backdrop-blur-md rounded-[40px] justify-between items-center shadow border border-[#D6D6D6]">
                <Link href={'/me'} className={`button-main flex p-6 rounded-full  justify-center items-center transition shadow-md ${pathname === '/me' && 'button-color'}`}>
                    <IoPerson className={'button-main-text'} size={20} />
                </Link>
                <Link href={'/playlists'} className={`button-main flex p-6 rounded-full  justify-center items-center transition shadow-md ${pathname === '/playlists' && 'button-color'}`}>
                    <PiPlaylistBold className={'button-main-text'} size={20} />
                </Link>

                <Link href={'/'}>
                    <Image id={'logo'} className={'text-white'} src={logo} alt={"Logo"} width={30} height={30} />
                </Link>

                <Link href={'/friends'} className={`button-main flex p-6 rounded-full  justify-center items-center transition shadow-md ${pathname === '/friends' && 'button-color'}`}>
                    <IoPersonAdd className={'button-main-text'} size={20} />
                </Link>
                <Link href={'/search'} className={`button-main flex p-6 rounded-full  justify-center items-center transition shadow-md ${pathname === '/search' && 'button-color'}`}>
                    <IoSearch className={'button-main-text'} size={20} />
                </Link>
            {/*{*/}
            {/*    tabs.map((tab) => {*/}
            {/*        const isActive = activeTab === tab.id*/}
            {/*        return (*/}
            {/*            <Link*/}
            {/*                href={`/${tab.id}`}*/}
            {/*                key={tab.id}*/}
            {/*                onClick={() => setActiveTab(tab.id)}*/}
            {/*                className={`flex p-6 rounded-full bg-[#fff8f2]/[.5] justify-center items-center transition hover:bg-[#fff]/[100] shadow-md ${isActive && 'bg-white'}`}*/}
            {/*            >*/}
            {/*            </Link>*/}
            {/*        )*/}
            {/*    })*/}
            {/*}*/}


        </div>
    );
};

export default NavigationBar;