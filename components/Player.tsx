'use client';

import usePlayer from "@/hooks/usePlayerStore";
import useGetSongById from "@/hooks/useGetSongById";
import PlayerContent from "@/components/PlayerContent";

const Player = () => {
    const player = usePlayer();
    const { song } = useGetSongById(player.activeId);
    const songUrl = song ? song.url : '';

    if (!song || !songUrl || !player.activeId){
        return null;
    }

    return (
        <div className={'absolute right-[1px] bottom-[89px] left-[1px] flex justify-between m-0.5 overflow-hidden'}>
            <PlayerContent key={songUrl} song={song} songUrl={songUrl} />
        </div>
    )
}

export default Player;