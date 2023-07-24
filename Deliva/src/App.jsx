import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignUp from './components/Auth/signUp';
import SignIn from './components/Auth/signIn';
import ResetPassword from './components/Auth/resetPassword';
import ForgotPassword from './components/Auth/forgotPassword';
import Navbar from './components/LandingPage/Navbar';
import './App.css';

function App () {
  return (
    <>
      <div className="card">
      <Navbar />
      <SignIn />
      </div>
      {/* <BrowserRouter>
        <Switch>
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/reset-password" component={ResetPassword} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/" component={Navbar} />
        </Switch>
      </BrowserRouter> */}
    </>
  );
}

export default App
