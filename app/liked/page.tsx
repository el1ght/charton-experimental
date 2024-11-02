import LikedContent from "./components/LikedContent";

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

const Page = async () => {
    return (
        <div className={'px-3 py-4 h-full'}>
            <h2 className={'text-center text-[1.5rem] font-bold'}>Liked</h2>
            <LikedContent songs={mockSongs} />
        </div>
    );
};

export default Page;