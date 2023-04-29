import React from "react";
import Lottie from "lottie-react";
import LottieAnimation from "./animation.json";
function HeroLottie() {
    return <div className="custom-backdrop-loader p-8">
        <Lottie animationData={LottieAnimation} className="" />
    </div>
}
export default HeroLottie;