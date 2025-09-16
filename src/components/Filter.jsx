import { AutoSlider } from "./AutoSlider";
import { Slider_1, Slider_2 } from "./AutoSliderData";

const title = "A library you’ll want<br>to get lost in."
const discription = `Browse our global catalog featuring millions of bestsellers,
    new releases, and classics<br>with new audiobooks and ebooks added every week.`

export const Filter = () => {
    return (
        <section className="text-gray-900 dark:bg-gray-900 dark:text-white mt-[-100px]">
            <div className="px-4 mx-auto max-w-screen-xl text-center py-10 lg:py-20">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">
                    {title.split("<br>")[0]}
                    <br />
                    {title.split("<br>")[1]}
                </h1>
                <p className="mb-8 text-lg font-norma dark:text-gray-400 text-gray-500 lg:text-xl sm:px-16 lg:px-48">
                    {discription.split("<br>")[0]}
                    <br />
                    {discription.split("<br>")[1]}
                </p>
                <div className="flex justify-center mb-[-30px]">
                    <ul className="flex flex-col sm:flex-row rounded-xl sm:rounded-full justify-center align-middle gap-3 text-sm bg-gray-200 p-2">
                        <li className="px-4 py-2 rounded-full cursor-pointer select-none hover:bg-gray-900 hover:text-white text-gray-900">Bestselling Audiobooks</li>
                        <li className="px-4 py-2 rounded-full cursor-pointer select-none bg-gray-900 text-white">New & Trending Ebooks</li>
                        <li className="px-4 py-2 rounded-full cursor-pointer select-none hover:bg-gray-900 hover:text-white text-gray-900">Fan-Favorite Audiobooks</li>
                    </ul>
                </div>
            </div>
            <AutoSlider images={Slider_1} duration={25} width={180} height={180} />
            <AutoSlider images={Slider_2} duration={35} width={140} height={140} />
        </section>

    )
}
