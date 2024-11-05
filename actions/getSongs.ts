import {Song} from "@/types";

const getSongs = async (): Promise<Song[]> => {
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
    ];

    return mockSongs as any;
}

export default getSongs();