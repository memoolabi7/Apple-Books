"use client"

import Image from "next/image"
import IPhoneGallery from "./IPhoneGallery"
import { Parallax, ParallaxProvider } from "react-scroll-parallax"

export const Gallery = () => {
  return (
    <ParallaxProvider>
      <div className="flex gap-10 mx-auto justify-center align-middle overflow-hidden max-h-[55rem] max-w-[2000px] py-20 pt-15">
        {IPhoneGallery.map(({id, src, title, speed}) => (
          <Parallax key={id} speed={speed}>
            <Image className="drop-shadow-2xl drop-shadow-gray-600" key={id} src={src} alt={title}/>
          </Parallax>
        ))}
      </div>
    </ParallaxProvider>
  )
}

