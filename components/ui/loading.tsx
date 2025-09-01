import Lottie from "lottie-react";
import animationData from "../../public/animations/loading.json";

const LoadingScreen = () => {
  return (
    <div className="flex justify-center items-center w-full h-full bg-black/30 backdrop-blur-md">
      <Lottie
        animationData={animationData}
        loop
        autoplay
        style={{ height: 200, width: 200 }}
      />
    </div>
  );
};


export default LoadingScreen;
