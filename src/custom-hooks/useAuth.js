import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase.config';

const useAuth = () => {

    const [currentUser, setCurrentUser] = useState({})

    useEffect(() =>{
        onAuthStateChanged(auth, (users) => {
            if(users) {
                setCurrentUser(users);
            }
            else {
                setCurrentUser(null);
            }
        });
    });
  return {
    currentUser,
  };
};

export default useAuth;