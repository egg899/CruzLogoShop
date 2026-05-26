import { useState, useRef } from 'react';

import {
    motion,
    AnimatePresence
} from "framer-motion";

const ProductCarousel = ({ images }) => {

    const [currentIndex, setCurrentindex] = useState(0);

    const thumbnailsRef = useRef(null);

    const scrollLeft = () => {

        thumbnailsRef.current.scrollBy({
            left: -120,
            behavior: "smooth"
        });

    };//scrollLeft


    const scrollRight = () => {

        thumbnailsRef.current.scrollBy({
            left: 120,
            behavior: "smooth"
        });

    };//scrollRight



    return (

        <div className="container mt-5">

            <div className="d-flex gap-4 carousel-layout">

                {/* Miniaturas */}
                <div className="thumbnails-mobile-wrapper">

                   

                    <div
                        className="d-flex gap-2 thumbnails-container"
                        ref={thumbnailsRef}
                    >

                        {
                            images.map((img, index) => (

                                <img
                                    key={index}
                                    src={img}

                                    onClick={() =>
                                        setCurrentindex(index)
                                    }

                                    className={`
                                        thumbnail-image
                                        ${
                                            currentIndex === index
                                                ? "active-thumb"
                                                : ""
                                        }
                                    `}
                                />

                            ))
                        }

                    </div>

                    {/* Flecha derecha MOBILE */}
                     {/* Flecha izquierda MOBILE */}
                    <button
                        className="btn btn-outline-dark d-md-none me-2"
                        onClick={scrollLeft}
                    >
                        ←
                    </button>
                    <button
                        className="btn btn-outline-dark d-md-none ms-2"
                        onClick={scrollRight}
                    >
                        →
                    </button>

                </div>

                {/* Imagen principal */}
                <div
                    style={{
                        width: "100%",
                        maxWidth: "900px",
                        overflow: "hidden"
                    }}
                >

                    <AnimatePresence mode="wait">

                        <motion.img

                            key={images[currentIndex]}

                            src={images[currentIndex]}

                            alt=""

                            className="img-fluid rounded-4"

                            initial={{
                                x: 300,
                                opacity: 0
                            }}

                            animate={{
                                x: 0,
                                opacity: 1
                            }}

                            exit={{
                                x: -300,
                                opacity: 0
                            }}

                            transition={{
                                duration: 0.2
                            }}

                            style={{
                                width: "100%",
                                maxHeight: "650px",
                                objectFit: "contain"
                            }}
                        />

                    </AnimatePresence>

                </div>

            </div>

        </div>
    );

};

export { ProductCarousel };