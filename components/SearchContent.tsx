"use client"

import {Song} from "@/types";

interface SearchContentProps {
    songs: Song[];
}

const SearchContent: React.FC<SearchContentProps> = ({
    songs
}) => {
    if (songs.length === 0) {
        return (
            <div>
                No songs found
            </div>
        )
    }

    return (
        <div>
            Search Content
        </div>
    );
};

export default SearchContent;