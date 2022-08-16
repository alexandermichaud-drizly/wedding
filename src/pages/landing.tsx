import * as React from 'react';
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material';
import cn from 'classnames';
import ring from '../assets/ring.jpg';
import s from '../styles/landing.module.scss';

type LandingPageProps = {
  tempPage: boolean;
  onPasswordChange?(e: React.ChangeEvent<HTMLTextAreaElement>): void;
};

const Background = (): JSX.Element => (
  <div className={s.Background}>
    <div className={s.BackgroundImage} />
    <div className={s.Ring}>
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
      paper: cn(s.Paper, s.Dialog),
    }}
    BackdropProps={{ classes: { root: cn(s.Backdrop, s.Dialog) } }}
  >
    <DialogTitle className={cn(s.TitleText, s.Dialog)}>
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
  <Dialog open classes={{ paper: cn(s.Dialog, s.Paper) }}>
    <DialogTitle className={cn(s.TitleText, s.Dialog)}>
      What&apos;s the password?
    </DialogTitle>
    <DialogContent className={s.PasswordEntry}>
      <TextField
        classes={{ root: s.InputField }}
        onChange={props.onInputChange}
      />
    </DialogContent>
  </Dialog>
);

const LandingPage = (props: LandingPageProps): JSX.Element => {
  return (
    <>
      <Background />
      {props.tempPage ? (
        <ComingSoon />
      ) : (
        <PasswordInput onInputChange={props.onPasswordChange} />
      )}
    </>
  );
};

export default LandingPage;
