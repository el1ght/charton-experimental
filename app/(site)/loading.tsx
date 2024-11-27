import Link from "next/link";
import SongItem from "@/components/SongItem";


const Loading = () => {
    return (
        <div className={'relative py-5 pb-20 box flex flex-col gap-y-8 text-transparent'} >

            <div className={'p-3 rounded-xl flex justify-between mx-3 bg-[#424242]/[.3] '}>
                <div className={'flex gap-x-2 items-center cursor-pointer'}>
                    <div>
                        <h4 className={'font-semibold  text-transparent'}>Charton Community</h4>
                        <p className={'text-[14px]  text-transparent'}>1,000,000,000 </p>
                    </div>
                </div>
            </div>

            <div className={'flex flex-col gap-y-3'}>
                <div className={'text-[20px] font-bold ml-3 bg-[#424242]/[.3] rounded-xl self-start'}>
                    Hey, Чекан, wanna smth special?
                </div>
                <div className={'pl-3 w-full min-h-[160px] overflow-x-scroll overflow-hidden whitespace-nowrap flex gap-x-1'}>
                    <div className={'align-top active:scale-95 transition'}>
                        <Link href={'/playlist/414154513'} className={'block rounded-3xl h-[150px] w-[150px] bg-[#424242]/[.3] p-3 mb-1'}>
                            image
                        </Link>
                        <div className={'max-w-[150px] px-1'}>
                            <Link href={'/playlist/414154513'} className={'text-[16px] font-semibold truncate bg-[#424242]/[.3] rounded-xl'}>World Top</Link>
                            <p className={'text-[12px] font-light truncate bg-[#424242]/[.3] rounded-xl'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                        </div>
                    </div>
                    <div className={'align-top active:scale-95 transition'}>
                        <Link href={'/playlist/414154513'} className={'block rounded-3xl h-[150px] w-[150px] bg-[#424242]/[.3] p-3 mb-1'}>
                            image
                        </Link>
                        <div className={'max-w-[150px] px-1'}>
                            <Link href={'/playlist/414154513'} className={'text-[16px] font-semibold truncate bg-[#424242]/[.3] rounded-xl'}>Greatest Hits</Link>
                            <p className={'text-[12px] font-light truncate bg-[#424242]/[.3] rounded-xl'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                        </div>
                    </div>
                    <div className={'align-top active:scale-95 transition'}>
                        <Link href={'/playlist/414154513'} className={'block rounded-3xl h-[150px] w-[150px] bg-[#424242]/[.3] p-3 mb-1'}>
                            image
                        </Link>
                        <div className={'max-w-[150px] px-1'}>
                            <Link href={'/playlist/414154513'} className={'text-[16px] font-semibold truncate bg-[#424242]/[.3] rounded-xl'}>Winter Mix</Link>
                            <p className={'text-[12px] font-light truncate bg-[#424242]/[.3] rounded-xl'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={'flex flex-col gap-y-3'}>
                <div className={'text-[18px] font-bold ml-3 bg-[#424242]/[.3] self-start rounded-xl'}>
                    Based on your preferences
                </div>
                <div className={'pl-3 w-full min-h-[160px] overflow-x-scroll overflow-hidden whitespace-nowrap flex gap-x-1'}>
                    <div className={'align-top active:scale-95 transition'}>
                        <Link href={'/playlist/414154513'} className={'block rounded-3xl h-[150px] w-[150px] bg-[#424242]/[.3] p-3 mb-1'}>
                            image
                        </Link>
                        <div className={'max-w-[150px] px-1'}>
                            <Link href={'/playlist/414154513'} className={'text-[16px] font-semibold truncate bg-[#424242]/[.3] rounded-xl'}>Winter Mix</Link>
                            <p className={'text-[12px] font-light truncate bg-[#424242]/[.3] rounded-xl'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                        </div>
                    </div>
                    <div className={'align-top active:scale-95 transition'}>
                        <Link href={'/playlist/414154513'} className={'block rounded-3xl h-[150px] w-[150px] bg-[#424242]/[.3] p-3 mb-1'}>
                            image
                        </Link>
                        <div className={'max-w-[150px] px-1'}>
                            <Link href={'/playlist/414154513'} className={'text-[16px] font-semibold truncate bg-[#424242]/[.3] rounded-xl'}>Winter Mix</Link>
                            <p className={'text-[12px] font-light truncate bg-[#424242]/[.3] rounded-xl'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                        </div>
                    </div>
                    <div className={'align-top active:scale-95 transition'}>
                        <Link href={'/playlist/414154513'} className={'block rounded-3xl h-[150px] w-[150px] bg-[#424242]/[.3] p-3 mb-1'}>
                            image
                        </Link>
                        <div className={'max-w-[150px] px-1'}>
                            <Link href={'/playlist/414154513'} className={'text-[16px] font-semibold truncate bg-[#424242]/[.3] rounded-xl'}>Winter Mix</Link>
                            <p className={'text-[12px] font-light truncate bg-[#424242]/[.3] rounded-xl'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={'flex flex-col gap-y-3'}>
                <div className={'text-[18px] font-bold ml-3 bg-[#424242]/[.3] rounded-xl self-start'}>
                    Miss you
                </div>
                <div className={'pl-3 w-full min-h-[160px] overflow-x-scroll overflow-hidden whitespace-nowrap flex gap-x-1'}>
                    <div className={'align-top active:scale-95 transition'}>
                        <Link href={'/playlist/414154513'} className={'relative block rounded-3xl h-[150px] w-[150px] bg-[#424242]/[.3] p-3 mb-1'}>
                            image
                        </Link>
                        <div className={'max-w-[150px] px-1'}>
                            <Link href={'/playlist/414154513'} className={'text-[16px] font-semibold truncate bg-[#424242]/[.3] rounded-xl'}>Winter Mix</Link>
                            <p className={'text-[12px] font-light truncate bg-[#424242]/[.3] rounded-xl'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                        </div>
                    </div>
                    <div className={'align-top active:scale-95 transition'}>
                        <Link href={'/playlist/414154513'} className={' relative block rounded-3xl h-[150px] w-[150px] bg-[#424242]/[.3] p-3 mb-1'}>
                            image
                        </Link>
                        <div className={'max-w-[150px] px-1'}>
                            <Link href={'/playlist/414154513'} className={'text-[16px] font-semibold truncate bg-[#424242]/[.3] rounded-xl'}>Winter Mix</Link>
                            <p className={'text-[12px] font-light truncate bg-[#424242]/[.3] rounded-xl'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                        </div>
                    </div>
                    <div className={'align-top active:scale-95 transition'}>
                        <Link href={'/playlist/414154513'} className={'relative block rounded-3xl h-[150px] w-[150px] bg-[#424242]/[.3] p-3 mb-1'}>
                            image
                        </Link>
                        <div className={'max-w-[150px] px-1'}>
                            <Link href={'/playlist/414154513'} className={'text-[16px] font-semibold truncate bg-[#424242]/[.3] rounded-xl'}>Winter Mix</Link>
                            <p className={'text-[12px] font-light truncate bg-[#424242]/[.3] rounded-xl'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'flex flex-col gap-y-3'}>
                <div className={'flex items-center gap-x-2 ml-3'}>
                    <Link href={'/artists/42352543'} className={'w-10 h-10 bg-[#424242]/[.3] rounded-full'}></Link>
                    <Link href={'/artists/42352543'} className={'text-[20px] font-bold bg-[#424242]/[.3] rounded-xl'}>LXST CXNTURY</Link>
                </div>
                <div className={'pl-3 w-full min-h-[160px] overflow-x-scroll overflow-hidden whitespace-nowrap flex gap-x-1'}>
                    <div className={'align-top active:scale-95 transition'}>
                        <Link href={'/playlist/414154513'} className={'block rounded-3xl h-[150px] w-[150px] bg-[#424242]/[.3] p-3 mb-1'}>
                            image
                        </Link>
                        <div className={'max-w-[150px] px-1'}>
                            <Link href={'/playlist/414154513'} className={'text-[16px] font-semibold truncate bg-[#424242]/[.3] rounded-xl'}>Winter Mix</Link>
                            <p className={'text-[12px] font-light truncate bg-[#424242]/[.3] rounded-xl'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                        </div>
                    </div>
                    <div className={'align-top active:scale-95 transition'}>
                        <Link href={'/playlist/414154513'} className={'block rounded-3xl h-[150px] w-[150px] bg-[#424242]/[.3] p-3 mb-1'}>
                            image
                        </Link>
                        <div className={'max-w-[150px] px-1'}>
                            <Link href={'/playlist/414154513'} className={'text-[16px] font-semibold truncate bg-[#424242]/[.3] rounded-xl'}>Winter Mix</Link>
                            <p className={'text-[12px] font-light truncate bg-[#424242]/[.3] rounded-xl'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                        </div>
                    </div>
                    <div className={'align-top active:scale-95 transition'}>
                        <Link href={'/playlist/414154513'} className={'block rounded-3xl h-[150px] w-[150px] bg-[#424242]/[.3] p-3 mb-1'}>
                            image
                        </Link>
                        <div className={'max-w-[150px] px-1'}>
                            <Link href={'/playlist/414154513'} className={'text-[16px] font-semibold truncate bg-[#424242]/[.3] rounded-xl'}>Winter Mix</Link>
                            <p className={'text-[12px] font-light truncate bg-[#424242]/[.3] rounded-xl'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'flex flex-col gap-y-3'}>
                <div className={'text-[18px] font-bold bg-[#424242]/[.3] rounded-xl self-start ml-3'}>
                    From your playlists
                </div>
                <div className={'pl-3 w-full min-h-[160px] overflow-x-scroll overflow-hidden whitespace-nowrap flex gap-x-1'}>
                    <div className={'align-top active:scale-95 transition'}>
                        <Link href={'/playlist/414154513'} className={'block rounded-3xl h-[150px] w-[150px] bg-[#424242]/[.3] p-3 mb-1'}>
                            image
                        </Link>
                        <div className={'max-w-[150px] px-1'}>
                            <Link href={'/playlist/414154513'} className={'text-[16px] font-semibold truncate bg-[#424242]/[.3] rounded-xl'}>Winter Mix</Link>
                            <p className={'text-[12px] font-light truncate bg-[#424242]/[.3] rounded-xl'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                        </div>
                    </div>
                    <div className={'align-top active:scale-95 transition'}>
                        <Link href={'/playlist/414154513'} className={'block rounded-3xl h-[150px] w-[150px] bg-[#424242]/[.3] p-3 mb-1'}>
                            image
                        </Link>
                        <div className={'max-w-[150px] px-1'}>
                            <Link href={'/playlist/414154513'} className={'text-[16px] font-semibold truncate bg-[#424242]/[.3] rounded-xl'}>Winter Mix</Link>
                            <p className={'text-[12px] font-light truncate bg-[#424242]/[.3] rounded-xl'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                        </div>
                    </div>
                    <div className={'align-top active:scale-95 transition'}>
                        <Link href={'/playlist/414154513'} className={'block rounded-3xl h-[150px] w-[150px] bg-[#424242]/[.3] p-3 mb-1'}>
                            image
                        </Link>
                        <div className={'max-w-[150px] px-1'}>
                            <Link href={'/playlist/414154513'} className={'text-[16px] font-semibold truncate bg-[#424242]/[.3] rounded-xl'}>Winter Mix</Link>
                            <p className={'text-[12px] font-light truncate bg-[#424242]/[.3] rounded-xl'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={'flex flex-col gap-y-3 mx-3'}>
                <div className={'text-[18px] font-bold flex justify-between'}>
                    <h3 className={'bg-[#424242]/[.3] rounded-xl'}>Mix for you</h3>
                    <Link href={'/mix'} className={'font-normal text-[12px] flex items-center justify-center py-1 px-3 bg-[#424242]/[.3] rounded-xl'}>
                        More
                    </Link>
                </div>
                <div className={'flex flex-col gap-y-1'}>
                    <div className={'bg-[#424242]/[.3] rounded-xl py-6'}>

                    </div>
                    <div className={'bg-[#424242]/[.3] rounded-xl py-6'}>

                    </div>
                    <div className={'bg-[#424242]/[.3] rounded-xl py-6'}>

                    </div>
                </div>
            </div>
            <div className={'flex flex-col gap-y-3'}>
                <div className={'text-[18px] font-bold bg-[#424242]/[.3] rounded-xl self-start ml-3'}>
                    Playlists for you
                </div>
                <div className={'pl-3 w-full min-h-[160px] overflow-x-scroll overflow-hidden whitespace-nowrap flex gap-x-1'}>
                    <div className={'align-top active:scale-95 transition'}>
                        <Link href={'/playlist/414154513'} className={'block rounded-3xl h-[150px] w-[150px] bg-[#424242]/[.3] p-3 mb-1'}>
                            image
                        </Link>
                        <div className={'max-w-[150px] px-1'}>
                            <Link href={'/playlist/414154513'} className={'text-[16px] font-semibold truncate bg-[#424242]/[.3] rounded-xl'}>Winter Mix</Link>
                            <p className={'text-[12px] font-light truncate bg-[#424242]/[.3] rounded-xl'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                        </div>
                    </div>
                    <div className={'align-top active:scale-95 transition'}>
                        <Link href={'/playlist/414154513'} className={'block rounded-3xl h-[150px] w-[150px] bg-[#424242]/[.3] p-3 mb-1'}>
                            image
                        </Link>
                        <div className={'max-w-[150px] px-1'}>
                            <Link href={'/playlist/414154513'} className={'text-[16px] font-semibold truncate bg-[#424242]/[.3] rounded-xl'}>Winter Mix</Link>
                            <p className={'text-[12px] font-light truncate bg-[#424242]/[.3] rounded-xl'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                        </div>
                    </div>
                    <div className={'align-top active:scale-95 transition'}>
                        <Link href={'/playlist/414154513'} className={'block rounded-3xl h-[150px] w-[150px] bg-[#424242]/[.3] p-3 mb-1'}>
                            image
                        </Link>
                        <div className={'max-w-[150px] px-1'}>
                            <Link href={'/playlist/414154513'} className={'text-[16px] font-semibold truncate bg-[#424242]/[.3] rounded-xl'}>Winter Mix</Link>
                            <p className={'text-[12px] font-light truncate bg-[#424242]/[.3] rounded-xl'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'flex flex-col gap-y-3'}>
                <div className={'flex items-center gap-x-2 ml-3'}>
                    <div className={'w-10 h-10 bg-[#424242]/[.3] rounded-xl'}></div>
                    <div className={'flex flex-col gap-y-1'}>
                        <p className={'uppercase text-[16px] font-normal bg-[#424242]/[.3] rounded-xl leading-4 '}>Similar to</p>
                        <h4 className={'text-[20px] font-bold leading-5 bg-[#424242]/[.3] rounded-xl'}>LXST CXNTURY</h4>
                    </div>
                </div>
                <div className={'pl-3 w-full min-h-[160px] overflow-x-scroll overflow-hidden whitespace-nowrap flex gap-x-1'}>
                    <div className={'align-top active:scale-95 transition'}>
                        <Link href={'/playlist/414154513'} className={'block rounded-3xl h-[150px] w-[150px] bg-[#424242]/[.3] p-3 mb-1'}>
                            image
                        </Link>
                        <div className={'max-w-[150px] px-1'}>
                            <Link href={'/playlist/414154513'} className={'text-[16px] font-semibold truncate bg-[#424242]/[.3] rounded-xl'}>Winter Mix</Link>
                            <p className={'text-[12px] font-light truncate bg-[#424242]/[.3] rounded-xl'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                        </div>
                    </div>
                    <div className={'align-top active:scale-95 transition'}>
                        <Link href={'/playlist/414154513'} className={'block rounded-3xl h-[150px] w-[150px] bg-[#424242]/[.3] p-3 mb-1'}>
                            image
                        </Link>
                        <div className={'max-w-[150px] px-1'}>
                            <Link href={'/playlist/414154513'} className={'text-[16px] font-semibold truncate bg-[#424242]/[.3] rounded-xl'}>Winter Mix</Link>
                            <p className={'text-[12px] font-light truncate bg-[#424242]/[.3] rounded-xl'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                        </div>
                    </div>
                    <div className={'align-top active:scale-95 transition'}>
                        <Link href={'/playlist/414154513'} className={'block rounded-3xl h-[150px] w-[150px] bg-[#424242]/[.3] p-3 mb-1'}>
                            image
                        </Link>
                        <div className={'max-w-[150px] px-1'}>
                            <Link href={'/playlist/414154513'} className={'text-[16px] font-semibold truncate bg-[#424242]/[.3] rounded-xl'}>Winter Mix</Link>
                            <p className={'text-[12px] font-light truncate bg-[#424242]/[.3] rounded-xl'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={'flex flex-col gap-y-3'}>
                <div className={'text-[18px] font-bold bg-[#424242]/[.3] rounded-xl self-start ml-3'}>
                    Albums for you
                </div>
                <div className={'pl-3 w-full min-h-[160px] overflow-x-scroll overflow-hidden whitespace-nowrap flex gap-x-1'}>
                    <div className={'align-top active:scale-95 transition'}>
                        <Link href={'/playlist/414154513'} className={'relative block rounded-3xl h-[150px] w-[150px] bg-[#424242]/[.3] p-3 mb-1'}>
                            image
                        </Link>
                        <div className={'max-w-[150px] px-1'}>
                            <Link href={'/playlist/414154513'} className={'text-[16px] font-semibold truncate bg-[#424242]/[.3] rounded-xl'}>Winter Mix</Link>
                            <p className={'text-[12px] font-light truncate bg-[#424242]/[.3] rounded-xl'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                        </div>
                    </div>
                    <div className={'align-top active:scale-95 transition'}>
                        <Link href={'/playlist/414154513'} className={'relative block rounded-3xl h-[150px] w-[150px] bg-[#424242]/[.3] p-3 mb-1'}>
                            image
                        </Link>
                        <div className={'max-w-[150px] px-1'}>
                            <Link href={'/playlist/414154513'} className={'text-[16px] font-semibold truncate bg-[#424242]/[.3] rounded-xl'}>Winter Mix</Link>
                            <p className={'text-[12px] font-light truncate bg-[#424242]/[.3] rounded-xl'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                        </div>
                    </div>
                    <div className={'align-top active:scale-95 transition'}>
                        <Link href={'/playlist/414154513'} className={'relative block rounded-3xl h-[150px] w-[150px] bg-[#424242]/[.3] p-3 mb-1'}>
                            image
                        </Link>
                        <div className={'max-w-[150px] px-1'}>
                            <Link href={'/playlist/414154513'} className={'text-[16px] font-semibold truncate bg-[#424242]/[.3] rounded-xl'}>Winter Mix</Link>
                            <p className={'text-[12px] font-light truncate bg-[#424242]/[.3] rounded-xl'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'flex flex-col gap-y-3'}>
                <div className={'flex items-center gap-x-2 ml-3'}>
                    <Link href={'/artists/42352543'} className={'w-10 h-10 bg-[#424242]/[.3] rounded-full'}></Link>
                    <Link href={'/artists/42352543'} className={'text-[20px] font-bold bg-[#424242]/[.3] rounded-xl'}>Night Lovell</Link>
                </div>
                <div className={'pl-3 w-full min-h-[160px] overflow-x-scroll overflow-hidden whitespace-nowrap flex gap-x-1'}>
                    <div className={'align-top active:scale-95 transition'}>
                        <Link href={'/playlist/414154513'} className={'relative block rounded-3xl h-[150px] w-[150px] bg-[#424242]/[.3] p-3 mb-1'}>
                            image

                        </Link>
                        <div className={'max-w-[150px] px-1'}>
                            <Link href={'/playlist/414154513'} className={'text-[16px] font-semibold truncate bg-[#424242]/[.3] rounded-xl'}>Winter Mix</Link>
                            <p className={'text-[12px] font-light truncate bg-[#424242]/[.3] rounded-xl'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                        </div>
                    </div>
                    <div className={'align-top active:scale-95 transition'}>
                        <Link href={'/playlist/414154513'} className={'relative block rounded-3xl h-[150px] w-[150px] bg-[#424242]/[.3] p-3 mb-1'}>
                            image

                        </Link>
                        <div className={'max-w-[150px] px-1'}>
                            <Link href={'/playlist/414154513'} className={'text-[16px] font-semibold truncate bg-[#424242]/[.3] rounded-xl'}>Winter Mix</Link>
                            <p className={'text-[12px] font-light truncate bg-[#424242]/[.3] rounded-xl'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                        </div>
                    </div>
                    <div className={'align-top active:scale-95 transition'}>
                        <Link href={'/playlist/414154513'} className={'relative block rounded-3xl h-[150px] w-[150px] bg-[#424242]/[.3] p-3 mb-1'}>
                            image

                        </Link>
                        <div className={'max-w-[150px] px-1'}>
                            <Link href={'/playlist/414154513'} className={'text-[16px] font-semibold truncate bg-[#424242]/[.3] rounded-xl'}>Winter Mix</Link>
                            <p className={'text-[12px] font-light truncate bg-[#424242]/[.3] rounded-xl'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={'absolute bottom-2 left-0 right-0 text-center mx-3'}>
                <p className={'text-[12px] bg-[#424242]/[.3] rounded-xl inline-block'}>Didn't find anything for yourself?</p>
            </div>

        </div>
    );
};

export default Loading;