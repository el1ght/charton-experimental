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

const mockSongs = [
    {
        id: '1',
        user_id: '42545235',
        author: 'Arctic Monkeys',
        title: 'Arabella',
        image_path: 'string'
    },
    {
        id: '2',
        user_id: '52452355',
        author: 'Arctic Monkeys',
        title: '505',
        image_path: 'string'
    },
]

const UserDataLayout = () => {
    const [telegramId, setTelegramId] = useState<string | null>(null)
    const [userData, setUserData] = useState<UserData | null>(null)
    const [hash, setHash] = useState<string | null>(null);
    const WebApp = useWebApp();

    const onPlay = useOnPlay(mockSongs!);

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

        const backButton = WebApp.BackButton;

        if (window.location.search && window.location.pathname !== '/') {

            backButton.mount();

        } else {

            backButton.hide();

        }
        backButton.onClick(() => {
            history.back();
        });
    }, [WebApp]);

    //Check if from Telegram


    return (
        userData ? (
            <div className={'relative py-5 pb-20 box flex flex-col gap-y-8'}>

                <div className={'bg-[#0e0e0e] p-3 rounded-xl flex justify-between mx-3'}>
                    <Link href={'https://t.me/devs_cis'} className={'flex gap-x-2 items-center cursor-pointer'}>
                        <div className={'h-10 w-10 bg-white rounded-full'}></div>
                        <div>
                            <h4 className={'font-semibold text-white'}>Charton Community</h4>
                            <p className={'text-[14px] text-white'}>1,000,000,000 </p>
                        </div>
                    </Link>
                    <Link href={'https://t.me/devs_cis'} className={'bg-[#eee] py-2 px-3 rounded-3xl font-semibold flex items-center justify-center active:scale-95 transition'}>
                        Follow
                    </Link>
                </div>

                <div className={'flex flex-col gap-y-3'}>
                    <div className={'text-[20px] font-bold text-[#0E0E0E] ml-3'}>
                        Hey, <span className={'text-black'}>{userData.first_name}</span>, wanna smth special?
                    </div>
                    <div className={'pl-3 w-full min-h-[160px] overflow-x-scroll overflow-hidden whitespace-nowrap flex gap-x-1'}>
                        <div className={'align-top active:scale-95 transition'}>
                            <Link href={'/playlist/414154513'} className={'block rounded-3xl h-[150px] w-[150px] bg-neutral-400 p-3 mb-1'}>
                                image
                            </Link>
                            <div className={'max-w-[150px] px-1'}>
                                <Link href={'/playlist/414154513'} className={'text-[16px] font-semibold truncate'}>World Top</Link>
                                <p className={'text-[12px] font-light truncate'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                            </div>
                        </div>
                        <div className={'align-top active:scale-95 transition'}>
                            <Link href={'/playlist/414154513'} className={'block rounded-3xl h-[150px] w-[150px] bg-neutral-400 p-3 mb-1'}>
                                image
                            </Link>
                            <div className={'max-w-[150px] px-1'}>
                                <Link href={'/playlist/414154513'} className={'text-[16px] font-semibold truncate'}>Greatest Hits</Link>
                                <p className={'text-[12px] font-light truncate'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                            </div>
                        </div>
                        <div className={'align-top active:scale-95 transition'}>
                            <Link href={'/playlist/414154513'} className={'block rounded-3xl h-[150px] w-[150px] bg-neutral-400 p-3 mb-1'}>
                                image
                            </Link>
                            <div className={'max-w-[150px] px-1'}>
                                <Link href={'/playlist/414154513'} className={'text-[16px] font-semibold truncate'}>Winter Mix</Link>
                                <p className={'text-[12px] font-light truncate'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={'flex flex-col gap-y-3'}>
                    <div className={'text-[18px] font-bold text-[#0E0E0E] ml-3'}>
                        Based on your preferences
                    </div>
                    <div className={'pl-3 w-full min-h-[160px] overflow-x-scroll overflow-hidden whitespace-nowrap flex gap-x-1'}>
                        <div className={'align-top active:scale-95 transition'}>
                            <Link href={'/playlist/414154513'} className={'block rounded-3xl h-[150px] w-[150px] bg-neutral-400 p-3 mb-1'}>
                                image
                            </Link>
                            <div className={'max-w-[150px] px-1'}>
                                <Link href={'/playlist/414154513'} className={'text-[16px] font-semibold truncate'}>Winter Mix</Link>
                                <p className={'text-[12px] font-light truncate'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                            </div>
                        </div>
                        <div className={'align-top active:scale-95 transition'}>
                            <Link href={'/playlist/414154513'} className={'block rounded-3xl h-[150px] w-[150px] bg-neutral-400 p-3 mb-1'}>
                                image
                            </Link>
                            <div className={'max-w-[150px] px-1'}>
                                <Link href={'/playlist/414154513'} className={'text-[16px] font-semibold truncate'}>Winter Mix</Link>
                                <p className={'text-[12px] font-light truncate'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                            </div>
                        </div>
                        <div className={'align-top active:scale-95 transition'}>
                            <Link href={'/playlist/414154513'} className={'block rounded-3xl h-[150px] w-[150px] bg-neutral-400 p-3 mb-1'}>
                                image
                            </Link>
                            <div className={'max-w-[150px] px-1'}>
                                <Link href={'/playlist/414154513'} className={'text-[16px] font-semibold truncate'}>Winter Mix</Link>
                                <p className={'text-[12px] font-light truncate'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={'flex flex-col gap-y-3'}>
                    <div className={'text-[18px] font-bold text-[#0E0E0E] ml-3'}>
                        Miss you
                    </div>
                    <div className={'pl-3 w-full min-h-[160px] overflow-x-scroll overflow-hidden whitespace-nowrap flex gap-x-1'}>
                        <div className={'align-top active:scale-95 transition'}>
                            <Link href={'/playlist/414154513'} className={'relative block rounded-3xl h-[150px] w-[150px] bg-neutral-400 p-3 mb-1'}>
                                image
                                <div className={'absolute w-[30%] bg-[#424242] top-0 right-0 bottom-0 rounded-r-3xl'}></div>
                            </Link>
                            <div className={'max-w-[150px] px-1'}>
                                <Link href={'/playlist/414154513'} className={'text-[16px] font-semibold truncate'}>Winter Mix</Link>
                                <p className={'text-[12px] font-light truncate'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                            </div>
                        </div>
                        <div className={'align-top active:scale-95 transition'}>
                            <Link href={'/playlist/414154513'} className={' relative block rounded-3xl h-[150px] w-[150px] bg-neutral-400 p-3 mb-1'}>
                                image
                                <div className={'absolute w-[30%] bg-[#424242] top-0 right-0 bottom-0 rounded-r-3xl'}></div>
                            </Link>
                            <div className={'max-w-[150px] px-1'}>
                                <Link href={'/playlist/414154513'} className={'text-[16px] font-semibold truncate'}>Winter Mix</Link>
                                <p className={'text-[12px] font-light truncate'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                            </div>
                        </div>
                        <div className={'align-top active:scale-95 transition'}>
                            <Link href={'/playlist/414154513'} className={'relative block rounded-3xl h-[150px] w-[150px] bg-neutral-400 p-3 mb-1'}>
                                image
                                <div className={'absolute w-[30%] bg-[#424242] top-0 right-0 bottom-0 rounded-r-3xl'}></div>
                            </Link>
                            <div className={'max-w-[150px] px-1'}>
                                <Link href={'/playlist/414154513'} className={'text-[16px] font-semibold truncate'}>Winter Mix</Link>
                                <p className={'text-[12px] font-light truncate'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'flex flex-col gap-y-3'}>
                    <div className={'flex items-center gap-x-2 ml-3'}>
                        <Link href={'/artists/42352543'} className={'w-10 h-10 bg-neutral-400 rounded-full'}></Link>
                        <Link href={'/artists/42352543'} className={'text-[20px] font-bold text-[#0E0E0E]'}>LXST CXNTURY</Link>
                    </div>
                    <div className={'pl-3 w-full min-h-[160px] overflow-x-scroll overflow-hidden whitespace-nowrap flex gap-x-1'}>
                        <div className={'align-top active:scale-95 transition'}>
                            <Link href={'/playlist/414154513'} className={'block rounded-3xl h-[150px] w-[150px] bg-neutral-400 p-3 mb-1'}>
                                image
                            </Link>
                            <div className={'max-w-[150px] px-1'}>
                                <Link href={'/playlist/414154513'} className={'text-[16px] font-semibold truncate'}>Winter Mix</Link>
                                <p className={'text-[12px] font-light truncate'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                            </div>
                        </div>
                        <div className={'align-top active:scale-95 transition'}>
                            <Link href={'/playlist/414154513'} className={'block rounded-3xl h-[150px] w-[150px] bg-neutral-400 p-3 mb-1'}>
                                image
                            </Link>
                            <div className={'max-w-[150px] px-1'}>
                                <Link href={'/playlist/414154513'} className={'text-[16px] font-semibold truncate'}>Winter Mix</Link>
                                <p className={'text-[12px] font-light truncate'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                            </div>
                        </div>
                        <div className={'align-top active:scale-95 transition'}>
                            <Link href={'/playlist/414154513'} className={'block rounded-3xl h-[150px] w-[150px] bg-neutral-400 p-3 mb-1'}>
                                image
                            </Link>
                            <div className={'max-w-[150px] px-1'}>
                                <Link href={'/playlist/414154513'} className={'text-[16px] font-semibold truncate'}>Winter Mix</Link>
                                <p className={'text-[12px] font-light truncate'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'flex flex-col gap-y-3'}>
                    <div className={'text-[18px] font-bold text-[#0E0E0E] ml-3'}>
                        From your playlists
                    </div>
                    <div className={'pl-3 w-full min-h-[160px] overflow-x-scroll overflow-hidden whitespace-nowrap flex gap-x-1'}>
                        <div className={'align-top active:scale-95 transition'}>
                            <Link href={'/playlist/414154513'} className={'block rounded-3xl h-[150px] w-[150px] bg-neutral-400 p-3 mb-1'}>
                                image
                            </Link>
                            <div className={'max-w-[150px] px-1'}>
                                <Link href={'/playlist/414154513'} className={'text-[16px] font-semibold truncate'}>Winter Mix</Link>
                                <p className={'text-[12px] font-light truncate'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                            </div>
                        </div>
                        <div className={'align-top active:scale-95 transition'}>
                            <Link href={'/playlist/414154513'} className={'block rounded-3xl h-[150px] w-[150px] bg-neutral-400 p-3 mb-1'}>
                                image
                            </Link>
                            <div className={'max-w-[150px] px-1'}>
                                <Link href={'/playlist/414154513'} className={'text-[16px] font-semibold truncate'}>Winter Mix</Link>
                                <p className={'text-[12px] font-light truncate'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                            </div>
                        </div>
                        <div className={'align-top active:scale-95 transition'}>
                            <Link href={'/playlist/414154513'} className={'block rounded-3xl h-[150px] w-[150px] bg-neutral-400 p-3 mb-1'}>
                                image
                            </Link>
                            <div className={'max-w-[150px] px-1'}>
                                <Link href={'/playlist/414154513'} className={'text-[16px] font-semibold truncate'}>Winter Mix</Link>
                                <p className={'text-[12px] font-light truncate'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={'flex flex-col gap-y-3 mx-3'}>
                    <div className={'text-[18px] font-bold text-[#0E0E0E] flex justify-between'}>
                        <h3>Mix for you</h3>
                        <Link href={'/mix'} className={'font-normal text-[12px] flex items-center justify-center py-1 px-3 border border-[#424242] rounded-3xl'}>
                            More
                        </Link>
                    </div>
                    <div className={'flex flex-col gap-y-1'}>
                        {
                            mockSongs!.map((item: any) => (
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
                    <div className={'text-[18px] font-bold text-[#0E0E0E] ml-3'}>
                        Playlists for you
                    </div>
                    <div className={'pl-3 w-full min-h-[160px] overflow-x-scroll overflow-hidden whitespace-nowrap flex gap-x-1'}>
                        <div className={'align-top active:scale-95 transition'}>
                            <Link href={'/playlist/414154513'} className={'block rounded-3xl h-[150px] w-[150px] bg-neutral-400 p-3 mb-1'}>
                                image
                            </Link>
                            <div className={'max-w-[150px] px-1'}>
                                <Link href={'/playlist/414154513'} className={'text-[16px] font-semibold truncate'}>Winter Mix</Link>
                                <p className={'text-[12px] font-light truncate'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                            </div>
                        </div>
                        <div className={'align-top active:scale-95 transition'}>
                            <Link href={'/playlist/414154513'} className={'block rounded-3xl h-[150px] w-[150px] bg-neutral-400 p-3 mb-1'}>
                                image
                            </Link>
                            <div className={'max-w-[150px] px-1'}>
                                <Link href={'/playlist/414154513'} className={'text-[16px] font-semibold truncate'}>Winter Mix</Link>
                                <p className={'text-[12px] font-light truncate'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                            </div>
                        </div>
                        <div className={'align-top active:scale-95 transition'}>
                            <Link href={'/playlist/414154513'} className={'block rounded-3xl h-[150px] w-[150px] bg-neutral-400 p-3 mb-1'}>
                                image
                            </Link>
                            <div className={'max-w-[150px] px-1'}>
                                <Link href={'/playlist/414154513'} className={'text-[16px] font-semibold truncate'}>Winter Mix</Link>
                                <p className={'text-[12px] font-light truncate'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'flex flex-col gap-y-3'}>
                    <div className={'flex items-center gap-x-2 ml-3'}>
                        <div className={'w-10 h-10 bg-neutral-400 rounded-xl'}></div>
                        <div className={'flex flex-col gap-y-1'}>
                            <p className={'uppercase text-[16px] font-normal text-neutral-400 leading-4'}>Similar to</p>
                            <h4 className={'text-[20px] font-bold leading-5 text-[#0E0E0E]'}>LXST CXNTURY</h4>
                        </div>
                    </div>
                    <div className={'pl-3 w-full min-h-[160px] overflow-x-scroll overflow-hidden whitespace-nowrap flex gap-x-1'}>
                        <div className={'align-top active:scale-95 transition'}>
                            <Link href={'/playlist/414154513'} className={'block rounded-3xl h-[150px] w-[150px] bg-neutral-400 p-3 mb-1'}>
                                image
                            </Link>
                            <div className={'max-w-[150px] px-1'}>
                                <Link href={'/playlist/414154513'} className={'text-[16px] font-semibold truncate'}>Winter Mix</Link>
                                <p className={'text-[12px] font-light truncate'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                            </div>
                        </div>
                        <div className={'align-top active:scale-95 transition'}>
                            <Link href={'/playlist/414154513'} className={'block rounded-3xl h-[150px] w-[150px] bg-neutral-400 p-3 mb-1'}>
                                image
                            </Link>
                            <div className={'max-w-[150px] px-1'}>
                                <Link href={'/playlist/414154513'} className={'text-[16px] font-semibold truncate'}>Winter Mix</Link>
                                <p className={'text-[12px] font-light truncate'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                            </div>
                        </div>
                        <div className={'align-top active:scale-95 transition'}>
                            <Link href={'/playlist/414154513'} className={'block rounded-3xl h-[150px] w-[150px] bg-neutral-400 p-3 mb-1'}>
                                image
                            </Link>
                            <div className={'max-w-[150px] px-1'}>
                                <Link href={'/playlist/414154513'} className={'text-[16px] font-semibold truncate'}>Winter Mix</Link>
                                <p className={'text-[12px] font-light truncate'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={'flex flex-col gap-y-3'}>
                    <div className={'text-[18px] font-bold text-[#0E0E0E] ml-3'}>
                        Albums for you
                    </div>
                    <div className={'pl-3 w-full min-h-[160px] overflow-x-scroll overflow-hidden whitespace-nowrap flex gap-x-1'}>
                        <div className={'align-top active:scale-95 transition'}>
                            <Link href={'/playlist/414154513'} className={'relative block rounded-3xl h-[150px] w-[150px] bg-neutral-400 p-3 mb-1'}>
                                image
                                <div className={'absolute w-[30%] bg-[#424242] top-0 right-0 bottom-0 rounded-r-3xl'}></div>
                            </Link>
                            <div className={'max-w-[150px] px-1'}>
                                <Link href={'/playlist/414154513'} className={'text-[16px] font-semibold truncate'}>Winter Mix</Link>
                                <p className={'text-[12px] font-light truncate'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                            </div>
                        </div>
                        <div className={'align-top active:scale-95 transition'}>
                            <Link href={'/playlist/414154513'} className={'relative block rounded-3xl h-[150px] w-[150px] bg-neutral-400 p-3 mb-1'}>
                                image
                                <div className={'absolute w-[30%] bg-[#424242] top-0 right-0 bottom-0 rounded-r-3xl'}></div>
                            </Link>
                            <div className={'max-w-[150px] px-1'}>
                                <Link href={'/playlist/414154513'} className={'text-[16px] font-semibold truncate'}>Winter Mix</Link>
                                <p className={'text-[12px] font-light truncate'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                            </div>
                        </div>
                        <div className={'align-top active:scale-95 transition'}>
                            <Link href={'/playlist/414154513'} className={'relative block rounded-3xl h-[150px] w-[150px] bg-neutral-400 p-3 mb-1'}>
                                image
                                <div className={'absolute w-[30%] bg-[#424242] top-0 right-0 bottom-0 rounded-r-3xl'}></div>
                            </Link>
                            <div className={'max-w-[150px] px-1'}>
                                <Link href={'/playlist/414154513'} className={'text-[16px] font-semibold truncate'}>Winter Mix</Link>
                                <p className={'text-[12px] font-light truncate'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'flex flex-col gap-y-3'}>
                    <div className={'flex items-center gap-x-2 ml-3'}>
                        <Link href={'/artists/42352543'} className={'w-10 h-10 bg-neutral-400 rounded-full'}></Link>
                        <Link href={'/artists/42352543'} className={'text-[20px] font-bold text-[#0E0E0E]'}>Night Lovell</Link>
                    </div>
                    <div className={'pl-3 w-full min-h-[160px] overflow-x-scroll overflow-hidden whitespace-nowrap flex gap-x-1'}>
                        <div className={'align-top active:scale-95 transition'}>
                            <Link href={'/playlist/414154513'} className={'relative block rounded-3xl h-[150px] w-[150px] bg-neutral-400 p-3 mb-1'}>
                                image

                            </Link>
                            <div className={'max-w-[150px] px-1'}>
                                <Link href={'/playlist/414154513'} className={'text-[16px] font-semibold truncate'}>Winter Mix</Link>
                                <p className={'text-[12px] font-light truncate'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                            </div>
                        </div>
                        <div className={'align-top active:scale-95 transition'}>
                            <Link href={'/playlist/414154513'} className={'relative block rounded-3xl h-[150px] w-[150px] bg-neutral-400 p-3 mb-1'}>
                                image

                            </Link>
                            <div className={'max-w-[150px] px-1'}>
                                <Link href={'/playlist/414154513'} className={'text-[16px] font-semibold truncate'}>Winter Mix</Link>
                                <p className={'text-[12px] font-light truncate'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                            </div>
                        </div>
                        <div className={'align-top active:scale-95 transition'}>
                            <Link href={'/playlist/414154513'} className={'relative block rounded-3xl h-[150px] w-[150px] bg-neutral-400 p-3 mb-1'}>
                                image

                            </Link>
                            <div className={'max-w-[150px] px-1'}>
                                <Link href={'/playlist/414154513'} className={'text-[16px] font-semibold truncate'}>Winter Mix</Link>
                                <p className={'text-[12px] font-light truncate'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={'absolute bottom-2 left-0 right-0 text-center text-[#424242] mr-3'}>
                    <p className={'text-[12px]'}>Didn't find anything for yourself?</p>
                    <p className={'text-[12px]'}>Try our smart (common) search</p>
                </div>

            </div>
        ) : (
            <div className={'h-full px-3 py-5'}>
                Loading...

            </div>

        )
    );
};

export default UserDataLayout;