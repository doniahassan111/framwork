// eslint-disable-next-line no-unused-vars
import React from 'react'
import Heading from '../Heading/Heading'

function About() {
    return (
        <>
            <div>
                <Heading text={"about component"} />
                <div className="container mx-auto px-5 text-white">
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-1/2 px-5 md:pl-10">
                            <p>
                                Freelancer is a free bootstrap theme created by Route. The download
                                includes the complete source files including HTML, CSS, and
                                JavaScript as well as optional SASS stylesheets for easy
                                customization.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 px-5 md:pr-10">
                            <p>
                                Freelancer is a free bootstrap theme created by Route. The download
                                includes the complete source files including HTML, CSS, and
                                JavaScript as well as optional SASS stylesheets for easy
                                customization.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About