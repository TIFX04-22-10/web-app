import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { useMousePos } from "./useMousePos";

import "./Visualization.css";

function Visualization(props) {

    const [currentImage, setCurrentImage] = useState(0);
    /*const [images, setImages] = useState([
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
        "https://d17fnq9dkz9hgj.cloudfront.net/uploads/2012/11/152964589-welcome-home-new-cat-632x475.jpg",
        "https://i.ytimg.com/vi/jpsGLsaZKS0/maxresdefault.jpg"
    ]);*/
    /*const importAll = require =>
        require.keys().reduce((acc, next) => {
            acc[next.replace("./", "")] = require(next);
            return acc;
        }, {});

    const images = importAll(
        require.context("./../../api/output", false, /\.(png|jpe?g|svg)$/)
    );*/
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

    //src={images[Math.floor(posX * images.length / dimensions.width) || 0]}

    return (
        <div className="slideshow-container" ref={targetRef}>
            <img
                src={images[Math.floor(posX/3 % images.length) || 0]}
                alt=""
            />
        </div>
    );
}
/*const rootElement = document.getElementById("root");
ReactDOM.render(<Visualization />, rootElement);*/
export default Visualization;