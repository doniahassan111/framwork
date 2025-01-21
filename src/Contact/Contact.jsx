// eslint-disable-next-line no-unused-vars
import React from 'react'
import Heading from '../Heading/Heading'

function contact() {
    return (
        <>
            <Heading text={"contact component"} />
            <div className="pt-3 container">

                <div className="text-center pt-4" style={{ color: "#2c3e50" }}>
                    <div className="flex items-center justify-center mb-3">
                        <div className="h-[2px] w-1/4 bg-[#2c3e50] mr-3"></div>
                        <i className="fa-solid fa-star text-[#2c3e50]"></i>
                        <div className="h-[2px] w-1/4 bg-[#2c3e50] ml-3"></div>
                    </div>
                </div>

                <form className="w-1/2 p-3 mx-auto mt-5">

                    <label htmlFor="userName" className="block mb-2 font-medium">
                        UserName:
                    </label>
                    <input
                        id="userName"
                        type="text"
                        placeholder="UserName"
                        className="form-control border-0 border-b py-3 w-full focus:outline-none"
                    />


                    <label htmlFor="userAge" className="block mt-4 mb-2 font-medium">
                        UserAge:
                    </label>
                    <input
                        id="userAge"
                        type="text"
                        placeholder="UserAge"
                        className="form-control border-0 border-b py-3 w-full focus:outline-none"
                    />


                    <label htmlFor="userEmail" className="block mt-4 mb-2 font-medium">
                        UserEmail:
                    </label>
                    <input
                        id="userEmail"
                        type="text"
                        placeholder="UserEmail"
                        className="form-control border-0 border-b py-3 w-full focus:outline-none"
                    />

                    <label htmlFor="userPassword
        " className="block mt-4 mb-2 font-medium">
                        UserPassword:
                    </label>
                    <input
                        id="userPassword"
                        type="text"
                        placeholder="UserPassword"
                        className="form-control border-0 border-b py-3 w-full focus:outline-none"
                    />


                    <button
                        type="submit"
                        className="btn mt-4 text-white py-2 px-4 w-full"
                        style={{ backgroundColor: "#1abc9c" }}
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </>
    )
}

export default contact