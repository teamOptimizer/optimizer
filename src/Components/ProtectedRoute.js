

import React from 'react'
import { Navigate } from 'react-router'

export const ProtectedRoute = (props) => {
    if( authenticated){
        return props.children
    }
    else{
        return <Navigate to="/"/>
    }
}
