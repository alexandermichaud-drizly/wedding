import { 
  Dialog, 
  DialogContent, 
  DialogContentText, 
  DialogTitle, 
  TextField ,
  FormControl
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
  <Dialog open classes={{root: s.PasswordModal}}>
    <DialogTitle className={cn(s.TitleText, s.Dialog)}>
      What's the password? 
    </DialogTitle>
    <DialogContent className={s.PasswordEntry}>
      <FormControl classes={{ root: s.InputField }}>
        <TextField onChange={props.onPasswordChange} />
      </FormControl>
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