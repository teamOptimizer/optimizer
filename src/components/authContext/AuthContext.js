import { createContext } from 'react';

export const initialUserDetails = {
    accessToken: '',
    userId: '',
    isLoggedIn: false,
    userData: {},
}

const AuthContext = createContext({
    userDetails: initialUserDetails,
    setUserDetails: () => {},
});

export default AuthContext;