'use client'

import {useState, useEffect} from "react";
import LikedWidget from "@/components/LikedWidget";
import {FaPlay} from "react-icons/fa6";
import useWebApp from "@/hooks/useWebApp";
import Image from "next/image";
import SongItem from "@/components/SongItem";
import useOnPlay from "@/hooks/useOnPlay";
import Link from "next/link";

interface UserData {
    id: number;
    first_name: string;
    last_name?: string;
    username?: string;
    language_code: string;
    is_premium?: boolean;
    photo_url?: string;
    songs: object;
}

const UserDataLayout = (songs: any) => {
    const [telegramId, setTelegramId] = useState<string | null>(null)
    const [userData, setUserData] = useState<UserData | null>(null)
    const [hash, setHash] = useState<string | null>(null);
    const WebApp = useWebApp();

    const onPlay = useOnPlay(songs!);

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
            <div className={'p-5 box'}>
                <div className={'flex justify-center items-center flex-col gap-y-1'}>
                    <div className={'p-1.5 border-2 border-[#ddd] bg-[#424242]/[.3] rounded-3xl'}>
                        <Image className={'w-[100px] h-[100px] rounded-3xl'} src={'/images/favBg-4.jpg'} alt={'image'} width={50} height={50} />
                    </div>

                    <h2 className={'text-center text-[1.2rem] font-bold mb-4'}>Home</h2>
                </div>

                <div className="mb-3">
                    <h1 className="text-[#585858] text-[0.8rem]">
                        Welcome Home
                    </h1>
                    <h2 className="text-black text-lg font-semibold">
                        {userData.first_name}, you may like this
                    </h2>
                </div>

                {/*<div className="grid grid-rows-8 grid-cols-5 gap-[.1rem] h-[100vh] box mb-3">*/}
                {/*    <LikedWidget name={'Liked Songs'} href={'/liked'} />*/}
                {/*    <div className={'relative row-span-2 col-span-3 rounded-3xl overflow-hidden rounded-br-none'}>*/}
                {/*        <div className={"relative group flex items-center h-full bg-cover bg-center bg-[url('../public/images/favBg.jpg')] overflow-hidden hover:saturate-150 transition top-left "}>*/}
                {/*            <div className={'relative h-full w-full bg-black/[.3]'}>*/}
                {/*                <p className={'truncate text-white text-left m-4 mb-0 text-md font-semibold'}>World Top</p>*/}
                {/*                <p className={'truncate text-white text-left ml-4 text-[0.6rem] max-w-[100px]'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className={'absolute right-[10px] bottom-[10px] rounded-full'}>*/}
                {/*            <FaPlay size={16} className={'text-black'} />*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className={'relative row-span-6 col-span-2 rounded-3xl overflow-hidden'}>*/}
                {/*        <div className={"group flex items-center h-full bg-cover bg-center bg-[url('../public/images/favBg-5.jpg')] overflow-hidden hover:saturate-150 transition"}>*/}
                {/*            <div className={'relative h-full w-full bg-black/[.3] rounded-3xl flex flex-col items-center justify-center'}>*/}
                {/*                <p className={'truncate text-white text-[1.5rem] max-w-[100px] font-semibold'}>TRY</p>*/}
                {/*                <p className={'truncate text-white text-[1.5rem] max-w-[100px] font-semibold'}>SMTH</p>*/}
                {/*                <p className={'truncate text-white text-[1.5rem] max-w-[100px] font-semibold'}>NEW</p>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className={'relative row-span-2 col-span-3 rounded-3xl overflow-hidden rounded-br-none'}>*/}
                {/*        <div className={"relative group flex items-center h-full bg-cover bg-center bg-[url('../public/images/favBg-4.jpg')] overflow-hidden hover:saturate-150 transition top-left"}>*/}
                {/*            <div className={'relative h-full w-full bg-black/[.3]'}>*/}
                {/*                <p className={'truncate text-white text-left m-4 mb-0 text-md font-semibold'}>Greatest Hits</p>*/}
                {/*                <p className={'truncate text-white text-left ml-4 text-[0.6rem] max-w-[100px]'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className={'absolute right-[10px] bottom-[10px] rounded-full'}>*/}
                {/*            <FaPlay size={16} className={'text-black'} />*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className={'relative row-span-2 col-span-3 rounded-3xl overflow-hidden rounded-br-none'}>*/}
                {/*        <div className={"relative group flex items-center h-full bg-cover bg-center bg-[url('../public/images/favBg-3.jpg')] overflow-hidden hover:saturate-150 transition top-left"}>*/}
                {/*            <div className={'relative h-full w-full bg-black/[.3]'}>*/}
                {/*                <p className={'truncate text-white text-left m-4 mb-0 text-md font-semibold'}>Top Artists</p>*/}
                {/*                <p className={'truncate text-white text-left ml-4 text-[0.6rem] max-w-[100px]'}>Arctic Monkeys, 21 Savage, Lana Del Rey</p>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className={'absolute right-[10px] bottom-[10px] rounded-full'}>*/}
                {/*            <FaPlay size={16} className={'text-black'} />*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}

            </div>
        ) : (
            <div className={'relative px-3 py-5 pb-20 box flex flex-col gap-y-8'}>
                {/*Loading...*/}

                <div className={'bg-[#0e0e0e] p-3 rounded-xl flex justify-between'}>
                    <div className={'flex gap-x-2 items-center'}>
                        <div className={'h-10 w-10 bg-white rounded-full'}></div>
                        <div>
                            <h4 className={'font-semibold text-white'}>Charton Community</h4>
                            <p className={'text-[14px] text-white'}>1,000,000,000 </p>
                        </div>
                    </div>
                    <div className={'bg-[#eee] py-2 px-3 rounded-3xl font-semibold flex items-center justify-center'}>
                        Follow
                    </div>
                </div>

                <div className={'flex flex-col gap-y-3'}>
                    <div className={'text-[20px] font-bold text-[#0E0E0E]'}>
                        Hey, <span className={'text-black'}>Чекан</span>, wanna smth special?
                    </div>
                    <div className={' w-full min-h-[160px] overflow-x-scroll overflow-hidden whitespace-nowrap flex gap-x-1'}>
                        <div className={'align-top'}>
                            <div className={'rounded-3xl h-[150px] w-[150px] bg-neutral-400 p-3 mb-1'}>
                                image
                            </div>
                            <div className={'max-w-[150px] px-1'}>
                                <h5 className={'text-[16px] font-semibold truncate'}>World Top</h5>
                                <p className={'text-[12px] font-light truncate'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                            </div>
                        </div>
                        <div className={'align-top'}>
                            <div className={'rounded-3xl h-[150px] w-[150px] bg-neutral-400 p-3 mb-1'}>
                                image
                            </div>
                            <div className={'max-w-[150px] px-1'}>
                                <h5 className={'text-[16px] font-semibold truncate'}>Greatest Hits</h5>
                                <p className={'text-[12px] font-light truncate'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                            </div>
                        </div>
                        <div className={'align-top'}>
                            <div className={'rounded-3xl h-[150px] w-[150px] bg-neutral-400 p-3 mb-1'}>
                                image
                            </div>
                            <div className={'max-w-[150px] px-1'}>
                                <h5 className={'text-[16px] font-semibold truncate'}>Winter Mix</h5>
                                <p className={'text-[12px] font-light truncate'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={'flex flex-col gap-y-3'}>
                    <div className={'text-[18px] font-bold text-[#0E0E0E]'}>
                        Based on your preferences
                    </div>
                    <div className={' w-full min-h-[160px] overflow-x-scroll overflow-hidden whitespace-nowrap flex gap-x-1'}>
                        <div className={'align-top'}>
                            <div className={'rounded-3xl h-[150px] w-[150px] bg-neutral-400 p-3 mb-1'}>
                                image
                            </div>
                            <div className={'max-w-[150px] px-1'}>
                                <h5 className={'text-[16px] font-semibold truncate'}>World Top</h5>
                                <p className={'text-[12px] font-light truncate'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                            </div>
                        </div>
                        <div className={'align-top'}>
                            <div className={'rounded-3xl h-[150px] w-[150px] bg-neutral-400 p-3 mb-1'}>
                                image
                            </div>
                            <div className={'max-w-[150px] px-1'}>
                                <h5 className={'text-[16px] font-semibold truncate'}>Greatest Hits</h5>
                                <p className={'text-[12px] font-light truncate'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                            </div>
                        </div>
                        <div className={'align-top'}>
                            <div className={'rounded-3xl h-[150px] w-[150px] bg-neutral-400 p-3 mb-1'}>
                                image
                            </div>
                            <div className={'max-w-[150px] px-1'}>
                                <h5 className={'text-[16px] font-semibold truncate'}>Winter Mix</h5>
                                <p className={'text-[12px] font-light truncate'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={'flex flex-col gap-y-3'}>
                    <div className={'text-[18px] font-bold text-[#0E0E0E]'}>
                        Miss you
                    </div>
                    <div className={' w-full min-h-[160px] overflow-x-scroll overflow-hidden whitespace-nowrap flex gap-x-1'}>
                        <div className={'align-top'}>
                            <div className={'relative rounded-3xl h-[150px] w-[150px] bg-neutral-400 p-3 mb-1 z-10'}>
                                image
                                <div className={'absolute w-[30%] bg-[#424242] top-0 right-0 bottom-0 rounded-r-3xl'}></div>
                            </div>
                            <div className={'max-w-[150px] px-1'}>
                                <h5 className={'text-[16px] font-semibold truncate'}>World Top</h5>
                                <p className={'text-[12px] font-light truncate'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                            </div>
                        </div>
                        <div className={'align-top'}>
                            <div className={'relative rounded-3xl h-[150px] w-[150px] bg-neutral-400 p-3 mb-1 z-10'}>
                                image
                                <div className={'absolute w-[30%] bg-[#424242] top-0 right-0 bottom-0 rounded-r-3xl'}></div>
                            </div>
                            <div className={'max-w-[150px] px-1'}>
                                <h5 className={'text-[16px] font-semibold truncate'}>Greatest Hits</h5>
                                <p className={'text-[12px] font-light truncate'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                            </div>
                        </div>
                        <div className={'align-top'}>
                            <div className={'relative rounded-3xl h-[150px] w-[150px] bg-neutral-400 p-3 mb-1 z-10'}>
                                image
                                <div className={'absolute w-[30%] bg-[#424242] top-0 right-0 bottom-0 rounded-r-3xl'}></div>
                            </div>
                            <div className={'max-w-[150px] px-1'}>
                                <h5 className={'text-[16px] font-semibold truncate'}>Winter Mix</h5>
                                <p className={'text-[12px] font-light truncate'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'flex flex-col gap-y-3'}>
                    <div className={'flex items-center gap-x-2'}>
                        <div className={'w-10 h-10 bg-neutral-400 rounded-full'}></div>
                        <p className={'text-[20px] font-bold text-[#0E0E0E]'}>LXST CXNTURY</p>
                    </div>
                    <div className={' w-full min-h-[160px] overflow-x-scroll overflow-hidden whitespace-nowrap flex gap-x-1'}>
                        <div className={'align-top'}>
                            <div className={'rounded-3xl h-[150px] w-[150px] bg-neutral-400 p-3 mb-1'}>
                                image
                            </div>
                            <div className={'max-w-[150px] px-1'}>
                                <h5 className={'text-[16px] font-semibold truncate'}>World Top</h5>
                                <p className={'text-[12px] font-light truncate'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                            </div>
                        </div>
                        <div className={'align-top'}>
                            <div className={'rounded-3xl h-[150px] w-[150px] bg-neutral-400 p-3 mb-1'}>
                                image
                            </div>
                            <div className={'max-w-[150px] px-1'}>
                                <h5 className={'text-[16px] font-semibold truncate'}>Greatest Hits</h5>
                                <p className={'text-[12px] font-light truncate'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                            </div>
                        </div>
                        <div className={'align-top'}>
                            <div className={'rounded-3xl h-[150px] w-[150px] bg-neutral-400 p-3 mb-1'}>
                                image
                            </div>
                            <div className={'max-w-[150px] px-1'}>
                                <h5 className={'text-[16px] font-semibold truncate'}>Winter Mix</h5>
                                <p className={'text-[12px] font-light truncate'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'flex flex-col gap-y-3'}>
                    <div className={'text-[18px] font-bold text-[#0E0E0E]'}>
                        From your playlists
                    </div>
                    <div className={' w-full min-h-[160px] overflow-x-scroll overflow-hidden whitespace-nowrap flex gap-x-1'}>
                        <div className={'align-top'}>
                            <div className={'rounded-3xl h-[150px] w-[150px] bg-neutral-400 p-3 mb-1'}>
                                image
                            </div>
                            <div className={'max-w-[150px] px-1'}>
                                <h5 className={'text-[16px] font-semibold truncate'}>World Top</h5>
                                <p className={'text-[12px] font-light truncate'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                            </div>
                        </div>
                        <div className={'align-top'}>
                            <div className={'rounded-3xl h-[150px] w-[150px] bg-neutral-400 p-3 mb-1'}>
                                image
                            </div>
                            <div className={'max-w-[150px] px-1'}>
                                <h5 className={'text-[16px] font-semibold truncate'}>Greatest Hits</h5>
                                <p className={'text-[12px] font-light truncate'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                            </div>
                        </div>
                        <div className={'align-top'}>
                            <div className={'rounded-3xl h-[150px] w-[150px] bg-neutral-400 p-3 mb-1'}>
                                image
                            </div>
                            <div className={'max-w-[150px] px-1'}>
                                <h5 className={'text-[16px] font-semibold truncate'}>Winter Mix</h5>
                                <p className={'text-[12px] font-light truncate'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={'flex flex-col gap-y-3'}>
                    <div className={'text-[18px] font-bold text-[#0E0E0E] flex justify-between'}>
                        <h3>Mix for you</h3>
                        <Link href={'/mix'} className={'font-normal text-[12px] flex items-center justify-center py-1 px-3 border border-[#424242] rounded-3xl'}>
                            More
                        </Link>
                    </div>
                    <div className={'flex flex-col gap-y-1'}>
                        {
                            songs!.map((item: any) => (
                                <SongItem
                                    key={item.id}
                                    onClick={(id: string) => onPlay(id)}
                                    data={item}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className={'flex flex-col gap-y-3'}>
                    <div className={'text-[18px] font-bold text-[#0E0E0E]'}>
                        Playlists for you
                    </div>
                    <div className={' w-full min-h-[160px] overflow-x-scroll overflow-hidden whitespace-nowrap flex gap-x-1'}>
                        <div className={'align-top'}>
                            <div className={'rounded-3xl h-[150px] w-[150px] bg-neutral-400 p-3 mb-1'}>
                                image
                            </div>
                            <div className={'max-w-[150px] px-1'}>
                                <h5 className={'text-[16px] font-semibold truncate'}>World Top</h5>
                                <p className={'text-[12px] font-light truncate'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                            </div>
                        </div>
                        <div className={'align-top'}>
                            <div className={'rounded-3xl h-[150px] w-[150px] bg-neutral-400 p-3 mb-1'}>
                                image
                            </div>
                            <div className={'max-w-[150px] px-1'}>
                                <h5 className={'text-[16px] font-semibold truncate'}>Greatest Hits</h5>
                                <p className={'text-[12px] font-light truncate'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                            </div>
                        </div>
                        <div className={'align-top'}>
                            <div className={'rounded-3xl h-[150px] w-[150px] bg-neutral-400 p-3 mb-1'}>
                                image
                            </div>
                            <div className={'max-w-[150px] px-1'}>
                                <h5 className={'text-[16px] font-semibold truncate'}>Winter Mix</h5>
                                <p className={'text-[12px] font-light truncate'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'flex flex-col gap-y-3'}>
                    <div className={'flex items-center gap-x-2'}>
                        <div className={'w-10 h-10 bg-neutral-400 rounded-xl'}></div>
                        <div className={'flex flex-col gap-y-1'}>
                            <p className={'uppercase text-[16px] font-normal text-neutral-400 leading-4'}>Similar to</p>
                            <h4 className={'text-[20px] font-bold leading-5 text-[#0E0E0E]'}>LXST CXNTURY</h4>
                        </div>
                    </div>
                    <div className={' w-full min-h-[160px] overflow-x-scroll overflow-hidden whitespace-nowrap flex gap-x-1'}>
                        <div className={'align-top'}>
                            <div className={'rounded-3xl h-[150px] w-[150px] bg-neutral-400 p-3 mb-1'}>
                                image
                            </div>
                            <div className={'max-w-[150px] px-1'}>
                                <h5 className={'text-[16px] font-semibold truncate'}>World Top</h5>
                                <p className={'text-[12px] font-light truncate'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                            </div>
                        </div>
                        <div className={'align-top'}>
                            <div className={'rounded-3xl h-[150px] w-[150px] bg-neutral-400 p-3 mb-1'}>
                                image
                            </div>
                            <div className={'max-w-[150px] px-1'}>
                                <h5 className={'text-[16px] font-semibold truncate'}>Greatest Hits</h5>
                                <p className={'text-[12px] font-light truncate'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                            </div>
                        </div>
                        <div className={'align-top'}>
                            <div className={'rounded-3xl h-[150px] w-[150px] bg-neutral-400 p-3 mb-1'}>
                                image
                            </div>
                            <div className={'max-w-[150px] px-1'}>
                                <h5 className={'text-[16px] font-semibold truncate'}>Winter Mix</h5>
                                <p className={'text-[12px] font-light truncate'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={'flex flex-col gap-y-3'}>
                    <div className={'text-[18px] font-bold text-[#0E0E0E]'}>
                        Albums for you
                    </div>
                    <div className={' w-full min-h-[160px] overflow-x-scroll overflow-hidden whitespace-nowrap flex gap-x-1'}>
                        <div className={'align-top'}>
                            <div className={'relative rounded-3xl h-[150px] w-[150px] bg-neutral-400 p-3 mb-1 z-10'}>
                                image
                                <div className={'absolute w-[30%] bg-[#424242] top-0 right-0 bottom-0 rounded-r-3xl'}></div>
                            </div>
                            <div className={'max-w-[150px] px-1'}>
                                <h5 className={'text-[16px] font-semibold truncate'}>World Top</h5>
                                <p className={'text-[12px] font-light truncate'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                            </div>
                        </div>
                        <div className={'align-top'}>
                            <div className={'relative rounded-3xl h-[150px] w-[150px] bg-neutral-400 p-3 mb-1 z-10'}>
                                image
                                <div className={'absolute w-[30%] bg-[#424242] top-0 right-0 bottom-0 rounded-r-3xl'}></div>
                            </div>
                            <div className={'max-w-[150px] px-1'}>
                                <h5 className={'text-[16px] font-semibold truncate'}>Greatest Hits</h5>
                                <p className={'text-[12px] font-light truncate'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                            </div>
                        </div>
                        <div className={'align-top'}>
                            <div className={'relative rounded-3xl h-[150px] w-[150px] bg-neutral-400 p-3 mb-1 z-10'}>
                                image
                                <div className={'absolute w-[30%] bg-[#424242] top-0 right-0 bottom-0 rounded-r-3xl'}></div>
                            </div>
                            <div className={'max-w-[150px] px-1'}>
                                <h5 className={'text-[16px] font-semibold truncate'}>Winter Mix</h5>
                                <p className={'text-[12px] font-light truncate'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'flex flex-col gap-y-3'}>
                    <div className={'flex items-center gap-x-2'}>
                        <div className={'w-10 h-10 bg-neutral-400 rounded-full'}></div>
                        <p className={'text-[20px] font-bold text-[#0E0E0E]'}>Night Lovell</p>
                    </div>
                    <div className={' w-full min-h-[160px] overflow-x-scroll overflow-hidden whitespace-nowrap flex gap-x-1'}>
                        <div className={'align-top'}>
                            <div className={'rounded-3xl h-[150px] w-[150px] bg-neutral-400 p-3 mb-1'}>
                                image
                            </div>
                            <div className={'max-w-[150px] px-1'}>
                                <h5 className={'text-[16px] font-semibold truncate'}>World Top</h5>
                                <p className={'text-[12px] font-light truncate'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                            </div>
                        </div>
                        <div className={'align-top'}>
                            <div className={'rounded-3xl h-[150px] w-[150px] bg-neutral-400 p-3 mb-1'}>
                                image
                            </div>
                            <div className={'max-w-[150px] px-1'}>
                                <h5 className={'text-[16px] font-semibold truncate'}>Greatest Hits</h5>
                                <p className={'text-[12px] font-light truncate'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                            </div>
                        </div>
                        <div className={'align-top'}>
                            <div className={'rounded-3xl h-[150px] w-[150px] bg-neutral-400 p-3 mb-1'}>
                                image
                            </div>
                            <div className={'max-w-[150px] px-1'}>
                                <h5 className={'text-[16px] font-semibold truncate'}>Winter Mix</h5>
                                <p className={'text-[12px] font-light truncate'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={'absolute bottom-2 left-0 right-0 text-center text-[#424242]'}>
                    <p className={'text-[12px]'}>Didn't find anything for yourself?</p>
                    <p className={'text-[12px]'}>Try out this smart (common) search</p>
                </div>

            </div>
        )
    );
};

export default UserDataLayout;