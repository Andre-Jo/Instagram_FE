import { useEffect, useState } from 'react'
import StoryCircle from '../../Components/Story/StoryCircle'
import HomeRight from '../../Components/HomeRight/HomeRight'
import PostCard from '../../Components/Post/PostCard'
import { useDisclosure } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { findUserPostAction } from '../../Redux/Post/Action'

function HomePage() {
    const { isOpne, onOpen, onClose } = useDisclosure();
    const [userIds, setUserIds] = useState();
    const { user, post } = useSelector(store => store);
    const dispatch = useDispatch();
    const token = localStorage.getItem('token');
    
    useEffect(()=> {
        const newIds = user.reqUser?.following?.map((user) => user.id);
        setUserIds([user.reqUser?.id, ...newIds]);
    }, [user.reqUser]);

    useEffect(()=> {
        const data = {
            jwt: token,
            userIds: [userIds].join(",")
        }
        dispatch(findUserPostAction(data));
    }, [userIds, post.createdPost, post.deletedPost]);

    return (
        <div>
            <div className='mt-10 flex w-[100%] justify-center'>
                <div className='w-[44%] px-10 '>
                    <div
                        className='storyDiv flex space-x-2 border p-4 rounded-md justify-start w-full overflow-hidden'>
                        {[1, 1, 1, 1].map((item) => (
                            <StoryCircle />
                        ))}
                    </div>

                    <div className='space-y-10 w-full mt-10'>
                        {post.usersPost.length > 0 && post.usersPost.map((item) => (
                            <PostCard post={item}/>
                        ))}
                    </div>
                </div>
                <div className='w-[25%]'>
                    <HomeRight />
                </div>
            </div>
        </div>
    )
}

export default HomePage