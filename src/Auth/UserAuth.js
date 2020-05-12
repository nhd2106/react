import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const UserAuth = ({component: Component,...props}) => {
    return (
      <Route
        {...props}
        render = {routerProps =>{
            const userInfo = JSON.parse(localStorage.getItem("userInfo"));
         
            
            if(userInfo) {
                return <Component {...routerProps}/>
            }
            return <Redirect to='sign-in'/>
        }}
      />
            
      
    )
}

export default UserAuth;
