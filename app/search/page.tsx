import SearchInput from "@/components/SearchInput";

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
        </div>
    );
};

export default Search;