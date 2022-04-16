import { 
  Dialog, 
  DialogContent, 
  DialogContentText, 
  DialogTitle, 
  Button, 
  TextField 
} from '@mui/material';
import cn from 'classnames';
import ring from "../assets/ring.jpg";
import s from "../styles/landing.module.scss";
import 'normalize.css';

type LandingPageProps = {
  tempPage: boolean;
  onSubmitPassword?(): void;
  onPasswordChange?(e: React.ChangeEvent<HTMLInputElement>): void;
  accessGranted?: boolean;
}

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

const PasswordInput = (props: any): JSX.Element => (
  <Dialog open={!props.accessGranted} >
    <DialogTitle>
      Enter the password to view our wedding website!  
    </DialogTitle>
    <DialogContent>
      <TextField onChange={props.onPasswordChange} />
      <Button onClick={props.onSubmitPassword}>Enter</Button>
    </DialogContent>
  </Dialog>
);

const LandingPage = (props: LandingPageProps): JSX.Element => {  
  return (
    <>
      <Background />
      {props.tempPage ? <ComingSoon /> : <PasswordInput />}
    </>
  )
};

export default LandingPage;