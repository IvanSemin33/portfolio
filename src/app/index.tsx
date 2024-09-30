import Spline from "@splinetool/react-spline";
import styles from "./index.module.scss";
import {
  useOrientation,
  // useWindowSize
} from "react-use";
import { useEffect, useRef, useState } from "react";

import rotateAnimation from "../assets/rotate.json";
import loadingAnimation from "../assets/loading.json";
import useDeviceDetect from "@/hooks/useDeviceDetect";
import Lottie from "lottie-react";

type SplineProps = React.ComponentProps<typeof Spline>;

type Application = import("@splinetool/runtime").Application;

function App() {
  // const { width, height } = useWindowSize();
  const { type: orientation } = useOrientation();
  const { isMobile } = useDeviceDetect();

  const [isLoading, setIsLoading] = useState(true);
  const [shouldRotate, setShouldRotate] = useState(false);

  const [hideLoading, setHideLoading] = useState(isMobile ? true : false);
  const [hideRotate, setHideRotate] = useState(isMobile ? false : true);

  const spline = useRef<Application>();

  useEffect(() => {
    if (isMobile) {
      if (orientation.includes("portrait")) {
        setShouldRotate(true);
        setHideRotate(false);
      } else {
        setShouldRotate(false);
        setTimeout(() => {
          setHideRotate(true);
        }, 1000);
      }
    }
  }, [isMobile, orientation]);

  const onLoad: SplineProps["onLoad"] = (splineApp) => {
    spline.current = splineApp;

    setTimeout(() => {
      setIsLoading(false);

      setTimeout(() => {
        setHideLoading(true);
      }, 1000);
    }, 1000);
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.animationContainer}
        style={{
          opacity: shouldRotate ? 1 : 0,
          transition: "opacity 1s",
          display: hideRotate ? "none" : "flex",
        }}
      >
        <Lottie
          animationData={rotateAnimation}
          loop={true}
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            aspectRatio: "1/1",
          }}
        />
      </div>

      <div
        className={styles.animationContainer}
        style={{
          opacity: isLoading ? 1 : 0,
          transition: "opacity 1s",
          display: hideLoading ? "none" : "flex",
        }}
      >
        <Lottie
          animationData={loadingAnimation}
          loop={true}
          width={300}
          height={300}
        />
      </div>

      <Spline
        scene="https://prod.spline.design/x5ftb8OdNCYtzr2y/scene.splinecode"
        onLoad={onLoad}
        style={{
          display: isLoading || shouldRotate ? "none" : "block",
        }}
      />
    </div>
  );
}

export default App;
