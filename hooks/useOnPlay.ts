import {Song} from "@/types";
import usePlayer from "./usePlayer";

const useOnPlay = (songs: Song[]) => {
    const player = usePlayer();

    const onPlay = (id: string) => {
        // if (!user) {
        //     return authModal.onOpen();
        // }

        console.log(songs.map((song) => song.id))
        player.setId(id);
        player.setIds(songs.map((song) => song.id))
    }

    return onPlay;
}

export default useOnPlay;