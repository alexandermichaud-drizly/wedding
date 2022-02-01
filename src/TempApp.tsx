import { Dialog, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import cn from 'classnames';
import ring from "./assets/ring.jpg";
import s from "./TempApp.module.scss";

const TempApp = (): JSX.Element => {  
  return (
    <div className={s.Content}>
      <div className={s.BackgroundImage} />
      <div className={s.Ring} > 
        <img src={ring} alt="ring" />
      </div>
      <Dialog open classes={{ paper: cn(s.Paper, s.Dialog) }}>
        <DialogTitle className={cn(s.TitleText, s.Dialog)} >
          Coming soon...
        </DialogTitle>
        <DialogContent>
          <DialogContentText className={cn(s.ContentText, s.Dialog)}>
            Guests will be notified when our wedding site is ready
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  )
};

export default TempApp;