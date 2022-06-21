import { useEffect, useRef, useState } from 'react';
import s from '../styles/main.module.scss';
import valley from '../assets/valley.mp4';
import castle from '../assets/castle.jpg';
import { Fade } from '@mui/material';
import { 
  FADE_OUT_VIDEO_MS, 
  FADE_OUT_VIDEO_SECONDS,
  FADE_IN_VIDEO_MS, 
  FADE_IN_MAIN_ABBREVIATED_MS, 
  FADE_IN_CASTLE_MS, 
  FADE_IN_CASTLE_BUFFER_SECONDS,
  PLAYBACK_RATE 
} from '../constants/video';
import { drawer, Sections, SectionType } from './components/sections';
import Countdown from './components/countdown';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';


const Main = (): JSX.Element => {

  const videoRef = useRef() as React.RefObject<HTMLVideoElement>;
  const [fadeInVideo, setFadeInVideo] = useState(true);
  const [fadeInImage, setFadeInImage] = useState(false);
  const [endVideoEarly, setEndVideoEarly] = useState(false);
  const [selectedSection, setSelectedSection] = useState(Sections[0]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (newValue: boolean = !drawerOpen) => (): void => setDrawerOpen(newValue);
  const handleSelectionClick = (section: SectionType) => () => setSelectedSection(section);

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

      if (fadeInVideo && currentTime > duration - FADE_OUT_VIDEO_SECONDS) { 
        setFadeInVideo(false);
      } else if (currentTime > startImageFadeIn) { 
        setFadeInImage(true); 
      }
    }
  }

  const onClickVideo = (): void => {
    if (fadeInVideo && !endVideoEarly) { 
      setFadeInVideo(false); 
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
      <Fade in={fadeInImage} timeout={FADE_IN_CASTLE_MS} easing="ease-in" mountOnEnter>
        <div>
          <IconButton onClick={toggleDrawer()}>
            <MenuIcon />
            <div className={s.MenuText}>Menu</div>
          </IconButton>
          <div className={s.Hero}>
            <div className={s.Heading}>Join us May 23, 2023</div>
            <img className={s.Castle} src={castle} alt="castle"/>
            <div className={s.Names}>Andrea and Alexander</div>
          </div>
          <Countdown />
          <div className={s.Container}>
            <div>
              {selectedSection.content}
            </div>
          </div>
        </div>
      </Fade>
      {drawer(drawerOpen, toggleDrawer, handleSelectionClick)}
    </div>
  );
};

export default Main;
