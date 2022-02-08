import Lottie from "react-lottie";
import loading from "../../assets/lottie/loading.json";

const Loading = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} height="32px" width="160px" />;
};

export default Loading;
