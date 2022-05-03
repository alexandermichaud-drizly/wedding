import { useEffect, useRef, useState } from "react";
import s from "../styles/main.module.scss";
import valley from "../assets/valley.mp4";
import classNames from "classnames";

const Main = (): JSX.Element => {

  const videoRef = useRef() as React.RefObject<HTMLVideoElement>;

  const [videoComplete, setVideoComplete] = useState(false);

  useEffect((): void => {
    const video = videoRef.current;
    if (video) video.playbackRate = 0.7;
  });

  const handleTimeUpdate = (): void => {
    const video = videoRef.current;
    video && video.currentTime === video.duration && setVideoComplete(true);
  }

  return (
    <>
      {videoComplete 
        ? <h1>Complete</h1>
        : <div className={s.FadeInAndOut}>
            <video 
              autoPlay 
              muted id="valley" 
              className={s.Video} 
              onTimeUpdate={handleTimeUpdate} 
              ref={videoRef} 
            >
              <source src={valley} type="video/mp4" />
            </video>
          </div>
      }
    </>
  );
};

export default Main;
