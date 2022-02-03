import { Dialog, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import cn from 'classnames';
import ring from "./assets/ring.jpg";
import s from "./TempApp.module.scss";
import 'normalize.css';

const Background = (): JSX.Element => (
  <div className={s.Background}>
    <div className={s.BackgroundImage} />        
    <div className={s.Ring} > 
      <img src={ring} alt="ring" />
    </div>
  </div>
);

const ComingSoon = (): JSX.Element => (
  <Dialog 
    open 
    classes={{
      root: cn(s.Root, s.Dialog),
      container: cn(s.Container, s.Dialog), 
      paper: cn(s.Paper, s.Dialog) 
    }} 
    BackdropProps={{classes: { root: cn(s.Backdrop, s.Dialog) }}}
  >
    <DialogTitle className={cn(s.TitleText, s.Dialog)} >
      Coming soon...
    </DialogTitle>
    <DialogContent>
      <DialogContentText className={cn(s.ContentText, s.Dialog)}>
        Guests will be notified when our wedding site is ready
      </DialogContentText>
    </DialogContent>
  </Dialog>
);

const TempApp = (): JSX.Element => {  
  return (
    <>
      <Background />
      <ComingSoon />
    </>
  )
};

export default TempApp;