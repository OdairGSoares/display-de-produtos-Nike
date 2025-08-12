import React from 'react'
import Image from "next/image";
import { motion } from 'framer-motion';

const header = () => {
    return (
        <header className="flex justify-center items-end w-full h-20 sm:h-24 md:h-28 lg:h-35 px-4 sm:px-6 md:px-8">
            <motion.div
                animate={{ opacity: [0, 0.5, 1], scale: [0.5, 1.2 , 1] }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <Image 
                    src="/logo.svg" 
                    alt="logo" 
                    width={150} 
                    height={150}
                    className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-[150px] lg:h-[150px]"
                />
            </motion.div>
        </header>
    )
}

export default header