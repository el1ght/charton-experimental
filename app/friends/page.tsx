'use client'

import Image from "next/image";
import toast from "react-hot-toast";
import {FiClipboard} from "react-icons/fi";
import {backButton, init} from "@telegram-apps/sdk-react";

const Friends = () => {
    // init()
    //
    // backButton.mount()
    // backButton.show()
    //
    // const off = backButton.onClick(() => {
    //     off();
    //     window.history.back();
    //     backButton.hide()
    //     backButton.unmount();
    // })

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

            <div className={'relative w-full p-3 bg-[#424242]/[.4] rounded-xl text-[#424242] text-[14px] truncate group overflow-hidden transition'} onClick={copylink}>
                https://acing.music.ton/referral?7777777
                <FiClipboard size={20} className={'absolute opacity-100 right-2 top-[50%] translate-y-[-50%] group-active:opacity-0 transition'} />
            </div>
        </div>
    );
};

export default Friends;