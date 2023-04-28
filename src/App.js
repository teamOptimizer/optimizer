import React, { useMemo, useState } from 'react';
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

function App() {
  const [userDetails, setUserDetails] = useState(initialUserDetails);
  const userDetailsValue = useMemo(() => ({ userDetails, setUserDetails } ), [userDetails]);

  console.log(userDetails, 'hello userDetails');
  return (
    <Router>
      <AuthContext.Provider value={userDetailsValue}>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path='/signup' element={<Register />} />
            <Route path='/edit-profile' element={<EditProfile />} />
          </Routes>
        </div>
      </AuthContext.Provider>
    </Router>
  );
}

export default App;
