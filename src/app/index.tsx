import Spline from "@splinetool/react-spline";
import styles from "./index.module.scss";
import {
  useOrientation,
  // useWindowSize
} from "react-use";
import { useEffect, useRef, useState } from "react";
import { useLottie } from "lottie-react";
import rotateAnimation from "../assets/rotate.json";
import loadingAnimation from "../assets/loading.json";
import useDeviceDetect from "@/hooks/useDeviceDetect";

type SplineProps = React.ComponentProps<typeof Spline>;

type Application = import("@splinetool/runtime").Application;

function App() {
  // const { width, height } = useWindowSize();
  const { type } = useOrientation();
  const { isMobile } = useDeviceDetect();

  const [isLoading, setIsLoading] = useState(true);
  const [shouldRotate, setShouldRotate] = useState(false);

  const spline = useRef<Application>();

  useEffect(() => {
    console.log({isMobile, type})
    if (isMobile) {
      if (type.includes("portrait")) {
        setShouldRotate(true);
      } else {
        setShouldRotate(false);
      }
    }
  }, [isMobile, type]);

  const { View: RotateAnimation } = useLottie({
    animationData: rotateAnimation,
    loop: true,
    height: 300,
    width: 300,
  });

  const { View: LoadingAnimation } = useLottie({
    animationData: loadingAnimation,
    loop: true,
    width: 300,
    height: 300,
  });

  const onLoad: SplineProps["onLoad"] = (splineApp) => {
    spline.current = splineApp;

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className={styles.container}>
      {shouldRotate ? (
        <div className={styles.animationContainer}>{RotateAnimation}</div>
      ) : (
        <>
          {isLoading && (
            <div className={styles.animationContainer}>{LoadingAnimation}</div>
          )}
          <Spline
            scene="https://prod.spline.design/x5ftb8OdNCYtzr2y/scene.splinecode"
            onLoad={onLoad}
            style={{
              opacity: isLoading ? 0 : 1,
              transition: "opacity 1.5s",
            }}
          />
        </>
      )}
    </div>
  );
}

export default App;
