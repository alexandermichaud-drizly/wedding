import React, { useEffect, useState } from 'react';
import MainPage from './pages/main';
import LandingPage from './pages/landing';


const App = (): JSX.Element => {  

  const [password, setPassword] = useState('');
  const [accessGranted, setAccessGranted] = useState(false);  
  
  const onPasswordChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ): void => setPassword(e.target.value); 
      
  useEffect(() => {      
    if (password === process.env.SITE_PASSWORD) {
      setAccessGranted(true);
    }
  }, [password]);

  return (
    <div>
      {accessGranted 
        ? <MainPage />
        : <LandingPage
            tempPage
            onPasswordChange={onPasswordChange}
          />
      }
    </div>
  );
};

export default App;
