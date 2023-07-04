import React, { useState } from 'react'
import { BsThreeDots, BsBookmarkFill, BsBookmark, BsEmojiSmile } from 'react-icons/bs'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import { RiSendPlaneLine } from 'react-icons/ri'
import "./PostCard.css"
import CommentModal from '../Comment/CommentModal'
import { useDisclosure } from '@chakra-ui/react'

const PostCard = () => {
    const [showDropDown, setShowDropDown] = useState(false);
    const [isPostLiked, setIsPostLiked] = useState(false);
    const [isSaved, setIsSaved] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleSavePost = () => {
        setIsSaved(!isSaved);
    }

    const handlePostLike = () => {
        setIsPostLiked(!isPostLiked);
    }

    const handleClick = () => {
        setShowDropDown(!showDropDown);
    }

    const handleOpenCommentModal = () => {
        onOpen()
    }

    return (
        <div>
            <div className='border rounded-md w-full'>
                {/* 게시물  상단 프로필 및 아이콘*/}
                <div className='flex justify-between items-center w-full py-4 px-5'>
                    <div className='flex items-center'>
                        <img
                            className='h-12 w-12 rounded-full'
                            src="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_640.jpg"
                            alt="" />
                        <div className='pl-2'>
                            <p className='font-semibold text-sm'>userName</p>
                            <p className='font-thin text-sm'>location</p>
                        </div>
                    </div>

                    <div className='dropdown'>
                        <BsThreeDots className='dots' onClick={handleClick} />
                        <div className='dropdown-content'>
                            {showDropDown && <p className='bg-black text-white py-1 px-4 rounded-md cursor-pointer'>Delete</p>}
                        </div>
                    </div>
                </div>

                {/* 게시물 이미지 */}
                <div className='w-full'>
                    <img
                        className='w-full'
                        src="https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782_640.jpg"
                        alt="" />
                </div>

                {/* 게시물 하단 아이콘 */}
                <div className='flex justify-between items-center w-full px-5 py-4'>
                    <div className='flex items-center space-x-2'>
                        {isPostLiked ?
                            <AiFillHeart
                                className='text-2xl hover:opacity-50 cursor-pointer text-red-600'
                                onClick={handlePostLike} /> :
                            <AiOutlineHeart
                                className='text-2xl hover:opacity-50 cursor-pointer'
                                onClick={handlePostLike} />
                        }
                        <FaRegComment onClick={handleOpenCommentModal} className='text-xl hover:opacity-50 cursor-pointer' />
                        <RiSendPlaneLine className='text-2xl hover:opacity-50 cursor-pointer' />
                    </div>

                    <div className='cursor-pointer'>
                        {isSaved ?
                            <BsBookmarkFill
                                onClick={handleSavePost}
                                className='text-xl hover:opacity-50 cursor-pointer'
                            /> :
                            <BsBookmark
                                onClick={handleSavePost}
                                className='text-xl hover:opacity-50 cursor-pointer'
                            />
                        }
                    </div>
                </div>

                {/* 게시물 하단 좋아요*/}
                <div className='w-full py-2 px-5'>
                    <p>10 likes</p>
                    <p className='opacity-50 py-2 cursor-pointer'>view all 10 Comments</p>
                </div>

                {/* 게시물 댓글 */}
                <div className='border border-t w-full'>
                    <div className='flex w-full items-center px-5'>
                        <BsEmojiSmile />
                        <input className='commentInput' type="text" placeholder="Add a comment..." />
                    </div>
                </div>
            </div>

            {/* 댓글 모달 */}
            <CommentModal
                handlePostLike={handlePostLike}
                onClose={onClose}
                isOpen={isOpen}
                handleSavePost={handleSavePost}
                isPostLiked={isPostLiked}
                isSaved={isSaved}
            />
        </div>
    )
}

export default PostCard