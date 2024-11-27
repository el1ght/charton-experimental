import Link from "next/link";

export default function NotFound() {
    return (
        <div className={'p-6 h-full flex items-center justify-center'}>
            <div className={'text-center'}>
                <h1 className={'text-[40px] font-bold'}>БЛЯТЬ</h1>
                <p className={'text-[20px] font-medium leading-3'}>Пизда аппке</p>
                <div className={'mt-8'}>
                    <Link className={'text-[#424242]'} href={"/"}>Go back to <span className={'font-semibold underline text-black'}>Home</span></Link>
                </div>
            </div>

        </div>
    )
}