import LikedWidget from "@/components/LikedWidget";
import {FaPlay} from "react-icons/fa6";

export default function Home() {
  return (
      <div className={'p-6'}>
          <div className="grid grid-rows-8 grid-cols-5 gap-2 h-[100vh]">
              <LikedWidget name={'Liked Songs'} href={'/liked'} />
              <div className={'relative row-span-2 col-span-3 rounded-3xl overflow-hidden'}>
                  <div className={"relative group flex items-center h-full bg-cover bg-center bg-[url('../public/images/favBg-3.jpg')] overflow-hidden hover:saturate-150 transition top-left"}>
                      <div className={'relative h-full w-full bg-black/[.3]'}>
                          <p className={'truncate text-white text-left m-4 mb-0 text-sm font-medium'}>Top Charts</p>
                          <p className={'truncate text-white text-left ml-4 text-[0.6rem] max-w-[100px]'}>21 Savage, Lana Del Rey, Kendrick Lamar</p>
                      </div>
                  </div>
                  <div className={'absolute right-0.5 bottom-0.5 rounded-full p-2'}>
                      <FaPlay size={14} className={'text-black'} />
                  </div>
              </div>
              <div className={'relative row-span-6 col-span-2 rounded-3xl overflow-hidden'}>
                  <div className={"group flex items-center h-full bg-cover bg-center bg-[url('../public/images/favBg-5.jpg')] overflow-hidden hover:saturate-150 transition"}>
                      <div className={'relative h-full w-full bg-black/[.3] rounded-3xl flex flex-col items-center justify-center'}>
                          <p className={'truncate text-white text-[1.5rem] max-w-[100px] font-medium'}>YOU</p>
                          <p className={'truncate text-white text-[1.5rem] max-w-[100px] font-medium'}>MAY</p>
                          <p className={'truncate text-white text-[1.5rem] max-w-[100px] font-medium'}>LIKE</p>
                      </div>
                  </div>
              </div>
              <div className={'relative row-span-2 col-span-3 rounded-3xl overflow-hidden '}>
                  <div className={"relative group flex items-center h-full bg-cover bg-center bg-[url('../public/images/favBg-4.jpg')] overflow-hidden hover:saturate-150 transition top-left"}>
                      <div className={'relative h-full w-full bg-black/[.3]'}>
                          <p className={'truncate text-white text-left m-4 mb-0 text-sm font-medium'}>World Hottest</p>
                          <p className={'truncate text-white text-left ml-4 text-[0.6rem] max-w-[100px]'}>21 Savage, Lana Del Rey, Kendrick Lamar</p>
                      </div>
                  </div>
                  <div className={'absolute right-0.5 bottom-0.5 rounded-full p-2'}>
                      <FaPlay size={14} className={'text-black'} />
                  </div>
              </div>
              <div className={'relative row-span-2 col-span-3 rounded-3xl overflow-hidden'}>
                  <div className={"relative group flex items-center h-full bg-cover bg-center bg-[url('../public/images/favBg-1.jpg')] overflow-hidden hover:saturate-150 transition top-left"}>
                      <div className={'relative h-full w-full bg-black/[.3]'}>
                          <p className={'truncate text-white text-left m-4 mb-0 text-sm font-medium'}>Top Artists</p>
                          <p className={'truncate text-white text-left ml-4 text-[0.6rem] max-w-[100px]'}>21 Savage, Lana Del Rey, Kendrick Lamar</p>
                      </div>
                  </div>
                  <div className={'absolute right-0.5 bottom-0.5 rounded-full p-2'}>
                      <FaPlay size={14} className={'text-black'} />
                  </div>
              </div>
          </div>

      </div>

  );
}
