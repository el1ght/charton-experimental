import SearchInput from "@/components/SearchInput";
// import SearchContent from "@/components/SearchContent";

interface SearchProps {
    searchParams: {
        title: string;
    }
}



const Search = async () => {

    return (
        <div className={'py-6 p-3 h-full'}>
            <h2 className={'text-center mb-3 text-black text-lg font-semibold'}>Search</h2>
            <SearchInput />
            {/*<div>*/}
            {/*    <SearchContent songs={mockSongs} />*/}
            {/*</div>*/}
        </div>
    );
};

export default Search;