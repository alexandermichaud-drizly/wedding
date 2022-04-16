import * as React from 'react';
import MainPage from './pages/main';
import LandingPage from './pages/landing';

interface AppState {
  password: string;
  accessGranted: boolean;
}

const App = (): JSX.Element => {  

  const [state, setState] = React.useState<AppState>({
    password: '',
    accessGranted: false,
  });
  
  const onSubmitPassword = (): void => {
    if (state.password === process.env.SITE_PASSWORD) {
      setState({
        ...state,
        accessGranted: true
      })
    }
  }

  const onPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => setState({ ...state, password: e.target.value} );

  return (
    <div>
      {
        state.accessGranted 
          ? <MainPage />
          : <LandingPage
              tempPage={false} 
              onSubmitPassword={onSubmitPassword}
              onPasswordChange={onPasswordChange}
              accessGranted={state.accessGranted} 
            />
      }
    </div>
  );
};

export default App;
