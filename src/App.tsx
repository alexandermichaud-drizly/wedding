import * as React from 'react';
import PasswordPage from './pages/password_page';
import MainPage from './pages/main_page';

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
          ? <PasswordPage 
              onSubmitPassword={onSubmitPassword}
              onPasswordChange={onPasswordChange}
              accessGranted={state.accessGranted} 
            />
          : <MainPage />
      }
    </div>
  );
};

export default App;
