import Image from "next/image";

export const revalidate = 0;

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'lord-icon': { src: string; trigger: string; delay: string; colors: string; className: string; }
        }
    }
}

const Liked = () => {
    return (
        <div className={'px-3 py-5 box flex flex-col gap-y-4'}>
            <div className={'flex justify-center items-center flex-col'}>
                <lord-icon
                    src="https://cdn.lordicon.com/xcxzayqr.json"
                    trigger="in"
                    delay="100"
                    colors="primary:#545454,secondary:#848484"
                    className={'w-[150px] h-[150px]'}>
                </lord-icon>

                <h2 className={'text-center text-[1.2rem] font-bold'}>Me</h2>
            </div>
        </div>
    );
};

export default Liked;