import React, { useState } from 'react';
import MainPage from './pages/main';
import LandingPage from './pages/landing';

interface AppState {
  password: string;
  accessGranted: boolean;
  isLoading: boolean;
}

const App = (): JSX.Element => {  

  const [state, setState] = useState<AppState>({
    password: '',
    accessGranted: false,
    isLoading: false,
  });
  
  const onSubmitPassword = (e: React.KeyboardEvent): void => {
    console.log(e.key);
    if (e.key === 'Enter') {
      e.preventDefault();
      console.log(process.env.SITE_PASSWORD);
      if (state.password === process.env.SITE_PASSWORD) {
        setState({
          ...state,
          accessGranted: true
        })
      }
    }
  }

  const onPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => setState({ ...state, password: e.target.value});

  return (
    <div>
      {!state.accessGranted && !state.isLoading && 
        <LandingPage
          tempPage={false} 
          onSubmitPassword={onSubmitPassword}
          onPasswordChange={onPasswordChange}
          accessGranted={state.accessGranted} 
        />
      }
      {state.accessGranted && <MainPage />}
    </div>
  );
};

export default App;
