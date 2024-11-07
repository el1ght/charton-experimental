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

        const fetchSong = async () => {
            // fetch from db
            // const {data, error} = await
            // if (error) {
            //     setIsLoading(false);
            //     return toast.error(error.message);
            // }
            //
            // setSong(data as Song)
            // setIsLoading(false);
        }

        fetchSong();
    }, [id]);

    return useMemo(() => ({
        isLoading,
        song
    }), [isLoading, song])
}

export default useGetSongById;