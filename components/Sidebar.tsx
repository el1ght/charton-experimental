'use client';

import {usePathname} from "next/navigation";
import {useMemo} from "react";
import {FaHeart} from "react-icons/fa6";
import {PiPlaylistBold} from "react-icons/pi";
import {IoPersonAdd} from "react-icons/io5";
import SidebarButton from "./SidebarButton";

const Sidebar = () => {
    const pathname = usePathname();

    const routes = useMemo(() => [
        {
            icon: FaHeart,
            active: pathname === ('/liked'),
            href: '/liked'
        },
        {
            icon: PiPlaylistBold,
            active: pathname === ('/playlists'),
            href: '/playlists'
        },
        {
            icon: IoPersonAdd,
            active: pathname === ('/friends'),
            href: '/friends'
        }
    ], [pathname])

    return (
            <div className="absolute right-1 bottom-[95px] p-1 bg-[#424242]/[.55] backdrop-blur-md rounded-full shadow-xl z-10 border border-[#c9c9c9]/[.35]">
                <div className="flex flex-col gap-y-1.5">
                    {
                        routes.map((item) => (
                            <SidebarButton
                                key={item.href}
                                {...item}
                            />
                        ))
                    }
                </div>
            </div>
    )
}

export default Sidebar;