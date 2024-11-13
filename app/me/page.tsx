import Image from "next/image";
import {IoSunny} from "react-icons/io5";
import {FaMoon} from "react-icons/fa";

export const revalidate = 0;

const Liked = () => {
    const Icon = true ? FaMoon : IoSunny

    return (
        <div className={'relative px-3 py-5 box flex flex-col gap-y-4'}>
            <button className={'p-6 bg-[#424242]/[.3] transition active:bg-[#fff]/[100] shadow-md flex justify-center items-center absolute right-4 top-5 rounded-full'}>
                <Icon size={20} />
            </button>
            <div className={'flex flex-col justify-center items-center gap-y-1'}>
                <div className={'p-1.5 border-2 border-[#ddd] bg-[#424242]/[.3] rounded-3xl'}>
                    <Image className={'w-[100px] h-[100px] rounded-3xl'} src={'/images/favBg-4.jpg'} alt={'image'} width={50} height={50} />
                </div>

                <div className={'text-center'}>
                    <h2 className={'text-center text-[1.2rem] font-bold text-[#424242]/[.6]'}>Hey, <span className={'text-black'}>Чекан</span></h2>
                    <p className={'text-[#424242]/[.6]'}>@el1ght</p>
                </div>
            </div>

            <div className={'flex justify-center items-center'}>
                <div className={'min-w-[103px] grow flex flex-col justify-center items-center p-3 rounded-2xl bg-[#B9B9B9]/[.5]'}>
                    <h3 className={'text-[13px] text-[#424242] leading-5'}>Total</h3>
                    <p className={'font-bold leading-5'}>20.2h</p>
                </div>
                <div className={'grow flex flex-col justify-center items-center px-2 py-3 rounded-2xl bg-[#B9B9B9]/[.5]'}>
                    <h3 className={'text-[13px] text-[#424242] leading-5'}>Subscription</h3>
                    <p className={'font-bold leading-5'}>PRO</p>
                </div>
                <div className={' min-w-[103px] grow flex flex-col justify-center items-center p-3 rounded-2xl bg-[#B9B9B9]/[.5]'}>
                    <h3 className={'text-[13px] text-[#424242] leading-5'}>Friends</h3>
                    <p className={'font-bold leading-5'}>134</p>
                </div>
            </div>

            <h2 className={'text-[22px] font-bold mt-1'}>Followed Artists </h2>

            <div className={'flex gap-x-1 overflow-hidden'}>
                <div className={'text-center flex flex-col items-center p-1'}>
                    <div className={'w-20 h-20 bg-neutral-400 rounded-full'}></div>
                    <p className={'text-[12px] max-w-[80px] truncate mt-1'}>Lana Del Rey</p>
                </div>

            </div>

            <h2 className={'text-[22px] font-bold mt-1'}>Latest </h2>

            <div className={'flex h-[300px]'}>
                <div className={'grow bg-[#B9B9B9]/[.5] rounded-3xl p-3'}>
                    wtf
                </div>
                <div className={'grow bg-[#B9B9B9]/[.5] rounded-3xl p-3'}>
                    wtf
                </div>
            </div>
        </div>
    );
};

export default Liked;