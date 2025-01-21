import React from 'react'

function Footer() {
    return (
        <>
            <div className="footer bg-[#2C3E50] text-white py-8">
                <div className="flex flex-wrap justify-center gap-6 m-4">
                    <div className="card bg-[#2C3E50] p-6 rounded shadow-lg text-center">
                        <h3 className="text-lg font-bold mb-4">LOCATION</h3>
                        <p>2215 John Daniel Drive</p>
                        <p>Clark, MO 65243</p>
                    </div>

                    <div className="card bg-[#2C3E50] p-6 rounded shadow-lg text-center">
                        <h3 className="text-lg font-bold mb-4">AROUND THE WEB</h3>
                        <div className="flex justify-center gap-4">
                            <i className="fa-brands fa-facebook text-xl hover:text-blue-500"></i>
                            <i className="fa-brands fa-twitter text-xl hover:text-blue-400"></i>
                            <i className="fa-brands fa-linkedin-in text-xl hover:text-blue-700"></i>
                            <i className="fa-solid fa-globe text-xl hover:text-green-500"></i>
                        </div>
                    </div>

                    <div className="card bg-[#2C3E50] p-6 rounded shadow-lg text-center">
                        <h3 className="text-lg font-bold mb-4">ABOUT FREELANCER</h3>
                        <p>
                            Freelance is a free-to-use, licensed Bootstrap theme created by
                            Route
                        </p>
                    </div>
                </div>
            </div>
            <div className='center w-full bg-gray-800 text-white text-center py-4'>
                <h6>Copyright © Donia Hassan 2025</h6>
            </div>
        </>
    )
}

export default Footer