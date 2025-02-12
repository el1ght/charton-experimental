import Image from 'next/image';

const Footer = () => {
    return (
        <div className={'relative min-h-[290px] bg-neutral-800 px-12'}>
            <p className={'font-medium text-neutral-400 pt-14 text-lg'}>Sorry, but...</p>
            <p className={'ml-5 font-medium text-neutral-400'}>That&apos;s all</p>
            {/*<Image className={'absolute bottom-2 right-0'} src={'./images/footerSpade.svg'} alt={'bg-image'} width={120} height={120} />*/}
        </div>
    )
}

export default Footer;