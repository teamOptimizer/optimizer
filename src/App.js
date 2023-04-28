import React from 'react';
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
import Events from './components/events/Events';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path='/signup' element={<Register />} />
                    <Route path='/events' element={<Events />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
