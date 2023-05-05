import React, { useEffect, useRef, useState } from 'react';
import useWindowWidth from '../hooks/useWindowWidth';

import Image from 'next/image';
import img1 from '../public/slideshow/slide-01.webp';
import img2 from '../public/slideshow/slide-02.webp';
import img3 from '../public/slideshow/slide-03.webp';
import img4 from '../public/slideshow/slide-04.webp';
import img5 from '../public/slideshow/slide-05.webp';
import img6 from '../public/slideshow/slide-06.webp';
import img7 from '../public/slideshow/slide-07.webp';
import img8 from '../public/slideshow/slide-08.webp';

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const SlideShow = ({ interval = 5000, transitionDuration = 1000 }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const randomLeftValues = useRef<number[]>([]);
    const isSmallWindow = useWindowWidth(600);

    useEffect(() => {
        if (isSmallWindow) {
            randomLeftValues.current = images.map(() => 0);
        } else {
            randomLeftValues.current = images.map(() => Math.floor(Math.random() * 301));
        }
    }, [isSmallWindow]);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, interval);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="carousel">
            {images.map((image, index) => {
                return (

                    <div
                        key={index}
                        className={`carousel-image ${index === activeIndex ? 'active' : ''}`}
                        style={{ transitionDuration: `${transitionDuration}ms`, left: `${randomLeftValues.current[index]}px`, transition: `opacity ${transitionDuration}ms ease-in-out` }}
                    >
                        <Image src={image} alt={`Slide ${index + 1}`} quality={90} height={500} />
                    </div>
                )
            })}
        </div>
    );
};

export default SlideShow;