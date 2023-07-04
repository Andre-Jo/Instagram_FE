import { Modal, ModalBody, ModalContent, ModalOverlay } from '@chakra-ui/react'
import React from 'react'
import { BsBookmark, BsBookmarkFill, BsEmojiSmile, BsThreeDots } from 'react-icons/bs'
import CommentCard from './CommentCard'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import { RiSendPlaneLine } from 'react-icons/ri'
import "./CommentModal.css"

const CommentModal = ({
    onClose,
    isOpen,
    isSaved,
    isPostLiked,
    handlePostLike,
    handleSavePost
}) => {
    return (
        <div>
            <Modal size={'4xl'} onClose={onClose} isOpen={isOpen} isCentered="isCentered">
                <ModalOverlay />
                <ModalContent>

                    <ModalBody>
                        <div className='flex h-[75vh]'>
                            <div className='w-[45%] flex flex-col justify-center'>
                                <img
                                    className='max-h-full w-full'
                                    src="data:image/png;base64,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"
                                    alt="" />
                            </div>
                            <div className='w-[55%] pl-10 relative'>
                                {/* 게시물 작성자 */}
                                <div className='flex justify-between items-center py-5'>
                                    <div className='flex items-center'>
                                        <div>
                                            <img
                                                className='w-9 h-9 rounded-full'
                                                src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg"
                                                alt="" />
                                        </div>
                                        <div className='ml-2'>
                                            <p>userName</p>
                                        </div>
                                    </div>
                                    <BsThreeDots />
                                </div>
                                {/* 댓글 */}
                                <div className='comment'>
                                    {[1, 1, 1, 1, 1, 1].map(() => <CommentCard />)}
                                </div>

                                <div className='absolute bottom-0 w-[90%]'>
                                    {/* 하단 아이콘 모음 */}
                                    <div className='flex justify-between items-center w-full py-4'>
                                        <div className='flex items-center space-x-2'>
                                            {
                                                isPostLiked
                                                    ? <AiFillHeart
                                                        className='text-2xl hover:opacity-50 cursor-pointer text-red-600'
                                                        onClick={handlePostLike} />
                                                    : <AiOutlineHeart
                                                        className='text-2xl hover:opacity-50 cursor-pointer'
                                                        onClick={handlePostLike} />
                                            }
                                            <FaRegComment className='text-xl hover:opacity-50 cursor-pointer' />
                                            <RiSendPlaneLine className='text-2xl hover:opacity-50 cursor-pointer' />
                                        </div>

                                        <div className='cursor-pointer'>
                                            {
                                                isSaved
                                                    ? <BsBookmarkFill
                                                        onClick={handleSavePost}
                                                        className='text-xl hover:opacity-50 cursor-pointer' />
                                                    : <BsBookmark
                                                        onClick={handleSavePost}
                                                        className='text-xl hover:opacity-50 cursor-pointer' />
                                            }
                                        </div>
                                    </div>

                                    {/* 게시물 하단 좋아요*/}
                                    <div className='w-full py-2'>
                                        <p>10 likes</p>
                                        <p className='opacity-50 text-sm'>1 day ago</p>
                                    </div>

                                    {/* 게시물 댓글 */}

                                    <div className='flex items-center w-full'>
                                        <BsEmojiSmile />
                                        <input className='commentInputs' type="text" placeholder="Add a comment..." />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </ModalBody>

                </ModalContent>
            </Modal>
        </div>
    )
}

export default CommentModal