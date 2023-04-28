import { createContext } from 'react';

export const initialUserDetails = {
    accessToken: '',
    userId: '',
    userDetails: '',
}

const AuthContext = createContext({
    userDetails: initialUserDetails,
    setUserDetails: () => {},
});

export default AuthContext;