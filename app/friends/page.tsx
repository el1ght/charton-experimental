'use client'

import Image from "next/image";
import toast from "react-hot-toast";

const Liked = () => {

    const base = "https://acing.music.ton/referral?7777777";

    const copylink = (e: any) => {
        navigator.clipboard.writeText(base);
        toast.success('Copied!')
    }

    return (
        <div className={'px-3 py-5 box flex flex-col gap-y-4'}>
            <div className={'flex justify-center items-center flex-col gap-y-1'}>
                <div className={'p-1.5 border-2 border-[#ddd] bg-[#424242]/[.3] rounded-3xl'}>
                    <Image className={'w-[100px] h-[100px] rounded-3xl'} src={'/images/favBg-4.jpg'} alt={'image'} width={50} height={50} />
                </div>

                <h2 className={'text-center text-[1.2rem] font-bold'}>Friends</h2>
            </div>

            <div className={'w-full p-3 bg-neutral-400 rounded-xl text-[#424242]'} onClick={copylink}>
                https://acing.music.ton/referral?7777777
            </div>
        </div>
    );
};

export default Liked;