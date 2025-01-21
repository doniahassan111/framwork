import React from 'react'
import Heading from '../Heading/Heading'
import avatar from '../assets/img/avatar1.svg'
function Home() {
    return (
        <>
            <img src={avatar} className='w-1/6 mx-auto p-1' alt='' />
            <Heading text={'start freamework'} />
            <h6 className='p-2 text-white'>Graphic Artist - Web Designer - Illustrator</h6>
        </>
    )
}

export default Home