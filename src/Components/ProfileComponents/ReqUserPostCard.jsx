import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { FaComment } from 'react-icons/fa'
import "./ReqUserPostCard.css"

const ReqUserPostCard = () => {
  return (
    <div className='p-2'>
        <div className='post w-60 h-60'>
            <img className='cursor-pointer' src="https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782_640.jpg" alt="" />
            <div className='overlay'>
                <div className='overlay-text flex justify-between'>
                    <div>
                        <AiFillHeart></AiFillHeart> <span>298</span>
                    </div>
                    <div>
                        <FaComment></FaComment> <span>20</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ReqUserPostCard