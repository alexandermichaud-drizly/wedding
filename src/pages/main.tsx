import { useEffect } from "react";
import s from "../styles/main.module.scss";
import valley from "../assets/valley.mp4";

const Main = (): JSX.Element => {

  useEffect((): void => {
    const video = window.document.querySelector('video');
    if (video) video.playbackRate = 0.6;
  });

  return (
    <video autoPlay muted loop id="valley" className={s.Video} >
      <source src={valley} type="video/mp4" />
    </video>
  )

};

export default Main;