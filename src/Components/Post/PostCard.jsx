import React, { useEffect, useState } from 'react'
import { BsThreeDots, BsBookmarkFill, BsBookmark, BsEmojiSmile } from 'react-icons/bs'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import { RiSendPlaneLine } from 'react-icons/ri'
import "./PostCard.css"
import CommentModal from '../Comment/CommentModal'
import { useDisclosure } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { likeUserPostAction, saveUserPostAction, unLikeUserPostAction, unSaveUserPostAction } from '../../Redux/Post/Action'
import { isPostLikedByUser, isSavedPost } from '../../Config/Logics'

const PostCard = ({post}) => {
    const [showDropDown, setShowDropDown] = useState(false);
    const [isPostLiked, setIsPostLiked] = useState(false);
    const [isSaved, setIsSaved] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { user } = useSelector(store => store);
    const dispatch = useDispatch();
    const token = localStorage.getItem('token');

    const data = {
        jwt: token,
        postId: post?.id
    }

    const handleSavePost = () => {
        setIsSaved(true);
        dispatch(saveUserPostAction(data));
    }
    
    const handleUnsavePost = () => {
        setIsSaved(false);
        dispatch(unSaveUserPostAction(data));
    }

    const handlePostLike = () => {
        setIsPostLiked(true);
        dispatch(likeUserPostAction(data))
    }

    const handlePostUnlike = () => {
        setIsPostLiked(false);
        dispatch(unLikeUserPostAction(data))
    }

    const handleClick = () => {
        setShowDropDown(!showDropDown);
    }

    const handleOpenCommentModal = () => {
        onOpen()
    }

    useEffect(() => {
        setIsPostLiked(isPostLikedByUser(post, user.reqUser.id))
        setIsSaved(user.reqUser.id, post.id)
    }, [post.likedByUsers, user.reqUser])

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
                        src={post?.image}
                        alt="" />
                </div>

                {/* 게시물 하단 아이콘 */}
                <div className='flex justify-between items-center w-full px-5 py-4'>
                    <div className='flex items-center space-x-2'>
                        {isPostLiked ?
                            <AiFillHeart
                                className='text-2xl hover:opacity-50 cursor-pointer text-red-600'
                                onClick={handlePostUnlike} /> :
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
                                onClick={handleUnsavePost}
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
                    {post?.likedByUsers?.length > 0 && <p>{post?.likedByUsers?.length} likes</p>}
                    {post.comments?.length > 0 && <p className='opacity-50 py-2 cursor-pointer'>view all {post.comments?.length} Comments</p>}
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