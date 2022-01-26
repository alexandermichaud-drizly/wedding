import { Dialog, DialogTitle } from '@mui/material';
import ring from "./assets/ring.jpg";

const TempApp = (): JSX.Element => {  
  return (
    <div>
      <img src={ring} alt="ring" />
        <Dialog open>
          <DialogTitle>
            Check back here for our full wedding website on March 27, 2022!
          </DialogTitle>
        </Dialog>
    </div>
  )
};

export default TempApp;