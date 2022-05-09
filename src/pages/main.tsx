import { useEffect, useRef, useState, memo } from 'react';
import s from '../styles/main.module.scss';
import valley from '../assets/valley.mp4';
import castle from '../assets/castle.jpg';
import { Fade } from '@mui/material';
import { 
  FADE_OUT_VIDEO_MS, 
  FADE_OUT_VIDEO_SECONDS,
  FADE_IN_VIDEO_MS, 
  FADE_IN_MAIN_ABBREVIATED_MS, 
  FADE_IN_HEADER_MS, 
  FADE_IN_CASTLE_MS, 
  FADE_IN_CASTLE_BUFFER_SECONDS,
  FADE_IN_HEADER_TIMING_RATIO,
  PLAYBACK_RATE 
} from '../constants/video';



const Main = (): JSX.Element => {

  const videoRef = useRef() as React.RefObject<HTMLVideoElement>;

  const [fadeInVideo, setFadeInVideo] = useState(true);
  const [fadeInImage, setFadeInImage] = useState(false);
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

      const startVideoFadeOut = duration - FADE_OUT_VIDEO_SECONDS;
      const startImageFadeIn = startVideoFadeOut + FADE_IN_CASTLE_BUFFER_SECONDS; 

      if (!showHeading && currentTime > duration * FADE_IN_HEADER_TIMING_RATIO) { 
        setShowHeading(true); 
      } else if (fadeInVideo && currentTime > duration - FADE_OUT_VIDEO_SECONDS) { 
        setFadeInVideo(false);
      } else if (currentTime > startImageFadeIn) { 
        setFadeInImage(true); 
      }
    }
  }

  const onClickVideo = (): void => {
    if (fadeInVideo && !endVideoEarly) { 
      setFadeInVideo(false); 
      setShowHeading(true);
      setFadeInImage(true)
      setEndVideoEarly(true);
    }
  };

  return (
    <div className={s.Wrapper}>
      <Fade in={fadeInVideo} timeout={{ enter: FADE_IN_VIDEO_MS, exit: endVideoEarly ? FADE_IN_MAIN_ABBREVIATED_MS : FADE_OUT_VIDEO_MS }} unmountOnExit>
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
      <Fade in={fadeInImage} timeout={endVideoEarly ? FADE_IN_MAIN_ABBREVIATED_MS : FADE_IN_CASTLE_MS } easing="ease-in" mountOnEnter>
        <img className={s.Castle} src={castle} alt="castle"/>
      </Fade>
    </div>
  );
};

export default Main;
