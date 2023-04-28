import React, { useEffect, useMemo, useState } from 'react';
import {
    Routes,
    Route,
    BrowserRouter as Router,
} from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'semantic-ui-css/semantic.min.css';
import Home from './components/home/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import EditProfile from './components/auth/EditProfile';
import AuthContext, { initialUserDetails } from './components/authContext/AuthContext';
import Notifications from './components/notifications/Notifications';
import Event from './components/events/Events';
import { checkIfUserLoggedIn } from './firebase/firebase';

function App() {
  const [userDetails, setUserDetails] = useState(initialUserDetails);
  const userDetailsValue = useMemo(() => ({ userDetails, setUserDetails } ), [userDetails]);

  useEffect(() => {
    checkIfUserLoggedIn(setUserDetails);
    
  }, [])
  return (
    <Router>
      <AuthContext.Provider value={userDetailsValue}>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path='/signup' element={<Register />} />
            <Route path='/edit-profile' element={<EditProfile />} />
            <Route path='/notifications' element={<Notifications />} />
            <Route path='/events' element={<Event />} />
          </Routes>
        </div>
      </AuthContext.Provider>
    </Router>
  );
}

export default App;
