import LikedWidget from "@/components/LikedWidget";
import {FaPlay} from "react-icons/fa6";
import UserDataLayout from "@/components/UserDataLayout";
import {TabProvider} from "@/contexts/TabContext";

export default function Home() {
  return (
      <TabProvider>
          <UserDataLayout />
      </TabProvider>
  );
}
