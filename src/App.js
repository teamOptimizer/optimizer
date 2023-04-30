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
import EditProfile from './components/editProfile/EditProfile';
import CreateEvent from './components/events/CreateEvent';
import AuthContext, { initialUserDetails } from './components/authContext/AuthContext';
import Notifications from './components/notifications/Notifications';
import Event from './components/events/Events';
import Requests from './components/requests/Requests';
import { checkIfUserLoggedIn } from './firebase/firebase';
import { Loader } from 'semantic-ui-react';

function App() {
  const [userDetails, setUserDetails] = useState(initialUserDetails);
  const [isLoading, setIsLoading] = useState(false);
  const userDetailsValue = useMemo(() => ({ userDetails, setUserDetails } ), [userDetails]);

  useEffect(() => {
    // setIsLoading(true);
    checkIfUserLoggedIn((data) => { setUserDetails(data); setIsLoading(false) });
  }, [])

  return (
    <Router>
      <AuthContext.Provider value={userDetailsValue}>
        <div className="App">
          {isLoading ? (
            <div>
              <Loader active />
            </div>
          ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path='/signup' element={<Register />} />
            <Route path='/edit-profile' element={<EditProfile />} />
            <Route path='/notifications' element={<Notifications />} />
            <Route path='/events' element={<Event />} />
            <Route path='/create-event' element={<CreateEvent />} />
            <Route path='/requests' element={<Requests />} />
          </Routes>
          )}
        </div>
      </AuthContext.Provider>
    </Router>
  );
}

export default App;
