import {useEffect, useMemo, useState} from "react";
import {Song} from "@/types";
import toast from "react-hot-toast";

const useGetSongById = (id?: string) => {
    const [isLoading, setIsLoading] = useState(false);
    const [song, setSong] = useState<Song | undefined>(undefined);

    useEffect(() => {
        if (!id) {
            return;
        }

        setIsLoading(true);

        const fetchSong = () => {
                const data = [
                    {
                        id: '1',
                        user_id: 'el1ght',
                        author: 'Ponomaryov',
                        title: 'Ukraine',
                        image_path: 'vevdkvfbdnb',
                    },
                    {
                        id: '2',
                        user_id: 'el1ght',
                        author: 'Lana Del Rey',
                        title: 'Off to the Races',
                        image_path: 'https://f003.backblazeb2.com/file/charton-thumbnails/512x512bb.webp',
                    }
                ]
            // data.map((song) => song.id === id)
            console.log(data.map((song) => song.id === id))
            // fetch from db
            // const {data, error} = await
            // if (error) {
            //     setIsLoading(false);
            //     return toast.error(error.message);
            // }
            //

            // setSong(data as Song)

            setSong(data.find((song) => song.id === id) as Song)

            setIsLoading(false);
        }

        fetchSong();
    }, [id]);

    return useMemo(() => ({
        isLoading,
        song
    }), [isLoading, song])
}

export default useGetSongById;