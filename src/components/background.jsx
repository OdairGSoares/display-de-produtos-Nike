import React from 'react'

const background = () => {
    return (
        <div className="fixed inset-0 -z-10">
            <video autoPlay loop muted className="w-full h-full object-cover">
                <source src="/background.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default background