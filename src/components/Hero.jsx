import React from 'react'
import { FaArrowRightLong, FaBookOpen } from "react-icons/fa6";

const title = "Read, listen, discover.<br>All in one app."
const discription = `Apple Books is the single destination to find, buy, and dive into audiobooks and ebooks.
    Browse curated collections and get personalized recommendations.
    Share your books with up to five family members.
    All with no subscription or monthly commitment.`

export const Hero = () => {
    return (
        <section className="text-gray-900 dark:bg-gray-900 dark:text-white mb-[-120px]">
            <div className="px-4 mx-auto max-w-screen-xl text-center py-10 lg:py-20">
                <FaBookOpen className="mx-auto text-8xl bg-orange-400 py-3 px-4 mb-5 rounded-3xl text-white dark:bg-transparent border dark:border-white"/>
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">
                    {title.split("<br>")[0]}
                    <br/>
                    {title.split("<br>")[1]}
                </h1>
                <p className="mb-8 text-lg font-norma dark:text-gray-400 text-gray-500 lg:text-xl sm:px-16 lg:px-48">
                    {discription}
                </p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                    <a href="#" className="mx-2 inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 dark:bg-gray-500 dark:hover:bg-gray-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                        Get started
                        <FaArrowRightLong className='ml-3'/>
                    </a>
                    <a href="#" className="mx-2 inline-flex justify-center dark:hover:text-black items-center py-3 px-5 sm:ms-4 text-base font-medium text-center border border-gray-500 dark:border-white dark:text-white text-gray-500 rounded-lg  hover:bg-gray-200 focus:ring-4 focus:ring-gray-400">
                        Learn more
                    </a>
                </div>
            </div>
        </section>
    )
}