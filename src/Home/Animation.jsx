import React, { useRef, useEffect } from "react";
import lottie from "lottie-web";
import animationData from "./animation.json"

const LottieAnimation = () => {
    const container = useRef(null);

    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: animationData,
        });
    }, []);

    return <div ref={container}></div>;
};

export default LottieAnimation;
