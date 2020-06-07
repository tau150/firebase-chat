import React, { useState, useEffect } from 'react';

import Login from './screens/Login';
import auth from './resources';
import Loading from '../components/Loading';


const SessionContext = React.createContext();

const SessionProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true)

  const state = { user }
  const actions = { signOut: auth.signOut, signIn: auth.signIn }

  useEffect( () => {
    auth.onChange( user => {
      setIsLoading(false)
      if(user) setUser({id: user.uid, avatar: user.photoUrl, name: user.displayName})
    })
  },[])

  if(isLoading) return <Loading />
  if(!user) return <Login login={actions.signIn} />;

  return <SessionContext.Provider value={{ state, actions }}>{children}</SessionContext.Provider>;

}

export { SessionProvider as Provider, SessionContext as default };


