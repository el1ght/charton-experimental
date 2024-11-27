import Image from "next/image";

export default function Loading() {
    return (
        <div className={'relative px-3 py-5 box flex flex-col gap-y-4 text-transparent'}>
            <div className={'flex flex-col justify-center items-center gap-y-1 '}>
                <div className={'p-1.5 border-2 bg-[#424242]/[.3] rounded-full animate-pulse '}>
                    <div className={'w-[100px] h-[100px] rounded-full'}></div>
                </div>

                <div className={'text-center  flex flex-col items-center'}>
                    <div className={'text-center text-[1.2rem] w-[150px] font-bold bg-[#424242]/[.3] rounded-xl leading-6 mb-1 animate-pulse'} style={{animationDelay: '100ms'}}>Mock</div>
                    <div className={'bg-[#424242]/[.3] rounded-xl w-[90px] animate-pulse delay-[200ms]'}> Mock</div>
                </div>
            </div>

            <div className={'flex justify-center items-center'}>
                <div className={'grow flex flex-col justify-center items-center p-3 rounded-2xl bg-[#424242]/[.3] animate-pulse'} style={{animationDelay: '300ms'}}>
                    <h3 className={'text-[13px] text-[#424242] leading-5 text-transparent'}>Mock</h3>
                    <p className={'font-bold leading-5'}>Mock</p>
                </div>
                <div className={'grow flex flex-col justify-center items-center px-2 py-3 rounded-2xl bg-[#424242]/[.3] animate-pulse'} style={{animationDelay: '400ms'}}>
                    <h3 className={'text-[13px] text-[#424242] leading-5 text-transparent'}>Mock</h3>
                    <p className={'font-bold leading-5'}>Mock</p>
                </div>
                <div className={'grow flex flex-col justify-center items-center p-3 rounded-2xl bg-[#424242]/[.3] animate-pulse'} style={{animationDelay: '500ms'}}>
                    <h3 className={'text-[13px] text-[#424242] leading-5 text-transparent'}>Mock</h3>
                    <p className={'font-bold leading-5'}>Mock</p>
                </div>
            </div>

            <p className={'text-[22px] font-bold mt-1 bg-[#424242]/[.3] rounded-xl animate-pulse self-start '}>Followed Artists </p>

            <div className={'flex gap-x-1 overflow-hidden'}>
                <div className={'text-center flex flex-col items-center p-1 animate-pulse '} style={{animationDelay: '200ms'}}>
                    <div className={'w-20 h-20 bg-[#424242]/[.3] rounded-full'}></div>
                    <div className={'text-[12px] max-w-[80px] truncate bg-[#424242]/[.3] rounded-xl mt-1'}>Lana Del Rey</div>
                </div>


            </div>

            <h2 className={'text-[22px] font-bold mt-1 bg-[#424242]/[.3] rounded-xl animate-pulse self-start'}>Latest </h2>

            <div className={'flex h-[300px]'}>
                <div className={'grow bg-[#424242]/[.3] rounded-3xl p-3 animate-pulse' } style={{animationDelay: '200ms'}}>
                    wtf
                </div>
                <div className={'grow bg-[#424242]/[.3] rounded-3xl p-3 animate-pulse'} style={{animationDelay: '100ms'}}>
                    wtf
                </div>
            </div>
        </div>
    )
}