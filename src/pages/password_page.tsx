import React from 'react';
import { 
  Dialog, 
  Button, 
  TextField, 
  DialogTitle, 
  DialogContent
} from '@mui/material'

const PasswordPage = (props: any): JSX.Element => (
  <div className="PasswordPage" >
    <img src="./assets/ring.jpg" alt="ring" />
      <Dialog open={!props.accessGranted} >
        <DialogTitle>
          Enter the password to view our wedding website!  
        </DialogTitle>
        <DialogContent>
          <TextField onChange={props.onPasswordChange} />
          <Button onClick={props.onSubmitPassword}>Enter</Button>
        </DialogContent>
     </Dialog>
  </div>
);

export default PasswordPage;