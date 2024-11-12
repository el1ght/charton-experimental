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

const Liked = () => {
    return (
        <div className={'px-3 py-5 box flex flex-col gap-y-4'}>
            <div className={'flex justify-center items-center flex-col'}>
                <lord-icon
                    src="https://cdn.lordicon.com/zjhryiyb.json"
                    trigger="in"
                    delay="2000"
                    colors="primary:#242424,secondary:#ffffff,tertiary:#000000,quaternary:#848484,quinary:#b4b4b4"
                    className={'w-[150px] h-[150px]'}>
                </lord-icon>

                <h2 className={'text-center text-[1.2rem] font-bold'}>Liked Songs</h2>
            </div>

            <LikedContent songs={mockSongs} />
        </div>
    );
};

export default Liked;