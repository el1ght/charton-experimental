import Image from "next/image";

export const revalidate = 0;

const Liked = () => {
    return (
        <div className={'px-3 py-5 box flex flex-col gap-y-0.5 h-full'}>
            <div className={'flex justify-center items-center flex-col gap-y-1'}>
                <div className={'p-1.5 border-2 border-[#ddd] bg-[#424242]/[.3] rounded-3xl'}>
                    <Image className={'w-[100px] h-[100px] rounded-3xl'} src={'/images/favBg-4.jpg'} alt={'image'} width={50} height={50} />
                </div>

                <h2 className={'text-center text-[1.2rem] font-bold mb-4'}>Hi, Чекан</h2>
            </div>

            <h3>Some Stats</h3>

            <div className={'grid grid-rows-4 grid-cols-6 h-full gap-0.5'}>
                <div className={'row-span-1 col-span-2 bg-[#B9B9B9]/[.5] rounded-3xl'}>

                </div>
                <div className={'row-span-1 col-span-2 bg-[#B9B9B9]/[.5] rounded-3xl'}>

                </div>
                <div className={'row-span-1 col-span-2 bg-[#B9B9B9]/[.5] rounded-3xl'}>

                </div>
                <div className={'row-span-3 col-span-3 bg-[#B9B9B9]/[.5] rounded-3xl'}>

                </div>
                <div className={'row-span-3 col-span-3 bg-[#B9B9B9]/[.5] rounded-3xl'}>

                </div>
            </div>
        </div>
    );
};

export default Liked;