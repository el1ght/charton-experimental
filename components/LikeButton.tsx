'use client'

import {FaHeart} from "react-icons/fa6";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import toast from "react-hot-toast";

interface LikeButtonProps {
    songId: string;
}

const LikeButton: React.FC<LikeButtonProps> = ({
    songId
}) => {
    const router = useRouter();

    const [isLiked, setIsLiked] = useState(false);

    const Icon = isLiked ? AiFillHeart : AiOutlineHeart;

    // useEffect(() => {
    //     if (!user?.id){
    //         return;
    //     }
    // }, [songId, user?.id]);

    const handleLike = async () => {
        // if (!user) {
        //     return authModal.onOpen();
        // }

        if (isLiked) {
            setIsLiked(false);
        } else {
            setIsLiked(true);
            toast.success('Liked!')
        }

        router.refresh();
    }

    return (
        <button onClick={handleLike} className={'hover:opacity-75 transition'}>
            <Icon size={22} />
        </button>
    );
};

export default LikeButton;