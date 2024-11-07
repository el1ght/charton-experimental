import LikedContent from "./components/LikedContent";
import Image from "next/image";

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

export const revalidate = 0;

const Liked = async () => {
    return (
        <div className={'px-3 py-5 box flex flex-col gap-y-4'}>
            <div className={'flex justify-center items-center flex-col gap-y-1'}>
                <div className={'p-1.5 border-2 border-[#ddd] bg-[#424242]/[.3] rounded-3xl'}>
                    <Image className={'w-[100px] h-[100px] rounded-3xl'} src={'/images/favBg-4.jpg'} alt={'image'} width={50} height={50} />
                </div>

                <h2 className={'text-center text-[1.2rem] font-bold'}>Liked Songs</h2>
            </div>

            <LikedContent songs={mockSongs} />
        </div>
    );
};

export default Liked;