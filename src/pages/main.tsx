import { useEffect, useRef, useState, memo } from 'react';
import s from '../styles/main.module.scss';
import valley from '../assets/valley.mp4';
import { Fade } from '@mui/material';

const VIDEO_TRANSITION_SECONDS = 5;
const VIDEO_TRANSITION = VIDEO_TRANSITION_SECONDS * 1000;
const VIDEO_TRANSITION_ABBREVIATED = 2500;
const VIDEO_TRANSITION_EXTENDED = 6500;

const Heading = memo((props: { showHeading: boolean, endVideoEarly: boolean }): JSX.Element => {
  return (
    <Fade in={props.showHeading} timeout={props.endVideoEarly ? VIDEO_TRANSITION_ABBREVIATED : VIDEO_TRANSITION_EXTENDED}>
      <h1 style={{ textAlign: 'center' }}>Join Us on May 23</h1>
    </Fade>
  )
});

const Main = (): JSX.Element => {

  const videoRef = useRef() as React.RefObject<HTMLVideoElement>;

  const [fadeOut, setFadeOut] = useState(false);
  const [videoComplete, setVideoComplete] = useState(false);
  const [showHeading, setShowHeading] = useState(false);
  const [endVideoEarly, setEndVideoEarly] = useState(false);

  useEffect((): void => {
    const video = videoRef.current;
    if (video) video.playbackRate = 0.7;
  });

  const handleTimeUpdate = (): void => {
    const video = videoRef.current;
    if (video) {
      const { currentTime, duration } = video;
      if (!showHeading && currentTime > duration / 3) setShowHeading(true);
      if (!fadeOut && currentTime > duration - VIDEO_TRANSITION_SECONDS) setFadeOut(true);
      if (!videoComplete && currentTime === duration) setVideoComplete(true);
    }
  }

  const onClickVideo = (): void => {
    if (!fadeOut && !videoComplete && !endVideoEarly) { 
      setFadeOut(true); 
      setShowHeading(true); 
      setEndVideoEarly(true);
    }
  };

  return (
    <>
      <Fade in={!fadeOut} timeout={{ enter: VIDEO_TRANSITION, exit: endVideoEarly ? VIDEO_TRANSITION : VIDEO_TRANSITION_ABBREVIATED }} unmountOnExit>
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
      <Heading showHeading={showHeading} endVideoEarly={endVideoEarly}/>
    </>
  );
};

export default Main;
