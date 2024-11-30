

import Image from "next/image";
import {IoSunny} from "react-icons/io5";
import {FaMoon} from "react-icons/fa";
import {backButton, init} from "@telegram-apps/sdk-react";



const Page = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return (
        <div className={'relative px-3 py-5 box flex flex-col gap-y-4 text-color'}>
            <div className={'flex flex-col justify-center items-center gap-y-1 '}>
                <div className={'p-1.5 border-2 border-[#ddd] bg-[#424242]/[.3] rounded-full '}>
                    <Image className={'w-[100px] h-[100px] rounded-full'} src={'/images/favBg-4.jpg'} alt={'image'} width={50} height={50} />
                </div>

                <div className={'text-center'}>
                    <h2 className={'text-center text-[1.2rem] font-bold subtitle-text-color'}>Hey, <span className={'text-color'}>Чекан</span></h2>
                    <p className={'subtitle-text-color'}>@el1ght</p>
                </div>
            </div>

            <div className={'flex justify-center items-center'}>
                <div className={'min-w-[103px] grow flex flex-col justify-center items-center p-3 rounded-2xl section-bg-color'}>
                    <h3 className={'text-[13px] subtitle-text-color leading-5'}>Total</h3>
                    <p className={'font-bold leading-5 text-color'}>20.2h</p>
                </div>
                <div className={'grow flex flex-col justify-center items-center px-2 py-3 rounded-2xl section-bg-color'}>
                    <h3 className={'text-[13px] subtitle-text-color leading-5'}>Subscription</h3>
                    <p className={'font-bold leading-5 text-color'}>PRO</p>
                </div>
                <div className={' min-w-[103px] grow flex flex-col justify-center items-center p-3 rounded-2xl section-bg-color'}>
                    <h3 className={'text-[13px] subtitle-text-color leading-5'}>Friends</h3>
                    <p className={'font-bold leading-5 text-color'}>134</p>
                </div>
            </div>

            <h2 className={'text-[22px] font-bold mt-1'}>Followed Artists </h2>

            <div className={'flex gap-x-1 overflow-hidden'}>
                <div className={'text-center flex flex-col items-center p-1'}>
                    <div className={'w-20 h-20 bg-neutral-400 rounded-full'}></div>
                    <p className={'text-[12px] max-w-[80px] truncate mt-1 text-color'}>Lana Del Rey</p>
                </div>

            </div>

            <h2 className={'text-[22px] font-bold mt-1 text-color'}>Latest </h2>

            <div className={'flex h-[300px]'}>
                <div className={'grow section-bg-color rounded-3xl p-3 text-color'}>
                    wtf
                </div>
                <div className={'grow section-bg-color rounded-3xl p-3 text-color'}>
                    wtf
                </div>
            </div>
        </div>


    );
};

export default Page;