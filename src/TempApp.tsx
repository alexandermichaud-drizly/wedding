import { Dialog, DialogTitle } from '@mui/material';
import ring from "./assets/ring.jpg";
import s from "./TempApp.module.scss";

const TempApp = (): JSX.Element => {  
  return (
    <div className={s.Content}>
      <div className={s.BackgroundImage} />
      <div className={s.Ring} > 
        <img src={ring} alt="ring" />
      </div>
      <Dialog open>
        <DialogTitle>
          Check back here on March 27 for our full wedding website!
        </DialogTitle>
      </Dialog>
    </div>
  )
};

export default TempApp;