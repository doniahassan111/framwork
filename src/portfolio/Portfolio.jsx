// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import Heading from '../Heading/Heading'
const images = Object.values(import.meta.glob('../assets/img/*.{png,jpg}', { as: 'url', eager: true }));

function Portfolio() {
    const [modalOpen, setModalOpen] = useState(false);
    const [imgSrc, setImgSrc] = useState("");
    return (
        <>
            <Heading text={"portfolio component"} />
            <div className='row'>
                {images.map((image, index) => <div key={index} className='sm:w-full md:w-1/2 lg:w-1/3 p-5'>
                    <img src={image} className='w-full ' alt=''
                        onClick={(i) => {
                            setModalOpen(true);
                            setImgSrc(i.target.getAttribute("src"));
                        }}
                    />
                </div>)}
            </div>
            {modalOpen && <div className='fixed inset-0 z-20 center'>
                <div className='bg-sky-950 opacity-75 absolute w-full h-full' onClick={() => { setModalOpen(false); }}></div>
                <img src={imgSrc} className='w-1/3 z-30 relative' alt='' />
            </div>}
        </>
    )
}

export default Portfolio