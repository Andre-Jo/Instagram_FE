import React, { useState } from 'react'
import { IoReorderThreeOutline } from 'react-icons/io5'
import { menu } from './SidebarConfig'
import { useNavigate } from 'react-router-dom';
import CreatePostModal from '../Post/CreatePostModal';
import { useDisclosure } from '@chakra-ui/react';
import SearchComponents from '../SearchComponents/SearchComponents';

const Sidebar = () => {

    const [activeTab, setActiveTab] = useState("");
    const navigate = useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isSearchVisible, setIsSearchVisible] = useState(false);

    const handleTabClick = (title) => {
        setActiveTab(title)

        if (title === 'Search') {
            setIsSearchVisible(true);
        } else {
            setIsSearchVisible(false);
        }

        switch (title) {
            case 'Profile':
                return navigate('/username');
            case 'Home':
                return navigate('/');
            case 'Create':
                return onOpen();
        }
    }

    return (
        <div className='sticky top-0 h-[100vh] flex'>
            <div className={`flex flex-col justify-between h-full ${activeTab === 'Search' ? 'px-2' : 'px-10'}`}>
                {/* 사이드 아이콘 */}
                {<div>
                    {activeTab !== "Search" && <div className='pt-10'>
                        <img className='w-40' src="https://i.imgur.com/zqpwkLQ.png" alt='' />
                    </div>}
                    <div className='mt-10'>
                        {menu.map((item) => (
                            <div
                                onClick={() => handleTabClick(item.title)}
                                className='flex item-center mb-5 cursor-pointer text-lg'
                            >
                                {activeTab === item.title ? item.activeIcon : item.icon}
                                {activeTab !== "Search" && <p className={`${activeTab === item.title ? "font-bold" : "font-semibold"}`}>{item.title}</p>}
                            </div>
                        ))}
                    </div>
                </div>}
                <div className='flex items-center cursor-pointer pb-10'>
                    <IoReorderThreeOutline className='text-2xl' />
                    {activeTab !== "Search" && <p className='ml-5'>More</p>}
                </div>
            </div>

            <CreatePostModal onClose={onClose} isOpen={isOpen} />
            {isSearchVisible && <SearchComponents />}
        </div>
    )
}

export default Sidebar;