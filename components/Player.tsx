'use client';

import usePlayer from "@/hooks/usePlayer";
import useGetSongById from "@/hooks/useGetSongById";
import useLoadSongUrl from "@/hooks/useLoadSongUrl";
import PlayerContent from "./PlayerContent";

const Player = () => {
    const player = usePlayer();
    const { song } = useGetSongById(player.activeId);

    const songUrl = useLoadSongUrl(song!);

    if (!player.activeId) {
        return null
    }

    // if(!song || !songUrl || !player.activeId) {
    //     return null;
    // }

    return (
        <div className={'absolute right-0 bottom-[81px] left-0 flex justify-between m-0.5'}>

            <PlayerContent
                key={songUrl}
                song={song!}
                songUrl={songUrl!}
            />

        </div>
    )
}

export default Player;