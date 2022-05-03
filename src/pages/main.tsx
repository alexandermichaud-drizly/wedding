import { useEffect, useRef, useState, memo } from 'react';
import s from '../styles/main.module.scss';
import valley from '../assets/valley.mp4';
import castle from '../assets/castle.jpg';
import { Fade } from '@mui/material';


const FADE_IN_VIDEO_SECONDS = 5;
const FADE_IN_MAIN_SECONDS = 6;
const FADE_IN_MAIN_MS = FADE_IN_MAIN_SECONDS * 1000;
const FADE_IN_VIDEO_MS = FADE_IN_VIDEO_SECONDS * 1000;
const FADE_IN_MAIN_ABBREVIATED_MS = 2500;
const FADE_IN_HEADER_MS = 6500;
const FADE_IN_CASTLE_MS = 10000;
const FADE_IN_CASTLE_ABBREVIATED_MS = 5000;
const PLAYBACK_RATE = 0.7;

const Main = (): JSX.Element => {

  const videoRef = useRef() as React.RefObject<HTMLVideoElement>;

  const [fadeInMain, setFadeInMain] = useState(false);
  const [showHeading, setShowHeading] = useState(false);
  const [endVideoEarly, setEndVideoEarly] = useState(false);

  useEffect((): void => {
    const video = videoRef.current;
    if (video) video.playbackRate = PLAYBACK_RATE;
  });

  const handleTimeUpdate = (): void => {
    const video = videoRef.current;
    if (video) {
      const { currentTime, duration } = video;
      if (!showHeading && currentTime > duration / 3) setShowHeading(true);
      if (!fadeInMain && currentTime > duration - FADE_IN_MAIN_SECONDS) setFadeInMain(true);
    }
  }

  const onClickVideo = (): void => {
    if (!fadeInMain && !endVideoEarly) { 
      setFadeInMain(true); 
      setShowHeading(true); 
      setEndVideoEarly(true);
    }
  };

  return (
    <div className={s.Wrapper}>
      <Fade in={!fadeInMain} timeout={{ enter: FADE_IN_VIDEO_MS, exit: endVideoEarly ? FADE_IN_MAIN_ABBREVIATED_MS : FADE_IN_MAIN_MS }} unmountOnExit>
        <video 
          autoPlay 
          muted id="valley" 
          className={s.Video} 
          onTimeUpdate={handleTimeUpdate} 
          ref={videoRef}
          onClick={onClickVideo}
        >
          <source src={valley} type="video/mp4" />
        </video>
      </Fade>
      <Fade in={showHeading} timeout={endVideoEarly ? FADE_IN_MAIN_ABBREVIATED_MS : FADE_IN_HEADER_MS}>
        <h1 style={{ textAlign: 'center', color: "white" }}>Join Us on May 23</h1>
      </Fade>
      <Fade in={fadeInMain} timeout={endVideoEarly ? FADE_IN_CASTLE_ABBREVIATED_MS : FADE_IN_CASTLE_MS }><div className={s.Castle} /></Fade>
    </div>
  );
};

export default Main;
