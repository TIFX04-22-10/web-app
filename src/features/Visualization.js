import React, { useState, useEffect, useRef } from "react";
import { useMousePos } from "./useMousePos";

import "./Visualization.css";

function Visualization(props) {

    const images =[];

    for (let i = 0; i < 237; i++) {
        images[i] = "http://localhost:5000/get-image/" + i;
    }

    const preloadImages = () => {
        for (let i = 1; i < 237; i++) {
            const img = new Image();
            img.src = images[i];
        }
    };

    preloadImages()

    const { posX, posY } = useMousePos();

    const targetRef = useRef();
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        if (targetRef.current) {
            setDimensions({
                width: targetRef.current.offsetWidth,
                height: targetRef.current.offsetHeight
            });
        }
    }, []);


    return (
        <div className="slideshow-container" ref={targetRef}>
            <h2>Result</h2>
            <img
                src={images[Math.floor(posX/3 % images.length) || 0]}
                alt=""
                width="1000px"
            />
        </div>
    );
}
export default Visualization;