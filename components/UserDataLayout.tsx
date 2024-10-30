'use client'

import {useState, useEffect} from "react";
import LikedWidget from "@/components/LikedWidget";
import {FaPlay} from "react-icons/fa6";
import {useRouter} from "next/router";

interface UserData {
    id: number;
    first_name: string;
    last_name?: string;
    username?: string;
    language_code: string;
    is_premium?: boolean;
    photo_url?: string;
}

const UserDataLayout = ({
                  }) => {
    const [telegramId, setTelegramId] = useState<string | null>(null)
    const [userData, setUserData] = useState<UserData | null>(null)
    const [hash, setHash] = useState<string | null>(null);
    const [WebApp, setWebApp] = useState<any>(null);

    const loadWebApp = async () => {
        return (await import('@twa-dev/sdk')).default
    };

    useEffect(() => {
        loadWebApp().then(x => setWebApp(x));
    }, []);

    useEffect(() => {
        if (!WebApp) return;

        WebApp.ready();
        WebApp.expand();

        const initDataString = WebApp.initData;

        if (initDataString) {
            const urlParams = new URLSearchParams(initDataString);
            try {
                const user = JSON.parse(urlParams.get('user') || '{}');
                if (user.id) {
                    setTelegramId(user.id.toString());
                }
            } catch (error) {
                console.error('Error parsing user data:', error);
            }
        }

        if (WebApp.initDataUnsafe.user as UserData) {
            setUserData(WebApp.initDataUnsafe.user as UserData)
            setHash(WebApp.initDataUnsafe.hash)
        }
    }, [WebApp]);

    //Check if from Telegram

    return (
        userData ? (
            <div className={'p-6 box'}>
                <div className="mb-4">
                    <h1 className="text-black text-xl font-semibold">
                        Welcome Home, {userData.first_name}
                    </h1>
                    <h2 className="text-black text-lg">
                        See what we have for you
                    </h2>
                </div>

                <div className="grid grid-rows-8 grid-cols-5 gap-2 h-[100vh] box">
                    <LikedWidget name={'Test'} href={'/liked'} />
                    <div className={'relative row-span-2 col-span-3 rounded-3xl overflow-hidden'}>
                        <div className={"relative group flex items-center h-full bg-cover bg-center bg-[#424242] overflow-hidden hover:saturate-150 transition top-left"}>
                            <div className={'relative h-full w-full bg-black/[.3]'}>
                                <p className={'truncate text-white text-left m-4 mb-0 text-sm font-medium'}>Test</p>
                                <p className={'truncate text-white text-left ml-4 text-[0.6rem] max-w-[100px]'}></p>
                            </div>
                        </div>
                        <div className={'absolute right-0.5 bottom-0.5 rounded-full p-2'}>
                            <FaPlay size={14} className={'text-black'} />
                        </div>
                    </div>
                    <div className={'relative row-span-6 col-span-2 rounded-3xl overflow-hidden'}>
                        <div className={"group flex items-center h-full bg-cover bg-center bg-[blue] overflow-hidden hover:saturate-150 transition"}>
                            <div className={'relative h-full w-full bg-black/[.3] rounded-3xl flex flex-col items-center justify-center'}>
                                <p className={'truncate text-white text-[1.5rem] max-w-[100px] font-medium'}></p>
                                <p className={'truncate text-white text-[1.5rem] max-w-[100px] font-medium'}></p>
                                <p className={'truncate text-white text-[1.5rem] max-w-[100px] font-medium'}></p>
                            </div>
                        </div>
                    </div>
                    <div className={'relative row-span-2 col-span-3 rounded-3xl overflow-hidden'}>
                        <div className={"relative group flex items-center h-full bg-cover bg-center bg-[#424242] overflow-hidden hover:saturate-150 transition top-left"}>
                            <div className={'relative h-full w-full bg-black/[.3]'}>
                                <p className={'truncate text-white text-left m-4 mb-0 text-sm font-medium'}>Test</p>
                                <p className={'truncate text-white text-left ml-4 text-[0.6rem] max-w-[100px]'}></p>
                            </div>
                        </div>
                        <div className={'absolute right-0.5 bottom-0.5 rounded-full p-2'}>
                            <FaPlay size={14} className={'text-black'} />
                        </div>
                    </div>
                    <div className={'relative row-span-2 col-span-3 rounded-3xl overflow-hidden'}>
                        <div className={"relative group flex items-center h-full bg-cover bg-center bg-[#424242] overflow-hidden hover:saturate-150 transition top-left"}>
                            <div className={'relative h-full w-full bg-black/[.3]'}>
                                <p className={'truncate text-white text-left m-4 mb-0 text-sm font-medium'}>Test</p>
                                <p className={'truncate text-white text-left ml-4 text-[0.6rem] max-w-[100px]'}></p>
                            </div>
                        </div>
                        <div className={'absolute right-0.5 bottom-0.5 rounded-full p-2'}>
                            <FaPlay size={14} className={'text-black'} />
                        </div>
                    </div>
                </div>

            </div>
        ) : (
            <div className={'box'}>
                Loading...
            </div>
        )
    );
};

export default UserDataLayout;