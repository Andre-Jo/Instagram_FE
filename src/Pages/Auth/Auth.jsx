import React from 'react'
import './Auth.css'
import SignIn from '../../Components/Rester/SignIn'
import SignUp from '../../Components/Rester/SignUp'
import { useLocation } from 'react-router-dom'

export const Auth = () => {
    const location = useLocation();

    return (
        <div>

            <div className='flex items-center justify-center h-[100vh] space-x-5'>
                <div className='relative hidden lg:block'>
                    <div className='h-[35.3rem] w-[23rem]'>
                        <img
                            className='h-full w-full'
                            src="https://res.cloudinary.com/dnbw04gbs/image/upload/v1679494374/home-phones-2x-edited_glksxn.png"
                        />
                        <div className='mobileWallpaper h-[33rem] w-[15.7rem] absolute top-6 right-3'>

                        </div>
                    </div>
                </div>
                <div className='w-[40vw] lg:w-[23vw]'>
                    {location.pathname === "/login" ? <SignIn /> : <SignUp />}
                </div>
            </div>

        </div>
    )
}