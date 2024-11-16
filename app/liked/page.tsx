import LikedContent from "./components/LikedContent";
import Image from "next/image";
import {FaPlay, FaRepeat, FaShuffle} from "react-icons/fa6";


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

// export const revalidate = 0;

const Liked = () => {

    return (
        <div className={'px-3 py-5 box flex flex-col gap-y-8'}>
            <div className={'flex justify-center items-center flex-col gap-y-2'}>
                <div className={'p-1.5 border-2 border-[#ddd] bg-[#424242]/[.3] rounded-3xl'}>
                    <Image className={'w-[200px] h-[200px] rounded-3xl'} src={'/images/favBg-4.jpg'} alt={'image'} width={50} height={50} />
                </div>

                <h2 className={'text-center text-[1.2rem] font-bold'}>Liked Songs</h2>

                <div className={'flex flex-col items-center mb-4'}>
                    <div className={'flex gap-x-2 items-center'}>
                        <div className={'w-8 h-8 rounded-full bg-neutral-900'}></div>
                        <p className={'text-[14px]'}>Mixed by <span className={'font-semibold'}>Чекан</span></p>
                    </div>
                    <p className={'text-[13px]'}>288 tracks</p>

                </div>

                <div className={'flex items-center gap-x-5'}>
                    <button className={'w-[50px] h-[50px] bg-[#424242]/[.2] rounded-full flex items-center justify-center'}>
                        <FaRepeat size={20} />
                    </button>
                    <button className={'p-10 bg-[#424242]/[.4] rounded-full outline outline-2 outline-offset-4 outline-[#ddd]'}>
                        <FaPlay size={30} className={''} />
                    </button>
                    <button className={'w-[50px] h-[50px] bg-[#424242]/[.2] rounded-full flex items-center justify-center'}>
                        <FaShuffle size={20} />
                    </button>
                </div>


            </div>

            <LikedContent songs={mockSongs} />
        </div>
    );
};

export default Liked;