import {Song} from "@/types";

const useLoadSongUrl = (song: Song) => {
    if (!song){
        return '';
    }

    return 'https://charton-tracks.s3.eu-central-003.backblazeb2.com/Oleksandr+Ponomaryov.mp3';

    // const {data: songData} =

    // return songData.publicUrl;
}

export default useLoadSongUrl;