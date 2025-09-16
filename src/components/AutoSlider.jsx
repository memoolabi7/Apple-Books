import Image from "next/image"

export const AutoSlider = ({ images, duration, width, height }) => {
    return (
        <>
            <div className="slider h-65 mt-2 overflow-hidden flex">
                <div className="flex gap-5 cursor-pointer animate-swipe-left"
                    style={{ animationDuration: `${duration}s` }}>
                    {
                        [...images, ...images, ...images].map((item, index) => (
                            <div key={`${item.id}-${index}`} className="flex flex-col items-start flex-shrink-0">
                                <Image src={item.src} alt={item.alt} width={width} height={height}
                                    className="object-cover rounded-lg" />
                                <span className="pt-2">{item.title}</span>
                                <span className="text-gray-400">{item.author}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

