import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import React from 'react'
import { useState, useEffect } from 'react'

const Userhooks = () => {
    const [user, setuser] = useState(null);
    const [isLoding, setisLoding] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(getAuth(), user => {
            setuser(user);
            setisLoding(false)
        })
        return unsubscribe;
    }, [])
    return { user, isLoding }
}
export default Userhooks