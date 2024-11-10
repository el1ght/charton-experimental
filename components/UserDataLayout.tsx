'use client'

import {useState, useEffect} from "react";
import LikedWidget from "@/components/LikedWidget";
import {FaPlay} from "react-icons/fa6";
import useWebApp from "@/hooks/useWebApp";


interface UserData {
    id: number;
    first_name: string;
    last_name?: string;
    username?: string;
    language_code: string;
    is_premium?: boolean;
    photo_url?: string;
}

const UserDataLayout = () => {
    const [telegramId, setTelegramId] = useState<string | null>(null)
    const [userData, setUserData] = useState<UserData | null>(null)
    const [hash, setHash] = useState<string | null>(null);
    const WebApp = useWebApp();
    // const [WebApp, setWebApp] = useState<any>(null);

    // const loadWebApp = async () => {
    //     return (await import('@twa-dev/sdk')).default
    // };
    //
    // useEffect(() => {
    //     loadWebApp().then(x => setWebApp(x));
    // }, []);

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
                <div className="mb-3">
                    <h1 className="text-[#585858] text-[0.8rem]">
                        <span className={`${WebApp.platform === 'ios' && 'text-red-700'}`}>HEY, {WebApp.platform}</span>
                    </h1>
                    <h2 className="text-black text-lg font-semibold">
                        {userData.first_name}, you may like this
                    </h2>
                </div>

                <div className="grid grid-rows-8 grid-cols-5 gap-[.1rem] h-[100vh] box mb-3">
                    <LikedWidget name={'Liked Songs'} href={'/liked'} />
                    <div className={'relative row-span-2 col-span-3 rounded-3xl overflow-hidden rounded-br-none'}>
                        <div className={"relative group flex items-center h-full bg-cover bg-center bg-[url('../public/images/favBg.jpg')] overflow-hidden hover:saturate-150 transition top-left "}>
                            <div className={'relative h-full w-full bg-black/[.3]'}>
                                <p className={'truncate text-white text-left m-4 mb-0 text-md font-semibold'}>World Top</p>
                                <p className={'truncate text-white text-left ml-4 text-[0.6rem] max-w-[100px]'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                            </div>
                        </div>
                        <div className={'absolute right-[10px] bottom-[10px] rounded-full'}>
                            <FaPlay size={16} className={'text-black'} />
                        </div>
                    </div>
                    <div className={'relative row-span-6 col-span-2 rounded-3xl overflow-hidden'}>
                        <div className={"group flex items-center h-full bg-cover bg-center bg-[url('../public/images/favBg-5.jpg')] overflow-hidden hover:saturate-150 transition"}>
                            <div className={'relative h-full w-full bg-black/[.3] rounded-3xl flex flex-col items-center justify-center'}>
                                <p className={'truncate text-white text-[1.5rem] max-w-[100px] font-semibold'}>TRY</p>
                                <p className={'truncate text-white text-[1.5rem] max-w-[100px] font-semibold'}>SMTH</p>
                                <p className={'truncate text-white text-[1.5rem] max-w-[100px] font-semibold'}>NEW</p>
                            </div>
                        </div>
                    </div>
                    <div className={'relative row-span-2 col-span-3 rounded-3xl overflow-hidden rounded-br-none'}>
                        <div className={"relative group flex items-center h-full bg-cover bg-center bg-[url('../public/images/favBg-4.jpg')] overflow-hidden hover:saturate-150 transition top-left"}>
                            <div className={'relative h-full w-full bg-black/[.3]'}>
                                <p className={'truncate text-white text-left m-4 mb-0 text-md font-semibold'}>Greatest Hits</p>
                                <p className={'truncate text-white text-left ml-4 text-[0.6rem] max-w-[100px]'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                            </div>
                        </div>
                        <div className={'absolute right-[10px] bottom-[10px] rounded-full'}>
                            <FaPlay size={16} className={'text-black'} />
                        </div>
                    </div>
                    <div className={'relative row-span-2 col-span-3 rounded-3xl overflow-hidden rounded-br-none'}>
                        <div className={"relative group flex items-center h-full bg-cover bg-center bg-[url('../public/images/favBg-3.jpg')] overflow-hidden hover:saturate-150 transition top-left"}>
                            <div className={'relative h-full w-full bg-black/[.3]'}>
                                <p className={'truncate text-white text-left m-4 mb-0 text-md font-semibold'}>Top Artists</p>
                                <p className={'truncate text-white text-left ml-4 text-[0.6rem] max-w-[100px]'}>Arctic Monkeys, 21 Savage, Lana Del Rey</p>
                            </div>
                        </div>
                        <div className={'absolute right-[10px] bottom-[10px] rounded-full'}>
                            <FaPlay size={16} className={'text-black'} />
                        </div>
                    </div>
                </div>

            </div>
        ) : (
            <div className={'h-full p-6 box'}>
                Loading...
            </div>
        )
    );
};

export default UserDataLayout;