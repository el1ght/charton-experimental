import {Song} from "@/types";

const useLoadSongUrl = (song: Song) => {
    if (!song){
        return '';
    }
    if (song.id === '1') {
        return 'https://charton-tracks.s3.eu-central-003.backblazeb2.com/Oleksandr+Ponomaryov.mp3';
    } else if (song.id === '2') {
        return 'https://f003.backblazeb2.com/file/charton-tracks/Lana-Del-Rey-%E2%80%93-Off-To-The-Races.m4a'
    }


    // const {data: songData} =

    // return songData.publicUrl;
}

export default useLoadSongUrl;