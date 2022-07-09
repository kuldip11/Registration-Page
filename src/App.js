import logo from './logo.svg';
import './App.css';
import SignUp from './components/signUpComponents/SignUp';
import LogIn from './components/loginComponents/LogIn';
import { useState } from 'react';
import UserProfile from './components/userProfileComponents/UserProfile';
import ThankYou from './components/signUpComponents/ThankYou';

function App() {
  const [page, setPage] = useState('signup')
  
  const display = () => {
    switch(page){
      case 'signup': return <SignUp setPage={setPage}/>
      case 'thankyou': return <ThankYou setPage={setPage}/>;
      case 'login': return <LogIn setPage={setPage}/>;
      case 'userprofile': return <UserProfile setPage={setPage}/>;
    }
  }

  return (
    <div className="App">
      {display()}
    </div>
  );
}

export default App;
