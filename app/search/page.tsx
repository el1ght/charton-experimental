'use client'

import SearchInput from "@/components/SearchInput";
import Image from "next/image";
import {backButton, init} from "@telegram-apps/sdk-react";
// import SearchContent from "@/components/SearchContent";

interface SearchProps {
    searchParams: {
        title: string;
    }
}

// export const revalidate = 0;

const Page = () => {
    init()

    backButton.mount()
    backButton.show()

    const off = backButton.onClick(() => {
        off();
        window.history.back();
        backButton.hide()
        backButton.unmount();
    })

    return (
        <div className={'px-3 py-5 box flex flex-col'}>
            <div className={'flex justify-center items-center flex-col gap-y-1'}>
                <div className={'p-1.5 border-2 border-[#ddd] bg-[#424242]/[.3] rounded-3xl'}>
                    <Image className={'w-[100px] h-[100px] rounded-3xl'} src={'/images/favBg-4.jpg'} alt={'image'} width={50} height={50} />
                </div>

                <h2 className={'text-center text-[1.2rem] font-bold mb-4'}>Search</h2>
            </div>
            <div>
                <SearchInput />
            </div>

            {/*<div>*/}
            {/*    <SearchContent songs={mockSongs} />*/}
            {/*</div>*/}
        </div>
    );
};

export default Page;