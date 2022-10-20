import React from 'react'
import { useSelector } from "react-redux";

const Welcome = () => {

    const { user } = useSelector((state) => state.auth);

    return (
        <div>Welcome, {user ? user.name : 'no name'}</div>
    )
}

export default Welcome