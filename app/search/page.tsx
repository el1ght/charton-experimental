interface SearchProps {
    searchParams: {
        title: string;
    }
}

const Search = async ({ searchParams }: SearchProps) => {
    return (
        <div className={'p-6 h-full'}>
            <h2 className={'text-black text-lg font-semibold'}>Search</h2>

        </div>
    );
};

export default Search;