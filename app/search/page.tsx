import SearchInput from "@/components/SearchInput";
// import SearchContent from "@/components/SearchContent";

interface SearchProps {
    searchParams: {
        title: string;
    }
}

export const revalidate = 0;

const Search = () => {

    return (
        <div className={'px-3 py-5 box flex flex-col gap-y-0.5'}>
            <div className={'flex justify-center items-center flex-col'}>
                <lord-icon
                    src="https://cdn.lordicon.com/xwvkumdr.json"
                    trigger="in"
                    delay="2000"
                    colors="primary:#b4b4b4,secondary:#e4e4e4,tertiary:#000000"
                    className={'w-[150px] h-[150px]'}>
                </lord-icon>

                <h2 className={'text-center text-[1.2rem] font-bold mb-4'}>Search</h2>
            </div>
            <SearchInput />
            {/*<div>*/}
            {/*    <SearchContent songs={mockSongs} />*/}
            {/*</div>*/}
        </div>
    );
};

export default Search;